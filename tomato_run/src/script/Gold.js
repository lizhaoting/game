import GameUI from './GameUI';

export default class Gold extends Laya.Script {
    constructor() { super(); }
    onEnable() {
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this._rig = this.owner.getComponent(Laya.RigidBody);
    }

    onUpdate() {
        if (this.owner._x < -88) {
            this.owner.removeSelf();
        }
    }

    onTriggerEnter(other, self, contact) {
        this.owner.removeSelf();
        GameUI.instance.addMedal();
    }

    onDisable() {
        Laya.Pool.recover("Gold", this.owner);
    }
}