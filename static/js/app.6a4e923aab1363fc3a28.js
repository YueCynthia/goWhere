webpackJsonp([1],{"+Ry0":function(t,i){},"4Y4z":function(t,i){},"6Dxd":function(t,i){},"8ERT":function(t,i){},"8oPI":function(t,i){},"991W":function(t,i){},Gx87:function(t,i){},J12Z:function(t,i){},"N+zL":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=s("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},e,!1,null,null,null);i.default=n.exports},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),n=s("v5o6"),a=s.n(n),r=s("NYxO");e.a.use(r.a);var c=new r.a.Store({strict:!0,state:{city:""},mutations:{changeCity:function(t,i){t.city=i}}}),o=s("cTzj"),l=s.n(o),d=s("/ocq"),h=s("F3EI"),u=s.n(h),p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var f=s("VU/8")({name:"App"},p,!1,function(t){s("J12Z")},null,null).exports,v=s("Dd8w"),_=s.n(v),m={name:"index-header",computed:_()({},Object(r.c)(["city"]))},g={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"back iconfont"},[this._v("")]),this._v(" "),this._m(0),this._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"city"},[this._v(this._s(this.city))])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"search"},[i("div",{staticClass:"search-content"},[i("span",{staticClass:"iconfont"},[this._v("")]),this._v("请输入搜索内容\n\t\t")])])}]};var w=s("VU/8")(m,g,!1,function(t){s("8oPI")},"data-v-1290dff2",null).exports,y={name:"index-swiper",props:{swiperInfo:Array},data:function(){return{swiperOption:{loop:!0,autoplay:2e3,pagination:".swiper-pagination"}}}},C={render:function(){var t=this.$createElement,i=this._self._c||t;return this.swiperInfo.length?i("swiper",{ref:"mySwiper",staticClass:"banner index-banner",attrs:{options:this.swiperOption}},[this._l(this.swiperInfo,function(t){return i("swiper-slide",{key:t.id},[i("img",{attrs:{src:t.imgUrl}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()},staticRenderFns:[]};var x=s("VU/8")(y,C,!1,function(t){s("NZbv")},"data-v-7fc5d1ee",null).exports,b={name:"index-icons",props:{iconsInfo:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.iconsInfo.forEach(function(i,s){var e=Math.floor(s/8);t[e]||(t[e]=[]),t[e].push(i)}),t}}},E={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.iconsInfo.length?s("swiper",{staticClass:"icons",attrs:{options:t.swiperOption}},[t._l(t.pages,function(i,e){return s("swiper-slide",{key:e,staticClass:"icons-page"},[s("div",{staticClass:"icons-list"},t._l(i,function(i){return s("div",{key:i.id,staticClass:"icons-item"},[s("img",{staticClass:"icons-img",attrs:{src:i.img}}),t._v(" "),s("p",{staticClass:"icons-title"},[t._v(t._s(i.title))])])}))])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()},staticRenderFns:[]};var I=s("VU/8")(b,E,!1,function(t){s("4Y4z")},"data-v-1bcda2e7",null).exports,S=s("GQaK"),$=s("mtWM"),L=s.n($),k={name:"index-scroller",props:{sightsInfo:Array},data:function(){return{isLoading:!1,moreSights:[]}},watch:{list:function(){var t=this;this.$nextTick(function(){t.scroller.refresh()})}},computed:_()({list:function(){return this.sightsInfo.concat(this.moreSights)}},Object(r.c)(["city"])),methods:{createScroller:function(){this.scroller=new S.a(this.$refs.scroller,{probeType:2})},bindEvents:function(){this.scroller.on("scroll",this.handleScroll.bind(this)),this.scroller.on("scrollEnd",this.handleScrollEnd.bind(this))},handleScroll:function(t){t.y>60&&!this.isLoading&&(this.getListInfo(),this.isLoading=!0)},handleScrollEnd:function(t){this.isLoading=!1},getListInfo:function(){L.a.get("/api/sightlist.json?city="+this.city).then(this.handleGetListSucc.bind(this)).catch(this.handleGetListErr.bind(this))},handleGetListSucc:function(t){t&&(t=t.data),t&&t.ret&&t.data?t.data.list&&(this.moreSights=this.moreSights.concat(t.data.list.sights)):this.handleGetListErr()},handleGetListErr:function(){console.log("error")}},mounted:function(){this.createScroller(),this.bindEvents()}},R={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"scroller"},[s("div",{staticClass:"content"},[s("transition",{attrs:{name:"loading"}},[t.isLoading?s("div",{staticClass:"loading"},[t._v("Loading ...")]):t._e()]),t._v(" "),t._l(t.list,function(i){return s("div",{key:i.id,staticClass:"item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.img,expression:"item.img"}],staticClass:"item-img"}),t._v(" "),s("div",{staticClass:"item-content"},[s("p",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),s("p",{staticClass:"item-desc"},[t._v(t._s(i.desc))]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"price-tag"},[t._v("¥")]),t._v("\n\t\t\t\t\t"+t._s(i.price)+"\n\t\t\t\t\t"),s("span",{staticClass:"price-start"})])])])})],2)])},staticRenderFns:[]};var U=s("VU/8")(k,R,!1,function(t){s("6Dxd")},"data-v-22f53ec7",null).exports,F=s("Rf8U"),O=s.n(F);e.a.use(O.a,L.a);var j={name:"index",components:{IndexHeader:w,IndexSwiper:x,IndexIcons:I,IndexScroller:U},data:function(){return{swiperInfo:[],iconsInfo:[],sightsInfo:[]}},computed:_()({},Object(r.c)(["city"])),methods:_()({},Object(r.b)(["changeCity"]),{getIndexData:function(){L.a.get("/api/index.json?city"+this.city).then(this.getDataSucc.bind(this)).catch(this.getDataErr.bind(this))},getDataSucc:function(t){(t=t?t.data:null)&&t.ret&&t.data?(t.data.city&&this.changeCity(t.data.city),t.data.swiperList&&(this.swiperInfo=t.data.swiperList),t.data.icons&&(this.iconsInfo=t.data.icons),t.data.sights&&(this.sightsInfo=t.data.sights)):this.getDataErr()},getDataErr:function(){console.log("error")}}),created:function(){this.getIndexData()}},G={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"main"},[i("index-header"),this._v(" "),i("index-swiper",{attrs:{swiperInfo:this.swiperInfo}}),this._v(" "),i("index-icons",{attrs:{iconsInfo:this.iconsInfo}}),this._v(" "),i("index-scroller",{staticClass:"scroller",attrs:{sightsInfo:this.sightsInfo}})],1)},staticRenderFns:[]};var T=s("VU/8")(j,G,!1,function(t){s("+Ry0")},"data-v-07d6762b",null).exports,V={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[i("div",{staticClass:"back iconfont",on:{click:this.handleBackClick}},[this._v("")]),this._v("\n\t\t城市选择\n\t")])])},staticRenderFns:[]};var D=s("VU/8")({name:"city-header",methods:{handleBackClick:function(){this.$router.go(-1)}}},V,!1,function(t){s("Gx87")},"data-v-ed58db58",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"search"},[i("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"}})])}]};var z=s("VU/8")({name:"city-search"},N,!1,function(t){s("gHwE")},"data-v-467ed9d1",null).exports,A={name:"city-list",props:{list:Object,hotcity:Array}},H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"list"},[i("div",{staticClass:"area"})])}]};var P={name:"city",data:function(){return{list:{},hotcity:[]}},components:{CityHeader:D,CitySearch:z,CityList:s("VU/8")(A,H,!1,function(t){s("Sb8o")},"data-v-f5505c24",null).exports},methods:{getListInfo:function(){L.a.get("/api/city.json").then(this.handleGetListSucc.bind(this)).catch(this.handleGetListErr.bind(this))},handleGetListSucc:function(t){t&&(t=t.data),t&&t.data||this.handleGetListErr()},handleGetListErr:function(){console.log("error")}},created:function(){this.getListInfo()}},M={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"main"},[i("city-header"),this._v(" "),i("city-search"),this._v(" "),i("city-list",{staticClass:"list",attrs:{list:this.list,hotcity:this.hotcity}})],1)},staticRenderFns:[]};var W=s("VU/8")(P,M,!1,function(t){s("UFE4")},"data-v-4c8c86e9",null).exports;e.a.use(d.a);var Y=new d.a({routes:[{path:"/",name:"Index",component:T},{path:"/city",name:"City",component:W}]});s("991W"),s("v2ns"),s("8ERT");e.a.config.productionTip=!1,a.a.attach(document.body),e.a.use(u.a),e.a.use(l.a,{preload:1.3,error:"dist/error.png",loadging:"dist/loading.gif",attempt:1}),new e.a({el:"#app",router:Y,store:c,components:{App:f},template:"<App/>"})},NZbv:function(t,i){},Sb8o:function(t,i){},UFE4:function(t,i){},gHwE:function(t,i){},pYmz:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e="undefined"!=typeof window;e&&(window.Swiper=s("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&e&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&e){delete t.options.notNextTick;var i=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(i=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=s("VU/8")(n,a,!1,null,null,null);i.default=r.exports},v2ns:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.6a4e923aab1363fc3a28.js.map