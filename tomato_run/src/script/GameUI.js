import GameControl from "./GameControl"

export default class GameUI extends Laya.Scene {
    constructor() {
        super();
        // 设置单例的引用方式，方便其他类引用
        GameUI.instance = this;
        // 关闭多点触控
        Laya.MouseManager.multiTouchEnabled = false;

        // 开始游戏标志
        this.start = false;

        // 初始化分数
        this.score = 0;
        // 初始化金币
        this.medalScore = 0;

        this.startGame = this.startGame;
        this.stopGame = this.stopGame;

        // 记录当前碰到的柱子
        this.currentPillar = undefined;
    }

    setCurrentPillar(item) {
        this.currentPillar = item;
    }

    /**增加分数 */
    addScore() {
        this.score = +this.score + 1;
        this.scoreLbl.changeText(this.score);
    }

    /**增加金币 */
    addMedal() {
        this.medalScore = +this.medalScore + 1;
        this.medalLbl.changeText(this.medalScore);
        //随着分数越高，难度增大
        // if (this._control.createBoxInterval > 600 && this.score % 20 == 0) this._control.createBoxInterval -= 20;
    }

    startGame() {
        this.start = true;
    }

    stopGame() {
        this.start = false;
        Laya.SoundManager.stopAllSound();
        Laya.SoundManager.playSound("sound/fail.wav", 1);
    }

    onEnable() {
    }

    onTipClick(e) {
    }
}