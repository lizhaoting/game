var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();!function(){function e(t,o,i){function n(r,h){if(!o[r]){if(!t[r]){var l="function"==typeof require&&require;if(!h&&l)return l(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var g=o[r]={exports:{}};t[r][0].call(g.exports,function(e){var o=t[r][1][e];return n(o||e)},g,g.exports,e,t,o,i)}return o[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}return e}()({1:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=e("./script/Home"),h=i(r),l=e("./script/List"),u=i(l),g=e("./script/GameUI"),s=i(g),p=e("./script/GameControl"),c=i(p),y=e("./script/Gold"),d=i(y),f=e("./script/Pillar1"),b=i(f),x=e("./script/Pillar2"),m=i(x),v=e("./script/Pillar3"),w=i(v),_=e("./script/Tomato"),P=i(_),j=e("./script/Trap"),O=i(j),L=function(){function e(){n(this,e)}return a(e,null,[{key:"init",value:function(){var e=Laya.ClassUtils.regClass;e("script/Home.js",h["default"]),e("script/List.js",u["default"]),e("script/GameUI.js",s["default"]),e("script/GameControl.js",c["default"]),e("script/Gold.js",d["default"]),e("script/Pillar1.js",b["default"]),e("script/Pillar2.js",m["default"]),e("script/Pillar3.js",w["default"]),e("script/Tomato.js",P["default"]),e("script/Trap.js",O["default"])}}]),e}();o["default"]=L,L.width=1334,L.height=750,L.scaleMode="fixedwidth",L.screenMode="none",L.alignV="top",L.alignH="left",L.startScene="home/home.scene",L.mainScene="main/main.scene",L.sceneRoot="",L.debug=!1,L.stat=!1,L.physicsDebug=!1,L.exportSceneToJson=!0,L.init()},{"./script/GameControl":4,"./script/GameUI":5,"./script/Gold":6,"./script/Home":7,"./script/List":8,"./script/Pillar1":9,"./script/Pillar2":10,"./script/Pillar3":11,"./script/Tomato":12,"./script/Trap":13}],2:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=e("./GameConfig"),h=i(r),l=e("./ui/layaMaxUI"),u=(i(l),function(){function e(){n(this,e),window.Laya3D?Laya3D.init(h["default"].width,h["default"].height):Laya.init(h["default"].width,h["default"].height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=h["default"].scaleMode,Laya.stage.screenMode=h["default"].screenMode,Laya.stage.alignV=h["default"].alignV,Laya.stage.alignH=h["default"].alignH,Laya.URL.exportSceneToJson=h["default"].exportSceneToJson,(h["default"].debug||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel(),h["default"].physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),h["default"].stat&&Laya.Stat.show(),Laya.alertGlobalError=!0,Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.onVersionLoaded),Laya.ResourceVersion.FILENAME_VERSION)}return a(e,[{key:"onVersionLoaded",value:function(){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(this,this.onConfigLoaded))}},{key:"onConfigLoaded",value:function(){h["default"].startScene&&Laya.Scene.open(h["default"].startScene)}}]),e}());new u},{"./GameConfig":1,"./ui/layaMaxUI":14}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=[{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"trap",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"trap",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:1},{type:"box",gold:!0,height:1},{type:"trap",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"stab",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"stab",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"stab",gold:!0,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!0,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!0,height:1},{type:"box",gold:!0,height:2},{type:"box",gold:!0,height:1},{type:"box",gold:!0,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:2},{type:"box",gold:!1,height:1},{type:"trap",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1},{type:"box",gold:!1,height:1}];o["default"]=i},{}],4:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=e("../config/level1"),s=i(g),p=e("./Pillar1"),c=(i(p),e("./Pillar2")),y=(i(c),e("./Pillar3")),d=(i(y),e("./Tomato")),f=(i(d),e("./Gold")),b=(i(f),e("./Trap")),x=(i(b),function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.timer=0,e.gravity=1.5,e.tomatoInstance=void 0,e.deviceWidth=Laya.stage.width,e.startWidth=.2*e.deviceWidth,e.deviceHeight=Laya.stage.height,e.startHeight=.8*e.deviceHeight,e.originDistance=6,e.distancePerFPS=e.originDistance,e.distance=0,e.current=0,e.pillarWidth=90,e.tomatoWidth=120,e.tomatoOriginHeight=e.startHeight-e.tomatoWidth+20,e.upSpeed=-45,e.baseHeight=0,e.baseJumpHight=0,e.jump=!1,e.lastLongJump=!1,e.jumpDistance=0,e.highJump=!1,e.lastHighJump=!1,e.beforeJump=!1,e.nextJump=!1,e.jumpTimer=0,e.afterNextJump=!1,e}return r(t,e),h(t,[{key:"restartGame",value:function(){u["default"].instance.removeSelf(),Laya.Scene.open("home/home.scene"),Laya.SoundManager.playSound("sound/hit.wav")}},{key:"stop",value:function(){u["default"].instance.removeSelf(),Laya.Scene.open("home/home.scene"),Laya.SoundManager.playSound("sound/hit.wav")}},{key:"onEnable",value:function(){this._gameBox=this.owner.getChildByName("gameBox"),this.renderFirstTen(),this.createTomato(),this.dialog=this.owner.getChildByName("deadDialog"),this.stopButton=this.dialog.getChildByName("stop"),this.stopButton.on(Laya.Event.CLICK,null,this.stop),this.restartButton=this.dialog.getChildByName("restartGame"),this.restartButton.on(Laya.Event.CLICK,null,this.restartGame),Laya.SoundManager.stopAllSound(),Laya.SoundManager.playSound("sound/bgm.wav",100)}},{key:"onUpdate",value:function(e){u["default"].instance.start&&(this.timer=this.timer+1,this.movePillar(),this.jump&&this.setJumpSpeed(),this.tomatoInstance.pillarEnter&&this.setUpSpeed(),this.tomatoInstance.trapEnter&&this.setDead(),this.jumpTimer&&this.jumpTimer++,this.updateDistance(),this.checkDistance(),this.moveTomato())}},{key:"setJumpSpeed",value:function(){Laya.SoundManager.playSound("sound/hit2.wav");var e=this.distance%(2*this.pillarWidth);if(e>90&&(s["default"][this.current+1].height===s["default"][this.current+2].height&&(this.jumpTimer=this.jumpTimer+1,this.jump=!1,this.nextJump=!0),s["default"][this.current+1].height+1===s["default"][this.current+2].height&&(this.jumpTimer=this.jumpTimer+1,this.jump=!1,this.nextJump=!0)),90>e){if(s["default"][this.current].height===s["default"][this.current+1].height){if(this.timer%2===0)return;this.jumpTimer=this.jumpTimer+1;var t=(360-(this.timer+1)*this.distancePerFPS)/(2*this.originDistance);this.distancePerFPS=2*this.originDistance;var o=this.upSpeed*this.timer+this.gravity*Math.pow(this.timer,2);this.upSpeed=(o-this.gravity*t*t)/t,this.jump=!1}if(s["default"][this.current].height+1===s["default"][this.current+1].height){this.jumpTimer=this.jumpTimer+1;var i=(180-(this.timer-2)*this.distancePerFPS)/this.originDistance,n=this.upSpeed*this.timer+this.gravity*Math.pow(this.timer,2);this.upSpeed=(n-60-this.gravity*i*i)/i,this.jump=!1}}}},{key:"setDead",value:function(){var e=this,t=this;setTimeout(function(){u["default"].instance.stopGame(),t.dialog.visible=!0,t.tomatoInstance.getChildByName("jump").visible=!1,t.tomatoInstance.getChildByName("dead").play(0,!1),t.tomatoInstance.getComponent(Laya.CircleCollider).isSensor=!0,t.tomatoInstance.y=e.tomatoInstance.y+60},100)}},{key:"checkDead",value:function(){this.distance%(2*this.pillarWidth)!==0&&this.setDead()}},{key:"setUpSpeed",value:function(){if(Laya.SoundManager.playSound("sound/hit1.wav"),this.checkDead(),this.timer=1,this.baseHeight=0,this.upSpeed=-45,this.distancePerFPS=this.originDistance,this.jumpTimer=0,this.nextJump){if(s["default"][this.current].height===s["default"][this.current+1].height)return this.distancePerFPS=2*this.originDistance,this.nextJump=!1,void(this.tomatoInstance.x=this.tomatoInstance.x+6);if(s["default"][this.current].height+1===s["default"][this.current+1].height){this.jumpTimer=this.jumpTimer+1;var e=(180-(this.timer-2)*this.distancePerFPS)/this.originDistance,t=this.upSpeed*this.timer+this.gravity*Math.pow(this.timer,2);return this.upSpeed=(t-60-this.gravity*e*e)/e,void(this.nextJump=!1)}}s["default"][this.current].height-1&&s["default"][this.current+1].height&&(this.baseHeight=-60,this.upSpeed=-38)}},{key:"correctPillar",value:function(){var e=this.distance%(2*this.pillarWidth);0!==e&&this._gameBox._children.map(function(t){"pillar1"===t.name&&t.pos(t.x-e,t.y),"pillar2"===t.name&&t.pos(t.x-e,t.y)})}},{key:"moveTomato",value:function(){var e=this.upSpeed*this.timer+this.gravity*Math.pow(this.timer,2);this.tomatoInstance.y=this.tomatoOriginHeight+e/3+this.baseHeight}},{key:"isBeforeJump",value:function(){var e=this.distance%(2*this.pillarWidth);return 90>e?!0:!1}},{key:"movePillar",value:function(){var e=this;this._gameBox._children.map(function(t){"pillar1"===t.name&&t.pos(t.x-e.distancePerFPS,t.y),"trap"===t.name&&t.pos(t.x-e.distancePerFPS,t.y),"gold"===t.name&&t.pos(t.x-e.distancePerFPS,t.y)})}},{key:"checkDistance",value:function(){if(this.distance%(2*this.pillarWidth)!==0);else{if(this.current=this.current+1,u["default"].instance.addScore(),!s["default"][this.current+1])return;if(this.current){var e=s["default"][this.current+9];"box"===e.type&&(e.gold&&this.createGold(e,9),this.createPillar(e,9)),"trap"===e.type&&(e.gold&&this.createGold(e,9),this.createTrap(e,9))}}}},{key:"updateDistance",value:function(){var e=this.distancePerFPS;this.distance=this.distance+e}},{key:"onStageClick",value:function(e){if(e.stopPropagation(),u["default"].instance.start||0!==u["default"].instance.score){if(this.playClickAnimation(e),this.jump)return;if(this.jumpTimer)return;var t=this.tomatoInstance.y-this.tomatoOriginHeight+this.baseJumpHight;Math.abs(t)<150&&(this.jump=!0)}else u["default"].instance.startGame()}},{key:"playClickAnimation",value:function(e){var t=this.owner.getChildByName("click");t.visible||(t.pos(e.stageX-300,e.stageY-300),t.visible=!0,t.play(0,!1),setTimeout(function(){t.visible=!1},150))}},{key:"setHighJump",value:function(){this.highJump=!0}},{key:"setLongJump",value:function(){this.jump=!0}},{key:"renderFirstTen",value:function(){var e=this,t=s["default"].slice(0,10);t.map(function(t,o){"box"===t.type&&(t.gold&&e.createGold(t,o),e.createPillar(t,o)),"trap"===t.type&&(t.gold&&e.createGold(t,o),e.createTrap(t,o))})}},{key:"createPillar",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=Laya.Pool.getItemByCreateFun("Pillar1",this.Pillar1.create,this.Pillar1);1===e.height&&(i=Laya.Pool.getItemByCreateFun("Pillar1",this.Pillar1.create,this.Pillar1)),2===e.height&&(i=Laya.Pool.getItemByCreateFun("Pillar2",this.Pillar2.create,this.Pillar2)),i.pos(this.startWidth+t*this.pillarWidth*2+o,this.startHeight),this._gameBox.addChild(i)}},{key:"createTomato",value:function(){this.tomatoInstance=Laya.Pool.getItemByCreateFun("undefined",this.Tomato.create,this.Tomato),this.tomatoInstance.pos(this.startWidth-(this.tomatoWidth-this.pillarWidth)/2,this.tomatoOriginHeight),this.tomatoInstance.zOrder=9,this._gameBox.addChild(this.tomatoInstance)}},{key:"createTrap",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-45,i=Laya.Pool.getItemByCreateFun("Trap",this.Trap.create,this.Trap);i.pos(this.startWidth+t*this.pillarWidth*2+o,this.startHeight+20),this._gameBox.addChild(i)}},{key:"createGold",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-10,i=Laya.Pool.getItemByCreateFun("Gold",this.Gold.create,this.Gold);i.pos(this.startWidth+t*this.pillarWidth*2+o,this.startHeight-160),this._gameBox.addChild(i)}}]),t}(Laya.Script));o["default"]=x},{"../config/level1":3,"./GameUI":5,"./Gold":6,"./Pillar1":9,"./Pillar2":10,"./Pillar3":11,"./Tomato":12,"./Trap":13}],5:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameControl"),u=(i(l),function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return t.instance=e,Laya.MouseManager.multiTouchEnabled=!1,e.start=!1,e.score=0,e.medalScore=0,e.startGame=e.startGame,e.stopGame=e.stopGame,e.currentPillar=void 0,e}return r(t,e),h(t,[{key:"setCurrentPillar",value:function(e){this.currentPillar=e}},{key:"addScore",value:function(){this.score=+this.score+1,this.scoreLbl.changeText(this.score)}},{key:"addMedal",value:function(){this.medalScore=+this.medalScore+1,this.medalLbl.changeText(this.medalScore)}},{key:"startGame",value:function(){this.start=!0}},{key:"stopGame",value:function(){this.start=!1,Laya.SoundManager.stopAllSound(),Laya.SoundManager.playSound("sound/fail.wav",1)}},{key:"onEnable",value:function(){}},{key:"onTipClick",value:function(e){}}]),t}(Laya.Scene));o["default"]=u},{"./GameControl":4}],6:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody)}},{key:"onUpdate",value:function(){this.owner._x<-88&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,o){this.owner.removeSelf(),u["default"].instance.addMedal()}},{key:"onDisable",value:function(){Laya.Pool.recover("Gold",this.owner)}}]),t}(Laya.Script);o["default"]=g},{"./GameUI":5}],7:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("../GameConfig"),u=i(l),g=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return t.instance=e,e}return r(t,e),h(t,[{key:"onEnable",value:function(){this.getChildByName("startGame").on(Laya.Event.CLICK,this,this.startGame),this.getChildByName("shareGame").on(Laya.Event.CLICK,this,this.shareGame),Laya.SoundManager.playSound("sound/bgm.wav",100)}},{key:"startGame",value:function(){u["default"].mainScene&&Laya.Scene.open(u["default"].mainScene),Laya.SoundManager.playSound("sound/hit.wav")}},{key:"shareGame",value:function(){Laya.Browser.onMiniGame&&(this.wx=Laya.Browser.window.wx),this.wx&&(this.wx.onShareAppMessage(function(){return{title:"这个游戏我玩了很高分，你敢来挑战吗？",imageUrlId:"Y7xtKX9VRE-2VwWf_TZt3w",imageUrl:"https://mmocgame.qpic.cn/wechatgame/16ukNDOWQ5Cbq6cW9yMa5KVuyiaN4gD4siaiaJ1UKibHcnueuMRLYyicNu7ULJUkNQ2bia/0"}}),this.wx.shareAppMessage({title:"这个游戏我玩了很高分，你敢来挑战吗？",imageUrlId:"Y7xtKX9VRE-2VwWf_TZt3w",imageUrl:"https://mmocgame.qpic.cn/wechatgame/16ukNDOWQ5Cbq6cW9yMa5KVuyiaN4gD4siaiaJ1UKibHcnueuMRLYyicNu7ULJUkNQ2bia/0",success:function(){},fail:function(){}}))}}]),t}(Laya.Scene);o["default"]=g},{"../GameConfig":1}],8:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=(i(l),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){}}]),t}(Laya.Script));o["default"]=u},{"./GameUI":5}],9:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody)}},{key:"onUpdate",value:function(){this.owner._x<-88&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,o){if(u["default"].instance.start){var i=this.owner.getChildByName("wave");i.visible=!0,i.play(0,!1);var n=this.owner.getChildByName("dust");n.visible=!0,n.play(0,!1),setTimeout(function(){i.visible=!1,n.visible=!1},500)}}},{key:"onDisable",value:function(){Laya.Pool.recover("Pillar1",this.owner)}}]),t}(Laya.Script);o["default"]=g},{"./GameUI":5}],10:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody)}},{key:"onUpdate",value:function(){this.owner._x<-88&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,o){if(u["default"].instance.start){var i=this.owner.getChildByName("wave");i.visible=!0,i.play(0,!1);var n=this.owner.getChildByName("dust");n.visible=!0,n.play(0,!1),setTimeout(function(){i.visible=!1,n.visible=!1},500)}}},{key:"onDisable",value:function(){Laya.Pool.recover("Pillar2",this.owner)}}]),t}(Laya.Script);o["default"]=g},{"./GameUI":5}],11:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t;
}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody)}},{key:"onUpdate",value:function(){this.owner._x<-88&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,o){if(u["default"].instance.start){var i=this.owner.getChildByName("wave");i.visible=!0,i.play(0,!1);var n=this.owner.getChildByName("dust");n.visible=!0,n.play(0,!1),setTimeout(function(){i.visible=!1,n.visible=!1},500)}}},{key:"onDisable",value:function(){Laya.Pool.recover("Pillar3",this.owner)}}]),t}(Laya.Script);o["default"]=g},{"./GameUI":5}],12:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=i(l),g=e("./GameControl"),s=(i(g),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody),this.owner.pillarEnter=!0,this.owner.trapEnter=!1}},{key:"onUpdate",value:function(){this.owner.pillarEnter=!1}},{key:"onTriggerEnter",value:function(e,t,o){u["default"].instance.start&&("Pillar1"===e.name&&(u["default"].instance.setCurrentPillar(e.owner),this.owner.pillarEnter=!0,this.owner.getChildByName("jump").play(0,!1),e.owner.getChildByName("shake").play(0,!1)),"Pillar2"===e.name&&(u["default"].instance.setCurrentPillar(e.owner),this.owner.getChildByName("jump").play(0,!1),this.owner.pillarEnter=!0,e.owner.getChildByName("shake").play(0,!1)),"Trap"===e.name&&(this.owner.trapEnter=!0))}},{key:"onDisable",value:function(){Laya.Pool.recover("Tomato",this.owner)}}]),t}(Laya.Script));o["default"]=s},{"./GameControl":4,"./GameUI":5}],13:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=e("./GameUI"),u=(i(l),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),h(t,[{key:"onEnable",value:function(){this._rig=this.owner.getComponent(Laya.RigidBody)}},{key:"onUpdate",value:function(){this.owner._x<-88&&this.owner.removeSelf()}},{key:"onTriggerEnter",value:function(e,t,o){}},{key:"onDisable",value:function(){Laya.Pool.recover("Trap",this.owner)}}]),t}(Laya.Script));o["default"]=u},{"./GameUI":5}],14:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});Laya["class"],Laya["static"],laya.ui.View,laya.ui.Dialog,Laya.Scene;window.ui||(window.ui={}),o["default"]=ui},{}]},{},[2]);