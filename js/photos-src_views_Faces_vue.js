/*! For license information please see photos-src_views_Faces_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Faces_vue"],{69363:(e,t,n)=>{n.d(t,{Z:()=>r});const r={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(e,t,n){this.abortController.abort(),this.abortController=new AbortController,n()}}},46116:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(20629),a=n(86492),o=n.n(a);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={name:"FaceCoverMixin",computed:c({},(0,r.Se)(["faces","facesFiles","files"])),methods:{getFaceCover:function(e){var t=this,n=function(e){return Math.max(0,-1*(e.x-.5*e.width))+Math.max(0,-1*(e.y-.5*e.height))+Math.max(0,-1*(1-(e.x+e.width)-.5*e.width))+Math.max(0,-1*(1-(e.y+e.height)-.5*e.height))};return(this.facesFiles[e]||[]).slice(0,25).map((function(e){return t.files[e]})).map((function(e){return c(c({},e),{},{faceDetections:JSON.parse(o().decode(e.faceDetections))})})).sort((function(t,n){return n.faceDetections.find((function(t){return t.title===e})).width-t.faceDetections.find((function(t){return t.title===e})).width})).sort((function(e,t){return e.faceDetections.length-t.faceDetections.length})).sort((function(t,r){return n(t.faceDetections.find((function(t){return t.title===e})))-n(r.faceDetections.find((function(t){return t.title===e})))}))[0]},getCoverStyle:function(e){var t=this.getFaceCover(e);if(!t)return{};var n=t.faceDetections.find((function(t){return t.title===e})),r=Math.max(1,1/n.width*.4),a=100*(n.x+n.width/2),o=100*(n.y+n.height/2);return{width:"100%",transform:"translate(calc( var(--photos-face-width)/2 - ".concat(a,"% ), calc( var(--photos-face-width)/2 - ").concat(o,"% )) scale(").concat(r,")"),transformOrigin:"".concat(a,"% ").concat(o,"%")}}}}},99751:(e,n,r)=>{r.d(n,{Z:()=>g});var a=r(20629),o=r(82880),i=r(45994),c=r(81067),s=r(59537),l=r(2161),u=r(94236);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){d(o,r,a,i,c,"next",e)}function c(e){d(o,r,a,i,c,"throw",e)}i(void 0)}))}}const g={name:"FetchFacesMixin",data:function(){return{errorFetchingFaces:null,loadingFaces:!1,errorFetchingFiles:null,loadingFiles:!1}},mixins:[r(69363).Z],beforeMount:function(){var e=this;return h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchFaces();case 1:case"end":return t.stop()}}),t)})))()},computed:p({},(0,a.Se)(["faces"])),methods:p(p({},(0,a.nv)(["appendFiles"])),{},{fetchFaces:function(){var e=this;return h(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.loadingFaces){n.next=2;break}return n.abrupt("return");case 2:if(!Object.keys(e.faces).length){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,e.loadingFaces=!0,e.errorFetchingFaces=null,n.next=9,c.ZP.getDirectoryContents("/recognize/".concat(null===(r=(0,i.ts)())||void 0===r?void 0:r.uid,"/faces/"),{signal:e.abortController.signal});case 9:a=n.sent,e.$store.dispatch("addFaces",{faces:a}),s.Z.debug("[FetchFacesMixin] Fetched ".concat(a.length," new faces: "),a),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0.response&&n.t0.response.status&&(404===n.t0.response.status?e.errorFetchingFaces=404:e.errorFetchingFaces=n.t0),s.Z.error(t("photos","Failed to fetch faces list."),{error:n.t0}),(0,o.showError)(t("photos","Failed to fetch faces list."));case 19:return n.prev=19,e.loadingFaces=!1,n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[4,14,19,22]])})))()},fetchFaceContent:function(e,t){var n=this;return h(regeneratorRuntime.mark((function r(){var a,o,f,A;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.loadingFiles){r.next=2;break}return r.abrupt("return");case 2:if(t||!n.facesFiles[e]||!n.facesFiles[e].length){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,n.errorFetchingFiles=null,n.loadingFiles=!0,r.next=9,c.ZP.getDirectoryContents("/recognize/".concat(null===(a=(0,i.ts)())||void 0===a?void 0:a.uid,"/faces/").concat(e),{data:l.Z,details:!0,signal:n.abortController.signal});case 9:if(o=r.sent,f=(f=o.data).map((function(e){return(0,u.AX)(e)})).map((function(e){return p(p({},e),{},{filename:e.realpath.replace("/".concat((0,i.ts)().uid,"/files"),"")})})),A=f.map((function(e){return""+e.fileid})),n.appendFiles(f),!(f.length>0)){r.next=17;break}return r.next=17,n.$store.commit("addFilesToFace",{faceName:e,fileIdsToAdd:A});case 17:s.Z.debug("[FetchFacesMixin] Fetched ".concat(A.length," new files: "),A),r.next=24;break;case 20:r.prev=20,r.t0=r.catch(4),r.t0.response&&r.t0.response.status&&(404===r.t0.response.status?n.errorFetchingFiles=404:n.errorFetchingFiles=r.t0),s.Z.error("Error fetching face files",{error:r.t0});case 24:return r.prev=24,n.loadingFiles=!1,r.finish(24);case 27:case"end":return r.stop()}}),r,null,[[4,20,24,27]])})))()}})}},48801:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,".face-cover[data-v-1f2ce110]{display:flex;flex-direction:column;padding:10px;border-radius:var(--border-radius-large)}.face-cover__crop-container[data-v-1f2ce110]{overflow:hidden;width:250px;height:250px;border-radius:250px;position:relative;background:var(--color-background-darker);--photos-face-width: 250px}@media only screen and (max-width: 1020px){.face-cover__crop-container[data-v-1f2ce110]{width:95px;height:95px;--photos-face-width: 95px}}.face-cover[data-v-1f2ce110]:hover,.face-cover[data-v-1f2ce110]:focus{background:var(--color-background-hover)}.face-cover__details[data-v-1f2ce110]{display:flex;flex-direction:column;width:250px;margin-top:4px;text-align:center}@media only screen and (max-width: 1020px){.face-cover__details[data-v-1f2ce110]{width:95px}}.face-cover__details__first-line[data-v-1f2ce110]{display:flex;height:2em;overflow:hidden;text-overflow:ellipsis}.face-cover__details__second-line[data-v-1f2ce110]{margin-top:6px;color:var(--color-text-maxcontrast)}.face-cover__details__name[data-v-1f2ce110]{flex-grow:1;margin:0}","",{version:3,sources:["webpack://./src/components/FaceCover.vue"],names:[],mappings:"AAmHA,6BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,6CACC,eAAA,CACA,WAAA,CACA,YAAA,CACA,mBAAA,CACA,iBAAA,CACA,yCAAA,CACA,0BAAA,CAEA,2CATD,6CAUE,UAAA,CACA,WAAA,CACA,yBAAA,CAAA,CAIF,sEACC,wCAAA,CAGD,sCACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CAEA,2CAPD,sCAQE,UAAA,CAAA,CAGD,kDACC,YAAA,CACA,UAAA,CACA,eAAA,CACA,sBAAA,CAGD,mDACC,cAAA,CACA,mCAAA,CAGD,4CACC,WAAA,CACA,QAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.face-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px;\n\tborder-radius: var(--border-radius-large);\n\n\t&__crop-container {\n\t\toverflow: hidden;\n\t\twidth: 250px;\n\t\theight: 250px;\n\t\tborder-radius: 250px;\n\t\tposition: relative;\n\t\tbackground: var(--color-background-darker);\n\t\t--photos-face-width: 250px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t\theight: 95px;\n\t\t\t--photos-face-width: 95px;\n\t\t}\n\t}\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-hover);\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 250px;\n\t\tmargin-top: 4px;\n\t\ttext-align: center;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t\theight: 2em;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tmargin-top: 6px;\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const c=i},33070:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,".faces[data-v-41711a97]{display:flex;flex-direction:column;height:calc(100vh - var(--header-height));padding-left:64px}@media only screen and (max-width: 1020px){.faces[data-v-41711a97]{padding:0}}.faces__header[data-v-41711a97]{display:flex;min-height:60px;align-items:center}.faces__header button[data-v-41711a97]{margin-right:32px}.faces__list[data-v-41711a97]{padding-top:24px;padding-bottom:32px;flex-grow:1;display:flex;flex-wrap:wrap;gap:32px;align-content:flex-start}.faces__empty[data-v-41711a97]{display:flex;flex-direction:column;align-items:center}.faces__empty__button[data-v-41711a97]{margin-top:32px}.empty-content-with-illustration[data-v-41711a97]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-41711a97]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Faces.vue"],names:[],mappings:"AAqGA,wBACC,YAAA,CACA,qBAAA,CACA,yCAAA,CACA,iBAAA,CAEA,2CAND,wBAOE,SAAA,CAAA,CAGD,gCACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,uCACC,iBAAA,CAIF,8BACC,gBAAA,CACA,mBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,wBAAA,CAGD,+BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,uCACC,eAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.faces {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--header-height));\n\tpadding-left: 64px;\n\n\t@media only screen and (max-width: 1020px) {\n\t\tpadding: 0;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\n\t\tbutton {\n\t\t\tmargin-right: 32px;\n\t\t}\n\t}\n\n\t&__list {\n\t\tpadding-top: 24px;\n\t\tpadding-bottom: 32px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 32px;\n\t\talign-content: flex-start;\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const c=i},24073:(e,t,n)=>{n.d(t,{Z:()=>a});const r={name:"AccountBoxMultipleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const a=(0,n(51900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._b({staticClass:"material-design-icon account-box-multiple-outline-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6M18.5 14.25C18.5 12.75 15.5 12 14 12S9.5 12.75 9.5 14.25V15H18.5M14 10.25C15.24 10.25 16.25 9.24 16.25 8S15.24 5.75 14 5.75 11.75 6.76 11.75 8 12.76 10.25 14 10.25M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.89 21.1 2 20 2M20 16H8V4H20V16Z"}},[e.title?n("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports},62764:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(24073),a=n(33476),o=n(99751),i=n(20629),c=n(79753),s=n(46116);function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={name:"FaceCover",mixins:[o.Z,s.Z],props:{baseName:{type:String,required:!0}},computed:p(p({},(0,i.Se)(["files","faces","facesFiles"])),{},{face:function(){return this.faces[this.baseName]},coverUrl:function(){return this.cover?(0,c.generateUrl)("/apps/photos/api/v1/preview/".concat(this.cover.fileid,"?x=",512,"&y=",512)):""},cover:function(){return this.getFaceCover(this.face.basename)},coverDimensions:function(){return this.cover?this.getCoverStyle(this.face.basename):{}}}),beforeMount:function(){var e=this;return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchFiles();case 2:case"end":return t.stop()}}),t)})))()},methods:{fetchFiles:function(){var e=this;return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchFaceContent(e.face.basename);case 2:case"end":return t.stop()}}),t)})))()}}};var h=n(93379),g=n.n(h),m=n(7795),C=n.n(m),v=n(90569),b=n.n(v),x=n(3565),y=n.n(x),w=n(19216),_=n.n(w),O=n(44589),F=n.n(O),j=n(48801),k={};k.styleTagTransform=F(),k.setAttributes=y(),k.insert=b().bind(null,"head"),k.domAPI=C(),k.insertStyleElement=_();g()(j.Z,k);j.Z&&j.Z.locals&&j.Z.locals;var P=n(51900);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T={name:"Faces",components:{FaceCover:(0,P.Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"face-cover",attrs:{to:"/faces/"+e.baseName}},[n("div",{staticClass:"face-cover__crop-container"},[n("img",{ref:"image",staticClass:"face-cover__image",style:e.coverDimensions,attrs:{src:e.coverUrl}})]),e._v(" "),n("div",{staticClass:"face-cover__details"},[e.baseName.match(/^[0-9]+$/)?e._e():n("div",{staticClass:"face-cover__details__first-line"},[n("h2",{staticClass:"face-cover__details__name"},[e._v("\n\t\t\t\t"+e._s(e.baseName)+"\n\t\t\t")])]),e._v(" "),e.facesFiles[e.baseName]?n("div",{staticClass:"face-cover__details__second-line"},[e._v("\n\t\t\t"+e._s(e.n("photos","%n photos","%n photos",e.facesFiles[e.baseName].length))+"\n\t\t")]):e._e()])])}),[],!1,null,"1f2ce110",null).exports,NcEmptyContent:a.NcEmptyContent,NcLoadingIcon:a.NcLoadingIcon,AccountBoxMultipleOutline:r.Z},mixins:[o.Z],computed:E(E({},(0,i.Se)(["facesFiles"])),{},{noFaces:function(){return 0===Object.keys(this.faces).length},orderedFaces:function(){var e=this;return Object.values(this.faces).sort((function(t,n){return e.facesFiles[n.basename]&&e.facesFiles[t.basename]?e.facesFiles[n.basename].length-e.facesFiles[t.basename].length:0}))}})};var W=n(33070),B={};B.styleTagTransform=F(),B.setAttributes=y(),B.insert=b().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=_();g()(W.Z,B);W.Z&&W.Z.locals&&W.Z.locals;const S=(0,P.Z)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.errorFetchingFaces?n("NcEmptyContent",[e._v("\n\t"+e._s(e.t("photos","An error occurred"))+"\n")]):n("div",{staticClass:"faces"},[e.loadingFaces?n("NcLoadingIcon"):e._e(),e._v(" "),e.noFaces&&!e.loadingFaces?n("div",{staticClass:"faces__empty"},[n("NcEmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:e._u([{key:"icon",fn:function(){return[n("AccountBoxMultipleOutline")]},proxy:!0},{key:"desc",fn:function(){return[e._v("\n\t\t\t\t"+e._s(e.t("photos","This might take some time depending on the size of your photo library."))+"\n\t\t\t")]},proxy:!0}],null,!1,3796275108)},[e._v(" "),e._v("\n\t\t\t"+e._s(e.t("photos","Recognized people will show up here"))+"\n\t\t")])],1):e.noFaces?e._e():n("div",{staticClass:"faces__list"},e._l(e.orderedFaces,(function(e){return n("FaceCover",{key:e.basename,attrs:{"base-name":e.basename}})})),1)],1)}),[],!1,null,"41711a97",null).exports}}]);
//# sourceMappingURL=photos-src_views_Faces_vue.js.map?v=23d4fa627f4e18b40a48