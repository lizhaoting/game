import GameUI from './GameUI';
import GameControl from "./GameControl"

export default class Tomato extends Laya.Script {
    constructor() { super(); }
    onEnable() {
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
        // 标志位，记录碰见柱子
        this.owner.pillarEnter = true;
        // 碰见陷阱标志位
        this.owner.trapEnter = false;
    }

    onUpdate() {
        this.owner.pillarEnter = false;
    }

    onTriggerEnter(other, self, contact) {
        if (!GameUI.instance.start) return;

        // const playSound = `sound/hit${Math.floor(Math.random()* 3 + 1)}.wav`;

        if (other.name === 'Pillar1') {
            GameUI.instance.setCurrentPillar(other.owner);
            // Laya.SoundManager.playSound(playSound);
            this.owner.pillarEnter = true;
            this.owner.getChildByName('jump').play(0, false);
            other.owner.getChildByName('shake').play(0, false);
        }
        if (other.name === 'Pillar2') {
            GameUI.instance.setCurrentPillar(other.owner);
            // Laya.SoundManager.playSound(playSound);
            this.owner.getChildByName('jump').play(0, false);
            this.owner.pillarEnter = true;
            other.owner.getChildByName('shake').play(0, false);
        }
        if (other.name === 'Trap') {
            this.owner.trapEnter = true;
            // this.owner.pillarEnter = true;
            // this.owner.getChildByName('jump').visible = false;
            // this.owner.getChildByName('dead').play(0, false);
            // GameUI.instance.stopGame();
        }
    }

    onDisable() {
        Laya.Pool.recover("Tomato", this.owner);
    }
}