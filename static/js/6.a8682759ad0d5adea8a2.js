webpackJsonp([6],{"47ie":function(t,n,i){var e=i("H8WS");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("0d5e3990",e,!0,{})},BRgg:function(t,n,i){"use strict";function e(){var t=s()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return Object(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function a(t){var n=s()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.c)}n.b=e,n.a=a;var o=i("aA9S"),s=i.n(o),A=i("Gak4"),l=i("T452")},H8WS:function(t,n,i){n=t.exports=i("UTlt")(!0),n.push([t.i,".rank[data-v-6abf49f5]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-6abf49f5]{height:100%;overflow:hidden}.rank .toplist .item[data-v-6abf49f5]{display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-6abf49f5]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-6abf49f5]{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-6abf49f5]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-6abf49f5]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-6abf49f5]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["C:/Users/cghbh/Desktop/coding-107-master/coding-107/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,eAAgB,AACpB,YAAa,AACb,YAAc,CACf,AACD,gDACE,WAAY,AACR,OAAQ,AACZ,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"rank.vue",sourcesContent:["\n.rank[data-v-6abf49f5] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-6abf49f5] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-6abf49f5] {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-6abf49f5]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-6abf49f5] {\n  -ms-flex: 0 0 100px;\n      flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-6abf49f5] {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-6abf49f5] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-6abf49f5] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},Kjo5:function(t,n,i){"use strict";function e(t){i("47ie")}Object.defineProperty(n,"__esModule",{value:!0});var a=i("4YfN"),o=i.n(a),s=i("qwAB"),A=i("y/jF"),l=i("BRgg"),r=i("T452"),p=i("F4+m"),f=i("HVJf"),c={mixins:[p.b],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;Object(l.b)().then(function(n){n.code===r.a&&(t.topList=n.data.topList)})}},Object(f.d)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:s.a,Loading:A.a}},d=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"rank",staticClass:"rank"},[i("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(n){return i("li",{staticClass:"item",on:{click:function(i){return t.selectItem(n)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(n.songList,function(n,e){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(e+1))]),t._v(" "),i("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}),0)])}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},C=[],g={render:d,staticRenderFns:C},h=g,B=i("C7Lr"),m=e,x=B(c,h,!1,m,"data-v-6abf49f5",null);n.default=x.exports}});
//# sourceMappingURL=6.a8682759ad0d5adea8a2.js.map