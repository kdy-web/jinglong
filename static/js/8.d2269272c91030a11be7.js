webpackJsonp([8],{g6EJ:function(t,i){},"n/G1":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={components:{Bottom:s("RgB6").a},data:function(){return{font:this.$store.state.font,list:{}}},created:function(){this.getData()},mounted:function(){document.getElementById("myCanvas1").width=window.innerWidth,document.getElementById("myCanvas2").width=window.innerWidth,this.wave1(),this.wave2()},methods:{wave1:function(){var t=3300,i=-60,s=40,e=8,a=-1e3,n=250,r=90,c=t/e,o=c/2,l=o/2,v=document.getElementById("myCanvas1"),_=v.getContext("2d");!function h(){-1*i===c&&(i=0),_.clearRect(0,0,v.width,v.height),_.fillStyle="rgba(255, 255, 255, 0.5)",_.beginPath();var u=n-r;_.moveTo(a-i,u);for(var d=0;d<e;d++){var m=d*c+a-i;_.quadraticCurveTo(m+l,u+s,m+o,u),_.quadraticCurveTo(m+l+o,u-s,m+c,u)}_.lineTo(a+t,3e3),_.lineTo(a,3e3),_.fill(),setTimeout(h,25)}()},wave2:function(){var t=3300,i=180,s=50,e=8,a=-500,n=250,r=90,c=t/e,o=c/2,l=o/2,v=document.getElementById("myCanvas2"),_=v.getContext("2d");!function h(){-1*i===c&&(i=0),_.clearRect(0,0,v.width,v.height),_.fillStyle="white",_.beginPath();var u=n-r;_.moveTo(a-i,u);for(var d=0;d<e;d++){var m=d*c+a-i;_.quadraticCurveTo(m+l,u+s,m+o,u),_.quadraticCurveTo(m+l+o,u-s,m+c,u)}_.lineTo(a+t,3e3),_.lineTo(a,3e3),_.fill(),setTimeout(h,5e3/60)}()},showError:function(){this.$toast.center("正在建设中，敬请期待")},getData:function(){var t=this,i={s:this.$store.state.sessionId,a:1};this.$Api.UserDetails(i).then(function(i){console.log(i),"操作成功"!=i.q.d?(t.$toast.center("您还未登录"),t.$router.push({name:"Binding"})):t.list=i.q})}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"top"},[s("div",{staticClass:"background"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"avatar"},[s("p",[t._v(t._s(t.list.realName))])])]),t._v(" "),1==t.list.declareSwitch?s("div",{staticClass:"item",staticStyle:{"margin-top":"0.8rem"},on:{click:t.showError}},[t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),2==t.list.declareSwitch?s("router-link",{staticClass:"item",staticStyle:{"margin-top":"0.8rem"}},[s("div",{staticClass:"left"},[s("i",{staticStyle:{background:"url(../../../static/home_1.png) no-repeat","background-size":"100% 100%"}}),t._v(" "),s("span",[t._v("入户申报")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",[t._v("已开通")]),t._v(" "),s("i")])]):t._e(),t._v(" "),2==t.list.applySwitch?s("router-link",{staticClass:"item",attrs:{to:{name:"Applyforexamination"}}},[s("div",{staticClass:"left"},[s("i",{staticStyle:{background:"url(../../../static/home_2.png) no-repeat","background-size":"100% 100%"}}),t._v(" "),s("span",[t._v("报考申请")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",[t._v("已开通")]),t._v(" "),s("i")])]):t._e(),t._v(" "),1==t.list.applySwitch?s("div",{staticClass:"item",on:{click:t.showError}},[t._m(3),t._v(" "),t._m(4)]):t._e(),t._v(" "),2==t.list.trainSwitch?s("router-link",{staticClass:"item",attrs:{to:{name:"StudyHome"}}},[s("div",{staticClass:"left"},[s("i",{staticStyle:{background:"url(../../../static/home_3.png) no-repeat","background-size":"100% 100%"}}),t._v(" "),s("span",[t._v("学习园地")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",[t._v("已开通")]),t._v(" "),s("i")])]):t._e(),t._v(" "),1==t.list.trainSwitch?s("div",{staticClass:"item",on:{click:t.showError}},[t._m(5),t._v(" "),t._m(6)]):t._e(),t._v(" "),s("div",{staticClass:"item",on:{click:t.showError}},[t._m(7),t._v(" "),s("div",{staticClass:"right"},[t.list.unRead>0?s("span",{staticStyle:{color:"#fa8a12"}},[t._v(t._s(t.list.unRead))]):t._e(),t._v(" "),s("i")])]),t._v(" "),s("div",{staticClass:"item",on:{click:t.showError}},[t._m(8),t._v(" "),s("div",{staticClass:"right"},[2==t.list.progressUpdate?s("span",{staticStyle:{color:"#fa8a12"}},[t._v("有新的进度")]):t._e(),t._v(" "),s("i")])]),t._v(" "),s("div",{staticClass:"item",on:{click:t.showError}},[t._m(9),t._v(" "),t._m(10)]),t._v(" "),s("Bottom")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"svg_box"},[i("canvas",{attrs:{id:"myCanvas1",height:"200"}}),this._v(" "),i("canvas",{attrs:{id:"myCanvas2",height:"200"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_1.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("入户申报")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right"},[i("span",{staticStyle:{color:"#666666"}},[this._v("未开通")]),this._v(" "),i("i")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_2.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("报考申请")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right"},[i("span",{staticStyle:{color:"#666666"}},[this._v("未开通")]),this._v(" "),i("i")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_3.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("学习园地")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right"},[i("span",{staticStyle:{color:"#666666"}},[this._v("未开通")]),this._v(" "),i("i")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_4.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("平台公告")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_5.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("进度查询")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"left"},[i("i",{staticStyle:{background:"url(../../../static/home_6.png) no-repeat","background-size":"100% 100%"}}),this._v(" "),i("span",[this._v("意见反馈")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right"},[i("i")])}]};var n=s("VU/8")(e,a,!1,function(t){s("g6EJ")},"data-v-f79cdfc2",null);i.default=n.exports}});
//# sourceMappingURL=8.d2269272c91030a11be7.js.map