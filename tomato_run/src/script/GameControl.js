import GameUI from './GameUI';
import level1 from '../config/level1';
import Pillar1 from './Pillar1';
import Pillar2 from './Pillar2';
import Pillar3 from './Pillar3';
import Tomato from './Tomato';
import Gold from './Gold';
import Trap from './Trap';

export default class GameControl extends Laya.Script {
    /** @prop { name: Pillar1, tips: "一级柱子", type: Prefab} */
    /** @prop { name: Pillar2, tips: "二级柱子", type: Prefab} */
    /** @prop { name: Pillar3, tips: "三级柱子", type: Prefab} */
    /** @prop { name: Trap, tips: "陷阱", type: Prefab} */
    /** @prop { name: Gold, tips: "金币", type: Prefab} */
    /** @prop { name: Tomato, tips: "番茄", type: Prefab} */
    constructor() {
        super();
        // 时间计数器
        this.timer = 0;

        // 重力加速度
        this.gravity = 1.5;

        // 番茄实例
        this.tomatoInstance = undefined;

        // 屏幕设备宽度，从20%位置创建柱子
        this.deviceWidth = Laya.stage.width;
        this.startWidth = this.deviceWidth * .2;

        // 柱子距离底部距离，默认屏幕高度的20%
        this.deviceHeight = Laya.stage.height;
        this.startHeight = this.deviceHeight * .80;

        // 原始位移
        this.originDistance = 6;

        // 每次移动的距离
        this.distancePerFPS = this.originDistance;

        // 计数器，记录已经移动过的距离
        this.distance = 0;

        // 计数器，记录当前处于第几个柱子
        this.current = 0;

        // 柱子宽度
        this.pillarWidth = 90;

        // 番茄宽度
        this.tomatoWidth = 120;

        // 番茄初始位置
        this.tomatoOriginHeight = this.startHeight - this.tomatoWidth + 20;

        // 番茄向上速度
        this.upSpeed = -45;

        // 基始起跳高度
        this.baseHeight = 0;

        // 计算点击参考，原始值为一阶高度，遇上二级三级补偿差值
        this.baseJumpHight = 0;

        // 长跳跃标志位
        this.jump = false;
        this.lastLongJump = false;

        // 记录起跳之后移动的距离
        this.jumpDistance = 0;

        // 高跳跃标志位
        this.highJump = false;
        this.lastHighJump = false;

        // 记录跳起时机
        this.beforeJump = false;

        // 标志位，记录在落地前已经点了跳跃，下次落地检测检测到此变量时自动起跳
        this.nextJump = false;

        

        // 起跳计数器，一旦起跳30秒内不能再次点击，起跳之后每一帧自增1
        this.jumpTimer = 0;

        // 记录番茄长跳跃标志位，长跳跃落地后起跳距离不是整数倍情况
        this.afterNextJump = false;

    }

    restartGame() {
        // Laya.Scene.open("main/main.scene");
        GameUI.instance.removeSelf();
        Laya.Scene.open("home/home.scene");
        Laya.SoundManager.playSound("sound/hit.wav");
    }

    stop() {
        GameUI.instance.removeSelf();
        Laya.Scene.open("home/home.scene");
        Laya.SoundManager.playSound("sound/hit.wav");
    }

    onEnable() {
        // 定义一个用于承载所有子对象的元素
        this._gameBox = this.owner.getChildByName("gameBox");

        // 渲染前十个
        this.renderFirstTen();

        // 创建番茄
        this.createTomato();

        // 死亡控制
        this.dialog = this.owner.getChildByName('deadDialog');
        this.stopButton = this.dialog.getChildByName('stop');
        this.stopButton.on(Laya.Event.CLICK, null, this.stop);
        this.restartButton = this.dialog.getChildByName('restartGame');
        this.restartButton.on(Laya.Event.CLICK, null, this.restartGame);

        // 播放音乐
        Laya.SoundManager.stopAllSound();
        Laya.SoundManager.playSound("sound/bgm.wav", 100);
    }

    onUpdate(time) {
        if (GameUI.instance.start) {
            this.timer = this.timer + 1;

            this.movePillar();

            // 主要处理落地后点击跳跃
            if (this.jump) this.setJumpSpeed();

            // 检查是否到达柱子，到达柱子重新计算向上速度，主要处理落地前点击跳跃
            if (this.tomatoInstance.pillarEnter) this.setUpSpeed();

            // 检查是否死亡
            if (this.tomatoInstance.trapEnter) this.setDead();

            if (this.jumpTimer) this.jumpTimer++;

            this.updateDistance();
            this.checkDistance();
            this.moveTomato();
        }
    }

    setJumpSpeed() {
        Laya.SoundManager.playSound('sound/hit2.wav');
        let distance = this.distance % (this.pillarWidth * 2);

        // 落地之前点击起跳
        if (distance > 90) {
            // 同级
            if (level1[this.current + 1].height === level1[this.current + 2].height) {
                // 起跳计数器启动，目前30秒内不可再次点击起跳
                this.jumpTimer = this.jumpTimer + 1;
                // 恢复起跳标志位
                this.jump = false;
                // 记录下一次落地后起跳
                this.nextJump = true;
            }
            // 高一级
            if (level1[this.current + 1].height + 1 === level1[this.current + 2].height) {
                // 起跳计数器启动，目前30秒内不可再次点击起跳
                this.jumpTimer = this.jumpTimer + 1;
                // 恢复起跳标志位
                this.jump = false;
                // 记录下一次落地后起跳
                this.nextJump = true;
                // debugger;
            }
        }
        // 落地时起跳
        if (distance === 0) {
            // 情况等同于<90
        }

        // 落地后起跳
        if (distance < 90) {
            // 同级
            if (level1[this.current].height === level1[this.current + 1].height) {
                // 判断点击时机是否是整倍数
                if (this.timer % 2 === 0) return;
                // 起跳计数器启动，目前30秒内不可再次点击起跳
                this.jumpTimer = this.jumpTimer + 1;
                // 剩余时间
                const time = (360 - (this.timer + 1) * this.distancePerFPS) / (this.originDistance * 2);
                // 速度变为2倍
                this.distancePerFPS = this.originDistance * 2;
                // 已经向上距离
                const h = (this.upSpeed * this.timer) + this.gravity * Math.pow(this.timer, 2);
                // 计算向上距离
                this.upSpeed = (h - this.gravity * time * time) / time;
                // 恢复起跳标志位
                this.jump = false;
            }
            // 高一级
            if (level1[this.current].height + 1 === level1[this.current + 1].height) {
                // 起跳计数器启动，目前30秒内不可再次点击起跳
                this.jumpTimer = this.jumpTimer + 1;
                // 剩余时间
                const time = (180 - (this.timer - 2) * this.distancePerFPS) / (this.originDistance);
                // 已经向上距离
                const h = (this.upSpeed * this.timer) + this.gravity * Math.pow(this.timer, 2);
                // 计算向上距离
                this.upSpeed = (h - 60 - this.gravity * time * time) / time;
                // 恢复起跳标志位
                this.jump = false;
                // debugger;
            }
        }
    }

    setDead() {
        const that = this;
        setTimeout(() => {
            GameUI.instance.stopGame();
            that.dialog.visible = true;
            that.tomatoInstance.getChildByName('jump').visible = false;
            that.tomatoInstance.getChildByName('dead').play(0, false);
            that.tomatoInstance.getComponent(Laya.CircleCollider).isSensor = true
            that.tomatoInstance.y = this.tomatoInstance.y + 60;
        }, 100);
    }

    checkDead() {
        if (this.distance % (this.pillarWidth * 2) !== 0) {
            this.setDead();
        }
    }

    setUpSpeed() {
        Laya.SoundManager.playSound('sound/hit1.wav');
        this.checkDead();
        
        this.timer = 1;
        this.baseHeight = 0;
        this.upSpeed = -45;
        this.distancePerFPS = this.originDistance;
        this.jumpTimer = 0;

        if (this.nextJump) {
            // 前面同等级
            if (level1[this.current].height === level1[this.current + 1].height) {
                this.distancePerFPS = this.originDistance * 2;
                this.nextJump = false;
                this.tomatoInstance.x = this.tomatoInstance.x + 6;
                return;
            }
            // 前面高一级
            if (level1[this.current].height + 1 === level1[this.current + 1].height) {
                // 起跳计数器启动，目前30秒内不可再次点击起跳
                this.jumpTimer = this.jumpTimer + 1;
                // 剩余时间
                const time = (180 - (this.timer - 2) * this.distancePerFPS) / (this.originDistance);
                // 已经向上距离
                const h = (this.upSpeed * this.timer) + this.gravity * Math.pow(this.timer, 2);
                // 计算向上距离
                this.upSpeed = (h - 60 - this.gravity * time * time) / time;
                this.nextJump = false;
                return;
            }
        }

        // 前面低一级，自动降级
        if (level1[this.current].height - 1 && level1[this.current + 1].height) {
            this.baseHeight = -60;
            // this.upSpeed = -(1.5 * Math.pow((180 / this.distancePerFPS), 2) - 180) / (180 / this.distancePerFPS);
            // debugger;
            // this.upSpeed = (60 - this.gravity * Math.pow((180 / this.distancePerFPS), 2)) / (180 / this.distancePerFPS);
            this.upSpeed = -38;
        }
        // 前面高一级
        // if (level1[this.current].height === 2 && level1[this.current + 1].height === 1) {
        //     this.baseHeight = -60;
        //     this.upSpeed = -(1.5 * Math.pow((180 / this.distancePerFPS), 2) - 180) / (180 / this.distancePerFPS);
        // }
        // debugger;
    }

    // 位置矫正
    correctPillar() {
        let distance = this.distance % (this.pillarWidth * 2);
        if (distance === 0) return;
        this._gameBox._children.map(s => {
            if (s.name === "pillar1") {
                s.pos(s.x - distance, s.y);
            }
            if (s.name === "pillar2") {
                s.pos(s.x - distance, s.y);
            }
        });
    }

    // 移动番茄
    moveTomato() {
        const h = (this.upSpeed * this.timer) + this.gravity * Math.pow(this.timer, 2);
        this.tomatoInstance.y = this.tomatoOriginHeight + h / 3 + this.baseHeight;
    }

    isBeforeJump() {
        let distance = this.distance % (this.pillarWidth * 2);
        if (distance < 90) return true;
        return false;
    }

    // 移动柱子
    movePillar() {
        // 每次移动过了一个柱子的距离时重建一个新的柱子，已经退出屏幕的柱子由柱子对象本身回收
        this._gameBox._children.map(s => {
            if (s.name === "pillar1") {
                s.pos(s.x - this.distancePerFPS, s.y);
            }
            if (s.name === "trap") {
                s.pos(s.x - this.distancePerFPS, s.y);
            }
            if (s.name === "gold") {
                s.pos(s.x - this.distancePerFPS, s.y);
            }
        });
    }

    // 检查是否需要创建新的柱子
    checkDistance() {
        // 如果移动距离超过一个柱子间距，目前88 * 2
        if (this.distance % (this.pillarWidth * 2) === 0) {
            
            this.current = this.current + 1;
            GameUI.instance.addScore();

            if (!level1[this.current + 1]) {
                // 最后一个
                return;
            }

            if (this.current) {
                const next = level1[this.current + 9];
                if (next.type === 'box') {
                    if (next.gold) this.createGold(next, 9);
                    this.createPillar(next, 9);
                }
                if (next.type === 'trap') {
                    if (next.gold) this.createGold(next, 9);
                    this.createTrap(next, 9);
                }
            }
            // this.createPillar(level1[this.current], 9);

            return;
        }
    }

    // 更新已经走过的距离
    updateDistance() {
        let perDistance = this.distancePerFPS;
        this.distance = this.distance + perDistance;

        // 走到柱子中间时更新屏幕点击基准
        // if ((this.distance / this.pillarWidth) % 2 === 1) {
        //     this.baseJumpHight = 0;
        //     if (level1[this.current].height === 1 && level1[this.current + 1].height === 2) this.baseJumpHight = 60;
        //     if (level1[this.current].height === 2 && level1[this.current + 1].height === 3) this.baseJumpHight = 120;
        // }
    }

    // 屏幕点击
    onStageClick(e) {
        //停止事件冒泡
        e.stopPropagation();

        // 将开始游戏标志位提升到GameUI级别，定义为全局变量
        if (!GameUI.instance.start && GameUI.instance.score === 0) {
            GameUI.instance.startGame();
        } else {
            // 播放点击动画
            this.playClickAnimation(e);

            // 检测是否已经在起跳状态
            if (this.jump) return;
            if (this.jumpTimer) return;
            const distance = this.tomatoInstance.y - this.tomatoOriginHeight + this.baseJumpHight;
            if (Math.abs(distance) < 150) {
                this.jump = true;
                // console.log('点击准确');
                // debugger;
            }
        }
    }

    playClickAnimation(e) {
        const clickAnimation = this.owner.getChildByName('click');
        if (clickAnimation.visible) return;
        clickAnimation.pos(e.stageX - 300, e.stageY - 300);
        clickAnimation.visible = true;
        clickAnimation.play(0, false);
        setTimeout(function() {
            clickAnimation.visible = false;
        }, 150)
        // debugger;
    }

    // 定义highJump
    setHighJump() {
        this.highJump = true;
    }

    // 定义长跳跃
    setLongJump() {
        this.jump = true;
    }

    // 先渲染前十个
    renderFirstTen() {
        const list = level1.slice(0, 10);
        list.map((s, index) => {
            if (s.type === 'box') {
                if (s.gold) this.createGold(s, index);
                this.createPillar(s, index);
            }
            if (s.type === 'trap') {
                if (s.gold) this.createGold(s, index);
                this.createTrap(s, index);
            }
        })
    }

    // 创建柱子
    createPillar(item, index, mistake = 0) {
        let box = Laya.Pool.getItemByCreateFun("Pillar1", this.Pillar1.create, this.Pillar1);
        if (item.height === 1) box = Laya.Pool.getItemByCreateFun("Pillar1", this.Pillar1.create, this.Pillar1);
        if (item.height === 2) box = Laya.Pool.getItemByCreateFun("Pillar2", this.Pillar2.create, this.Pillar2);
        box.pos(this.startWidth + index * this.pillarWidth * 2 + mistake, this.startHeight);
        this._gameBox.addChild(box);
    }

    // 创建番茄
    createTomato() {
        this.tomatoInstance = Laya.Pool.getItemByCreateFun("undefined", this.Tomato.create, this.Tomato);
        this.tomatoInstance.pos(this.startWidth - (this.tomatoWidth - this.pillarWidth) / 2, this.tomatoOriginHeight);
        this.tomatoInstance.zOrder = 9;
        this._gameBox.addChild(this.tomatoInstance);
    }

    // 创建陷阱
    createTrap(item, index, mistake = -45) {
        let trap = Laya.Pool.getItemByCreateFun("Trap", this.Trap.create, this.Trap);
        trap.pos(this.startWidth + index * this.pillarWidth * 2 + mistake, this.startHeight + 20);
        this._gameBox.addChild(trap);
    }
    // 创建金币
    createGold(item, index, mistake = -10) {
        let gold = Laya.Pool.getItemByCreateFun("Gold", this.Gold.create, this.Gold);
        gold.pos(this.startWidth + index * this.pillarWidth * 2 + mistake, this.startHeight - 160);
        this._gameBox.addChild(gold);
    }
}