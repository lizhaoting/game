import GameUI from './GameUI';

export default class Pillar3 extends Laya.Script {
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
        if (!GameUI.instance.start) return;

        const wave = this.owner.getChildByName('wave');
        wave.visible = true;
        wave.play(0, false);

        const dust = this.owner.getChildByName('dust');
        dust.visible = true;
        dust.play(0, false);

        setTimeout(() => {
            wave.visible = false;
            dust.visible = false;
        }, 500);
    }

    onDisable() {
        Laya.Pool.recover("Pillar3", this.owner);
    }
}