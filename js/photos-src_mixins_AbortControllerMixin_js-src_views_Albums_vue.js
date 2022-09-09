/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_views_Albums_vue"],{69363:(n,t,a)=>{a.d(t,{Z:()=>o});const o={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(n,t,a){this.abortController.abort(),this.abortController=new AbortController,a()}}},76284:(n,t,a)=>{a.d(t,{Z:()=>s});var o=a(87537),e=a.n(o),i=a(23645),r=a.n(i)()(e());r.push([n.id,".album-cover[data-v-5ec21900]{display:flex;flex-direction:column;padding:16px;border-radius:12px}.album-cover[data-v-5ec21900]:hover,.album-cover[data-v-5ec21900]:focus{background:var(--color-background-dark)}.album-cover__image[data-v-5ec21900]{width:350px;height:350px;object-fit:none;border-radius:12px}@media only screen and (max-width: 1200px){.album-cover__image[data-v-5ec21900]{width:250px;height:250px}}.album-cover__image--placeholder[data-v-5ec21900]{background:var(--color-primary-light)}.album-cover__image--placeholder[data-v-5ec21900]  .material-design-icon{width:100%;height:100%}.album-cover__image--placeholder[data-v-5ec21900]  .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.album-cover__details[data-v-5ec21900]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.album-cover__details[data-v-5ec21900]{width:250px}}.album-cover__details__first-line[data-v-5ec21900]{display:flex}.album-cover__details__second-line[data-v-5ec21900]{display:flex;color:var(--color-text-lighter)}.album-cover__details__name[data-v-5ec21900]{flex-grow:1;margin:0;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/AlbumCover.vue"],names:[],mappings:"AAsGA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CAEA,wEACC,uCAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,2CAND,qCAOE,WAAA,CACA,YAAA,CAAA,CAGD,kDACC,qCAAA,CAEA,yEACC,UAAA,CACA,WAAA,CAEA,oGACC,yBAAA,CAMJ,uCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,uCAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,oDACC,YAAA,CACA,+BAAA,CAGD,6CACC,WAAA,CACA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: 12px;\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: none;\n\t\tborder-radius: 12px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t::v-deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t\tfont-weight: normal;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const s=r},6179:(n,t,a)=>{a.d(t,{Z:()=>s});var o=a(87537),e=a.n(o),i=a(23645),r=a.n(i)()(e());r.push([n.id,":root{--photos-navigation-height: 64px;--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2)}button.app-navigation-toggle{top:0 !important;right:calc(var(--photos-navigation-height)*-1) !important;margin:var(--photos-navigation-spacing) !important}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAgLA,MACC,gCAAA,CAEA,+EAAA,CAID,6BAEC,gBAAA,CACA,yDAAA,CACA,kDAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n:root {\n\t--photos-navigation-height: 64px;\n\t// header height - button size\n\t--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2);\n}\n\n// Properly position the navigation toggle button\nbutton.app-navigation-toggle {\n\t// App-navigation have a 4px margin top\n\ttop: 0 !important;\n\tright: calc(var(--photos-navigation-height) * -1) !important;\n\tmargin: var(--photos-navigation-spacing) !important;\n}\n\n'],sourceRoot:""}]);const s=r},84827:(n,t,a)=>{a.d(t,{Z:()=>s});var o=a(87537),e=a.n(o),i=a(23645),r=a.n(i)()(e());r.push([n.id,".photos-navigation[data-v-b9975c76]{position:-webkit-sticky;position:sticky;z-index:20;top:0;display:flex;align-items:center;width:100%;height:var(--photos-navigation-height);min-height:var(--photos-navigation-height);padding:0 var(--photos-navigation-height);background:var(--color-main-background)}.photos-navigation__back[data-v-b9975c76]{position:absolute;left:0;margin:var(--photos-navigation-spacing) !important}.photos-navigation__title[data-v-b9975c76]{overflow:hidden;margin:0;margin-right:calc(2*var(--photos-navigation-spacing));cursor:pointer;white-space:nowrap;text-overflow:ellipsis}.photos-navigation__loader[data-v-b9975c76]{margin-left:32px}.photos-navigation__content-right[data-v-b9975c76]{display:flex;align-items:center;justify-content:center;margin-left:auto}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAiMA,oCACC,uBAAA,CAAA,eAAA,CACA,UAAA,CACA,KAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,sCAAA,CACA,0CAAA,CACA,yCAAA,CACA,uCAAA,CAEA,0CAEC,iBAAA,CACA,MAAA,CACA,kDAAA,CAGD,2CACC,eAAA,CACA,QAAA,CACA,qDAAA,CACA,cAAA,CACA,kBAAA,CACA,sBAAA,CAGD,4CACC,gBAAA,CAGD,mDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.photos-navigation {\n\tposition: sticky;\n\tz-index: 20;\n\ttop: 0;\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\theight: var(--photos-navigation-height);\n\tmin-height: var(--photos-navigation-height);\n\tpadding: 0 var(--photos-navigation-height);\n\tbackground: var(--color-main-background);\n\n\t&__back {\n\t\t// Above the navigation menu\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tmargin: var(--photos-navigation-spacing) !important;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\tmargin: 0;\n\t\tmargin-right: calc(2 * var(--photos-navigation-spacing));\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__loader {\n\t\tmargin-left: 32px;\n\t}\n\n\t&__content-right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin-left: auto;\n\t}\n}\n\n'],sourceRoot:""}]);const s=r},33031:(n,t,a)=>{a.d(t,{Z:()=>s});var o=a(87537),e=a.n(o),i=a(23645),r=a.n(i)()(e());r.push([n.id,".albums[data-v-3d2da984]{display:flex;flex-direction:column;height:100%}.albums__list[data-v-3d2da984]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.albums__list[data-v-3d2da984]{padding:32px 12px;justify-content:center}}.albums__empty[data-v-3d2da984]{display:flex;flex-direction:column;align-items:center}.albums__empty__button[data-v-3d2da984]{margin-top:32px}.empty-content-with-illustration[data-v-3d2da984]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-3d2da984]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Albums.vue"],names:[],mappings:"AA+IA,yBACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,+BACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,+BAWE,iBAAA,CACA,sBAAA,CAAA,CAKF,gCACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,wCACC,eAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const s=r},36288:(n,t,a)=>{a.d(t,{Z:()=>e});const o={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const e=(0,a(51900).Z)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?a("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},46756:(n,a,o)=>{o.d(a,{Z:()=>y});var e=o(76240),i=o(33476);const r={name:"HeaderNavigation",components:{ArrowLeft:e.default,NcButton:i.NcButton,NcLoadingIcon:i.NcLoadingIcon},inheritAttrs:!1,props:{loading:{type:Boolean,default:!1},path:{type:String,default:"/"},title:{type:String,required:!0},rootTitle:{type:String,default:t("photos","Photos")},params:{type:Object,default:null}},computed:{isRoot:function(){var n="/"===this.path;return this.toggleNavigationButton(!n),n},name:function(){return this.isRoot?this.rootTitle:this.title},parentPath:function(){var n=this.path.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:this.params||{path:n}}),a=t.name,o=t.params;return""===n?{name:a}:decodeURIComponent(this.$router.resolve({name:a,params:o}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},refresh:function(){this.$emit("refresh")},toggleNavigationButton:function(n){document.querySelector("button.app-navigation-toggle").style.display=n?"none":null}}};var s=o(93379),l=o.n(s),A=o(7795),c=o.n(A),p=o(90569),m=o.n(p),u=o(3565),g=o.n(u),d=o(19216),h=o.n(d),C=o(44589),v=o.n(C),b=o(6179),_={};_.styleTagTransform=v(),_.setAttributes=g(),_.insert=m().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=h();l()(b.Z,_);b.Z&&b.Z.locals&&b.Z.locals;var f=o(84827),x={};x.styleTagTransform=v(),x.setAttributes=g(),x.insert=m().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=h();l()(f.Z,x);f.Z&&f.Z.locals&&f.Z.locals;const y=(0,o(51900).Z)(r,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():a("NcButton",{staticClass:"photos-navigation__back",attrs:{type:"tertiary"},on:{click:n.folderUp},scopedSlots:n._u([{key:"icon",fn:function(){return[a("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}),n._v(" "),a("h2",{staticClass:"photos-navigation__title",on:{click:n.refresh}},[n._v("\n\t\t"+n._s(n.name)+"\n\t")]),n._v(" "),n.$slots.default?a("div",{staticClass:"photos-navigation__content"},[n._t("default")],2):n._e(),n._v(" "),n.loading?a("NcLoadingIcon",{staticClass:"photos-navigation__loader"}):n._e(),n._v(" "),a("div",{staticClass:"photos-navigation__content-right"},[n._t("right")],2)],1)}),[],!1,null,"b9975c76",null).exports},43210:(n,a,o)=>{o.r(a),o.d(a,{default:()=>I});var e=o(33476),i=o(40502),r=o(65322),s=o(12945),l=o(20629),A=o(36288),c=o(79753);function p(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,o)}return a}function m(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){u(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function u(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}const g={name:"AlbumCover",components:{ImageMultiple:A.Z},props:{baseName:{type:String,required:!0}},computed:m(m({},(0,l.Se)(["files","albums"])),{},{album:function(){return this.albums[this.baseName]},coverUrl:function(){return(0,c.generateUrl)("/core/preview?fileId=".concat(this.album.lastPhoto,"&x=",512,"&y=",512,"&forceIcon=0&a=1"))},altImg:function(){return t("photos",'Cover photo for the "{albumName}" album.',{albumName:this.baseName})}})};var d=o(93379),h=o.n(d),C=o(7795),v=o.n(C),b=o(90569),_=o.n(b),f=o(3565),x=o.n(f),y=o(19216),w=o.n(y),k=o(44589),T=o.n(k),W=o(76284),B={};B.styleTagTransform=T(),B.setAttributes=x(),B.insert=_().bind(null,"head"),B.domAPI=v(),B.insertStyleElement=w();h()(W.Z,B);W.Z&&W.Z.locals&&W.Z.locals;var N=o(51900);const E=(0,N.Z)(g,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("router-link",{staticClass:"album-cover",attrs:{to:"/albums/"+n.baseName}},[0!==n.album.lastPhoto?a("img",{staticClass:"album-cover__image",attrs:{src:n.coverUrl,alt:n.altImg}}):a("div",{staticClass:"album-cover__image album-cover__image--placeholder"},[a("ImageMultiple",{attrs:{size:128}})],1),n._v(" "),a("div",{staticClass:"album-cover__details"},[a("div",{staticClass:"album-cover__details__first-line"},[a("h2",{staticClass:"album-cover__details__name"},[n._v("\n\t\t\t\t"+n._s(n.baseName)+"\n\t\t\t")])]),n._v(" "),a("div",{staticClass:"album-cover__details__second-line"},[n._v("\n\t\t\t"+n._s(n.album.date)+" ⸱ "+n._s(n.n("photos","%n item","%n photos and videos",n.album.nbItems))+"\n\t\t")])])])}),[],!1,null,"5ec21900",null).exports;var Z=o(72034),D=o(46756);const P={name:"Albums",components:{AlbumCover:E,AlbumForm:Z.Z,FolderMultipleImage:r.Z,HeaderNavigation:D.Z,NcButton:e.NcButton,NcEmptyContent:e.NcEmptyContent,NcModal:e.NcModal,Plus:i.Z},mixins:[s.Z],data:function(){return{showAlbumCreationForm:!1}},computed:{noAlbums:function(){return 0===Object.keys(this.albums).length}},methods:{handleAlbumCreated:function(n){var t=n.album;this.showAlbumCreationForm=!1,this.$router.push({name:"albums",params:{path:t.basename}})},onRefresh:function(){this.fetchAlbums()}}};var j=o(33031),O={};O.styleTagTransform=T(),O.setAttributes=x(),O.insert=_().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=w();h()(j.Z,O);j.Z&&j.Z.locals&&j.Z.locals;const I=(0,N.Z)(P,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return n.errorFetchingAlbums?a("NcEmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):a("div",{staticClass:"albums"},[a("HeaderNavigation",{key:"navigation",attrs:{loading:n.loadingAlbums,title:n.t("photos","Albums"),"root-title":n.t("photos","Albums")},on:{refresh:n.onRefresh}},[a("NcButton",{attrs:{type:"primary","aria-label":n.t("photos","Create a new album.")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[a("Plus")]},proxy:!0}])},[n._v("\n\t\t\t"+n._s(n.t("photos","New album"))+"\n\t\t")])],1),n._v(" "),n.noAlbums&&!n.loadingAlbums?a("div",{staticClass:"albums__empty"},[a("NcEmptyContent",{scopedSlots:n._u([{key:"icon",fn:function(){return[a("FolderMultipleImage")]},proxy:!0},{key:"desc",fn:function(){return[n._v("\n\t\t\t\t"+n._s(n.t("photos","There is no album yet!"))+"\n\t\t\t")]},proxy:!0}],null,!1,3685789295)}),n._v(" "),a("NcButton",{staticClass:"albums__empty__button",attrs:{type:"primary","aria-label":n.t("photos","Create a new album")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[a("Plus")]},proxy:!0}],null,!1,1489515321)},[n._v("\n\t\t\t"+n._s(n.t("photos","Add"))+"\n\t\t")])],1):n.noAlbums?n._e():a("div",{staticClass:"albums__list"},n._l(n.albums,(function(n){return a("AlbumCover",{key:n.basename,staticClass:"album",attrs:{"base-name":n.basename}})})),1),n._v(" "),n.showAlbumCreationForm?a("NcModal",{attrs:{title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[a("AlbumForm",{on:{done:n.handleAlbumCreated}})],1):n._e()],1)}),[],!1,null,"3d2da984",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.map?v=25997d09fa697acb921a