webpackJsonp([2],{"3iWs":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("bOdI"),s={data:function(){return{list:[]}},created:function(){this.getData()},methods:i.n(n)()({go:function(t){this.$router.push({name:"ErrorItem",params:{errorId:t}})},deleteAll:function(){var t=this;this.$popup({title:"提示",content:"确认全部清空你的错题集吗?"}).then(function(e){"sure"==e&&t.deleteAll()})},getData:function(){var t=this,e={s:this.$store.state.sessionId};this.$Api.ErrorQuestionList(e).then(function(e){t.list=e.q.question})}},"deleteAll",function(){for(var t={s:this.$store.state.sessionId,a:2,ids:[]},e=0;e<this.list.length;e++)t.ids.push(this.list[e].id);that.$Api.DeleteAction(t).then(function(t){})})},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top"},[i("span",[t._v("数量:")]),t._v(" "),i("span",[t._v(t._s(t.list.length))]),t._v(" "),i("div",{staticClass:"delete",on:{click:t.deleteAll}},[i("div",{staticClass:"icon"}),t._v(" "),i("span",[t._v("全部清空")])])]),t._v(" "),t._l(t.list,function(e){return i("div",{staticClass:"item",on:{click:function(i){t.go(e.id)}}},[i("p",{staticStyle:{width:"90%"},domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",[i("span",{staticStyle:{"font-size":"0.24rem",color:"#999999"}},[t._v(t._s(e.time))])]),t._v(" "),i("i",{staticClass:"go_each"})])})],2)},staticRenderFns:[]};var r=i("VU/8")(s,o,!1,function(t){i("PH2y")},"data-v-29de328e",null);e.default=r.exports},"9bBU":function(t,e,i){i("mClu");var n=i("FeBl").Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},C4MV:function(t,e,i){t.exports={default:i("9bBU"),__esModule:!0}},PH2y:function(t,e){},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("C4MV"),o=(n=s)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return e in t?(0,o.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},mClu:function(t,e,i){var n=i("kM2E");n(n.S+n.F*!i("+E39"),"Object",{defineProperty:i("evD5").f})}});
//# sourceMappingURL=2.60d7026abbf02eb14cca.js.map