webpackJsonp([21],{"CY/M":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{Bottom:e("RgB6").a},data:function(){return{id:this.$route.params.NoticeId,list:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this,s={s:this.$store.state.sessionId,id:this.id};this.$Api.ArticleDetails(s).then(function(s){t.list=s.article})}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"title"},[t._v(t._s(t.list.title))]),t._v(" "),e("p",{staticClass:"time"},[e("span",[t._v(t._s(t.list.timestamp))]),t._v(" "),e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.list.author))])]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n\t\t"+t._s(t.list.content)+"\n\t")]),t._v(" "),e("p",{staticClass:"read"},[t._v("阅读: "+t._s(t.list.read))]),t._v(" "),e("Bottom")],1)},staticRenderFns:[]};var n=e("VU/8")(i,a,!1,function(t){e("l2Og")},"data-v-4ee61072",null);s.default=n.exports},l2Og:function(t,s){}});
//# sourceMappingURL=21.153ac83e22b28b55df21.js.map