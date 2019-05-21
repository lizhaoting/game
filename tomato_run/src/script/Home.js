import GameConfig from "../GameConfig";

export default class Home extends Laya.Scene {
    constructor() {
        super();
        Home.instance = this;
    }

    onEnable() {
        // 开始游戏
        this.getChildByName('startGame').on(Laya.Event.CLICK, this, this.startGame);
        // 分享游戏
        this.getChildByName('shareGame').on(Laya.Event.CLICK, this, this.shareGame);
        // 播放音乐
        Laya.SoundManager.playSound("sound/bgm.wav", 100);
    }

    startGame() {
        // 加载主场景
        GameConfig.mainScene && Laya.Scene.open(GameConfig.mainScene);
        Laya.SoundManager.playSound("sound/hit.wav");
    }

    shareGame() {
        if (Laya.Browser.onMiniGame) this.wx = Laya.Browser.window.wx;
        if (this.wx) {
            this.wx.onShareAppMessage(function () {
                return {
                    title: "这个游戏我玩了很高分，你敢来挑战吗？",
                    imageUrlId: 'Y7xtKX9VRE-2VwWf_TZt3w',
                    imageUrl: 'https://mmocgame.qpic.cn/wechatgame/16ukNDOWQ5Cbq6cW9yMa5KVuyiaN4gD4siaiaJ1UKibHcnueuMRLYyicNu7ULJUkNQ2bia/0'
                }
            })
            this.wx.shareAppMessage({
                title: "这个游戏我玩了很高分，你敢来挑战吗？",
                imageUrlId: 'Y7xtKX9VRE-2VwWf_TZt3w',
                imageUrl: 'https://mmocgame.qpic.cn/wechatgame/16ukNDOWQ5Cbq6cW9yMa5KVuyiaN4gD4siaiaJ1UKibHcnueuMRLYyicNu7ULJUkNQ2bia/0',
                success: () => {},
                fail: () => {}
            })
        }
    }
}