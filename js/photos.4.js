(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(t,e,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var r=n(319),i=r.prepareRequestOptions;r.prepareRequestOptions=function(t,e){e.cancelToken&&"object"===o(e.cancelToken)&&(t.cancelToken=e.cancelToken),i(t,e),e.method&&"string"==typeof e.method&&(t.method=e.method)},t.exports=r},267:function(t,e,n){"use strict";var o=n(318),r=n.n(o),i=n(266),a=n.n(i),s=n(301),c=n.n(s),u=n(18);r.a.getPatcher().patch("request",a.a);var l=Object(u.generateRemoteUrl)("dav"),d=r.a.createClient(l);c()(l).pathname;e.a=d},303:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var o="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(o,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},304:function(t,e,n){var o=n(508);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(152).default)("c29390dc",o,!0,{})},326:function(t,e){},327:function(t,e){},347:function(t,e){},349:function(t,e){},366:function(t,e){t.exports={sizes:{400:{marginTop:66,marginW:8,count:3,gap:8},700:{marginTop:66,marginW:8,count:4,gap:8},1024:{marginTop:66,marginW:44,count:5,gap:8},1280:{marginTop:66,marginW:44,count:4,gap:8},1440:{marginTop:88,marginW:66,count:5,gap:8},1600:{marginTop:88,marginW:66,count:6,gap:8},2048:{marginTop:88,marginW:66,count:7,gap:8},2560:{marginTop:88,marginW:88,count:8,gap:8},3440:{marginTop:88,marginW:88,count:9,gap:8},max:{marginTop:88,marginW:88,count:10,gap:8}}}},506:function(t,e){function n(t,e,n){var o,r,i,a,s;function c(){var u=Date.now()-a;u<e&&u>=0?o=setTimeout(c,e-u):(o=null,n||(s=t.apply(i,r),i=r=null))}null==e&&(e=100);var u=function(){i=this,r=arguments,a=Date.now();var u=n&&!o;return o||(o=setTimeout(c,e)),u&&(s=t.apply(i,r),i=r=null),s};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(s=t.apply(i,r),i=r=null,clearTimeout(o),o=null)},u}n.debounce=n,t.exports=n},507:function(t,e,n){"use strict";var o=n(304);n.n(o).a},508:function(t,e,n){(e=n(151)(!1)).push([t.i,".grid-filler[data-v-4517b139]{grid-column-end:-1}.grid-loading[data-v-4517b139]{grid-column:1/-1;height:88px}\n",""]),t.exports=e},512:function(t,e,n){"use strict";n.r(e);var o=n(49),r=n(506),i=n.n(r),a=n(22),s=n(21),c=n(276),u=n(267),l=n(303),d=n(366);function p(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){p(i,o,r,a,s,"next",t)}function s(t){p(i,o,r,a,s,"throw",t)}a(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var g=function(){return h.apply(this,arguments)};function h(){return(h=f(regeneratorRuntime.mark((function t(){var e,n,o,r,i,p,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>0&&void 0!==f[0]&&f[0],n=f.length>1&&void 0!==f[1]?f[1]:{},n=Object.assign({},{page:0,perPage:10*d.sizes.max.count},n),o="/files/".concat(Object(s.getCurrentUser)().uid),r=c.a.reduce((function(t,e){return"".concat(t,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(e,"</d:literal>\n\t\t</d:eq>\n\t")}),""),i=e?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",n=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(l.a,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(o,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(r,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<oc:owner-id/>\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t\t<d:literal>").concat(Object(s.getCurrentUser)().uid,"</d:literal>\n\t\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(n.perPage,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(n.page*n.perPage,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},n),t.next=9,u.a.getDirectoryContents("",n);case 9:return p=t.sent,t.abrupt("return",p.data.map((function(t){return Object(a.b)(t)})).map((function(t){return Object.assign({},t,{filename:t.filename.replace(o,"")})})));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=n(305),w=n(306);let v="undefined",b=typeof window!==v?window:{},y=typeof performance!==v?performance:Date,R=()=>y.now(),x="AnimationFrame",C="cancel"+x,O="request"+x,T=b[O]&&b[O].bind(b),P=b[C]&&b[C].bind(b);if(!T||!P){let t=0;T=e=>{let n=R(),o=Math.max(t+1e3/60,n);return setTimeout(()=>{e(t=o)},o-n)},P=function(t){return clearTimeout(t)}}const j=(t,e)=>{const n=R(),o={},r=()=>{R()-n>=e?t.call(null):o.v=T(r)};return o.v=T(r),o};var q=n(307),D=new(n(0).default)({data:function(){return{gridConfig:d.sizes.max}},watch:{gridConfig:function(t){this.$emit("changed",t)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){var t=Object.keys(d.sizes).find((function(t){return t>document.documentElement.clientWidth}));this.gridConfig=d.sizes[t]}}}),S={data:function(){return{gridConfig:{}}},created:function(){var t=this;D.$on("changed",(function(e){t.gridConfig=e})),console.debug("Current grid config",D.gridConfig),this.gridConfig=D.gridConfig},beforeDestroy:function(){D.$off("changed",this.gridConfig)}},E={name:"VirtualGrid",components:{Grid:q.a},mixins:[S],props:{list:{type:Array,default:function(){return[]}},props:{type:Function,default:function(){return{}}},component:{type:Function,required:!0},loadingPage:{type:Boolean,default:!1}},data:function(){return{shownFirstRow:0,shownLastRow:this.getRowNumber(this.list.length-1)}},computed:{shownList:function(){var t=this;return this.list.filter((function(e,n){return t.isVisible(n)}))},topPadding:function(){return"".concat(100*this.shownFirstRow,"%")},bottomPadding:function(){return"".concat(100*(this.lastRow-this.shownLastRow),"%")},lastRow:function(){return this.getRowNumber(this.list.length-1)}},created:function(){window.addEventListener("resize",this.onDocumentScroll),window.addEventListener("scroll",this.onDocumentScroll)},mounted:function(){this.onDocumentScroll()},beforeDestroy:function(){window.removeEventListener("resize",this.onDocumentScroll),window.removeEventListener("scroll",this.onDocumentScroll)},methods:{debounceOnDocumentScroll:function(){var t;this.debounceOnDocumentScrollRequest&&(t=this.debounceOnDocumentScrollRequest,P(t.v||-1)),this.debounceOnDocumentScrollRequest=j(this.onDocumentScroll,150)},onDocumentScroll:function(){var t=this.$refs.grid.$el,e=getComputedStyle(t),n=parseFloat(e.gridTemplateColumns.split(" ")[0],10),o=this.roundToTen(window.pageYOffset-this.gridConfig.marginTop),r=Math.floor(o/(n+this.gridConfig.gap))-1,i=Math.ceil(window.innerHeight/n)+r+1;this.shownFirstRow=Math.max(r,0),this.shownLastRow=Math.min(i,this.lastRow),this.shownLastRow>=this.lastRow&&this.$emit("bottomReached")},isVisible:function(t){var e=this.getRowNumber(t);return e>=this.shownFirstRow&&e<this.shownLastRow+1},getRowNumber:function(t){var e=this.gridConfig?this.gridConfig.count:this.list.length;return Math.floor(t/e)},roundToTen:function(t){return 10*Math.floor(t/10)}}},L=(n(507),n(78)),k=Object(L.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Grid",{ref:"grid"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.shownFirstRow>0,expression:"shownFirstRow > 0"}],key:"filler-top",ref:"filler-top",staticClass:"grid-filler grid-filler--top",style:{paddingBottom:t.topPadding},attrs:{role:"none"}}),t._v(" "),t._l(t.shownList,(function(e,o){return n(t.component(e),t._b({key:e.fileid,ref:"item-"+o,refInFor:!0,tag:"component",class:"row-"+t.getRowNumber(o),attrs:{list:t.list}},"component",t.props(e),!1))})),t._v(" "),t.loadingPage?n("div",{key:"grid-loading",staticClass:"grid-loading icon-loading",attrs:{role:"none"}}):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.shownLastRow<t.lastRow,expression:"shownLastRow < lastRow"}],key:"filler-bottom",ref:"filler-bottom",staticClass:"grid-filler grid-filler--bottom",style:{paddingBottom:t.bottomPadding},attrs:{role:"none"}})],2)}),[],!1,null,"4517b139",null).exports,_=n(308),F=n(259);function W(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}function $(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){W(i,o,r,a,s,"next",t)}function s(t){W(i,o,r,a,s,"throw",t)}a(void 0)}))}}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M={name:"Timeline",components:{EmptyContent:m.a,VirtualGrid:k,Navigation:_.a},mixins:[S],props:{loading:{type:Boolean,required:!0},onlyFavorites:{type:Boolean,default:!1},rootTitle:{type:String,required:!0},path:{type:String,default:""}},data:function(){return{cancelRequest:null,done:!1,error:null,loadingPage:!1,page:0}},computed:N(N({},Object(o.c)(["files","timeline"])),{},{fileList:function(){var t=this;return this.timeline.map((function(e){return t.files[e]})).filter((function(t){return!!t}))},isEmpty:function(){return 0===this.fileList.length}}),watch:{onlyFavorites:function(){var t=this;return $(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resetState(),t.$emit("update:loading",!0),t.fetchContent();case 3:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){var t=this;return $(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resetState(),t.fetchContent();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Changed view")},methods:{fetchContent:function(){var t=this;return $(regeneratorRuntime.mark((function e(){var n,o,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingPage){e.next=2;break}return e.abrupt("return");case 2:return t.cancelRequest&&t.cancelRequest("Changed view"),0===t.timeline.length&&t.$emit("update:loading",!0),t.error=null,t.loadingPage=!0,n=Object(F.a)(g),o=n.request,r=n.cancel,t.cancelRequest=r,e.prev=8,e.next=11,o(t.onlyFavorites,{page:t.page,perPage:5*t.gridConfig.count});case 11:return i=e.sent,t.$store.dispatch("updateTimeline",i),t.$store.dispatch("appendFiles",i),i.length===5*t.gridConfig.count?t.page++:(console.debug("We loaded the last page"),t.done=!0),e.abrupt("return",i);case 18:e.prev=18,e.t0=e.catch(8),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?(t.error=404,setTimeout((function(){t.$router.push({name:t.$route.name})}),3e3)):t.error=e.t0),console.error("Error fetching timeline",e.t0);case 22:return e.prev=22,t.$emit("update:loading",!1),t.loadingPage=!1,t.cancelRequest=null,e.finish(22);case 27:case"end":return e.stop()}}),e,null,[[8,18,22,27]])})))()},getProps:function(t){return Object.assign({},t,{loadMore:this.fetchContent})},getComponent:function(){return w.a},debounceOnBottomReached:i()((function(){this.onBottomReached()}),1e3),onBottomReached:function(){this.loadingPage||this.done||(console.debug("Loading next page",this.page),this.fetchContent())},resetState:function(){this.$store.dispatch("resetTimeline"),this.done=!1,this.error=null,this.loadingPage=!1,this.page=0,this.page=0}}},V=Object(L.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 404===t.error?n("EmptyContent",{attrs:{"illustration-name":"folder"}},[t._v("\n\t"+t._s(t.t("photos","This folder does not exists"))+"\n")]):t.error?n("EmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):!t.loading&&t.isEmpty?n("EmptyContent",{attrs:{"illustration-name":"empty"}},[t._v("\n\t"+t._s(t.t("photos","No photos in here"))+"\n")]):t.loading?t._e():n("div",[n("Navigation",{key:"navigation",attrs:{basename:t.path,filename:"/","root-title":t.rootTitle}}),t._v(" "),n("VirtualGrid",{attrs:{component:t.getComponent,list:t.fileList,"loading-page":t.loadingPage,props:t.getProps},on:{bottomReached:t.onBottomReached}})],1)}),[],!1,null,null,null);e.default=V.exports}}]);
//# sourceMappingURL=photos.4.js.map?v=971216ed57dcb1b1e254