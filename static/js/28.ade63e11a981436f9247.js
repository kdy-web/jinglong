webpackJsonp([28],{ArTQ:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={components:{Bottom:a("RgB6").a},data:function(){return{res:{}}},created:function(){var t=this;this.$Api.StudyField(this.$store.state.sessionId).then(function(i){console.log(i),"操作成功"!=i.q.d?t.$router.push({name:"Binding"}):t.res=i.q.study})},methods:{showError:function(){this.$toast.center("暂未开通此服务")},goEach:function(t){"成绩排行"==t?this.$router.push({name:"Rank"}):"冲刺密卷"==t?this.$router.push({name:"Examination",params:{action:2}}):"错题集"==t?this.$router.push({name:"Error"}):"评价"==t?this.$router.push({name:"Evaluate"}):"学习公告"==t?this.$router.push({name:"Notice"}):"重点巩固"==t?this.$router.push({name:"Consolidate",params:{type:"留言"}}):"每日一练"==t?this.$router.push({name:"Practice"}):"通关练习"==t?this.$router.push({name:"Consolidate",params:{type:"练习"}}):"在线考试"==t&&this.$router.push({name:"Examination",params:{action:1}})}}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("学习公告")}}},[a("i"),t._v(" "),a("span",[t._v("学习公告")]),t._v(" "),a("span",{staticStyle:{color:"#fa8a12",float:"right","margin-right":"0.3rem"}},[t._v(t._s(t.res.read))])]),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("重点巩固")}}},[a("i"),t._v(" "),a("span",[t._v("重点巩固")])]),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("每日一练")}}},[a("i"),t._v(" "),a("span",[t._v("每日一练")])]),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("通关练习")}}},[a("i"),t._v(" "),a("span",[t._v("通关练习")]),t._v(" "),a("span",{staticStyle:{color:"#fa8a12",float:"right","margin-right":"0.3rem"}},[t._v(t._s(t.res.schedule))])]),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("在线考试")}}},[a("i"),t._v(" "),a("span",[t._v("在线考试")]),t._v(" "),1==t.res.examPaper?a("span",{staticStyle:{float:"right","margin-right":"0.3rem"}},[t._v("进行中")]):t._e()]),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("错题集")}}},[a("i"),t._v(" "),a("span",[t._v("错题集")])]),t._v(" "),1==t.res.secret?a("div",{staticClass:"item",on:{click:t.showError}},[a("i"),t._v(" "),a("span",[t._v("冲刺密卷")]),t._v(" "),a("span",{staticStyle:{color:"#999999",float:"right","margin-right":"0.3rem"}},[t._v("未开通")])]):t._e(),t._v(" "),2==t.res.secret?a("div",{staticClass:"item",on:{click:function(i){t.goEach("冲刺密卷")}}},[a("i"),t._v(" "),a("span",[t._v("冲刺密卷")]),t._v(" "),a("span",{staticStyle:{float:"right","margin-right":"0.3rem"}},[t._v("已开通")])]):t._e(),t._v(" "),a("div",{staticClass:"item",on:{click:function(i){t.goEach("成绩排行")}}},[a("i"),t._v(" "),a("span",[t._v("成绩排行")])]),t._v(" "),a("div",{staticClass:"item",on:{click:t.showError}},[a("i"),t._v(" "),a("span",[t._v("评价")]),t._v(" "),a("span",{staticStyle:{color:"#999999",float:"right","margin-right":"0.3rem"}},[t._v("未开通")])]),t._v(" "),a("Bottom")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"personInfor"},[i("div",{staticClass:"avatar"}),this._v(" "),i("div",{staticClass:"text"})])}]};var n=a("VU/8")(s,e,!1,function(t){a("CAlW")},"data-v-235fa5a0",null);i.default=n.exports},CAlW:function(t,i){}});
//# sourceMappingURL=28.ade63e11a981436f9247.js.map