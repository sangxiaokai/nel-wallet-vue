webpackJsonp([7],{PWmH:function(t,e,n){"use strict";function o(t){n("cnyZ")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("z/E/"),i=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container "},[n("div",{staticClass:"title-menu"},[n("ul",{staticClass:"menu-box"},[n("li",{class:{active:t.isActive("auctiontest")}},[n("router-link",{staticClass:"router-li",attrs:{to:{name:"auctiontest"}}},[t._v(" "+t._s(t.$t("nnsneo.auction")))])],1),t._v(" "),n("li",{class:{active:t.isActive("mytestname")}},[n("router-link",{staticClass:"router-li",attrs:{to:{name:"mytestname"}}},[t._v(t._s(t.$t("nnsneo.myneoname")))])],1),t._v(" "),n("li",{class:{active:t.isActive("bonustest")}},[n("router-link",{staticClass:"router-li",attrs:{to:{name:"bonustest"}}},[t._v(t._s(t.$t("nnsneo.bonus")))])],1)])]),t._v(" "),n("router-view",{staticClass:"content-box"})],1)},c=[],s={render:a,staticRenderFns:c},l=s,u=n("VU/8"),f=o,p=u(i.a,l,!1,f,"data-v-50f2063a",null);e.default=p.exports},X1z6:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,'\n.container[data-v-50f2063a] {\n  color: #fff;\n}\n.container .title-menu[data-v-50f2063a] {\n  height: auto;\n  font-size: 16px;\n  color: #b2b2b2;\n  margin-top: -10px;\n}\n.container .title-menu .menu-box[data-v-50f2063a] {\n  border-bottom: 1px solid #454f60;\n}\n.container .title-menu .menu-box li[data-v-50f2063a] {\n  display: inline-block;\n  line-height: 58px;\n  list-style: none;\n  margin-right: 90px;\n  margin-left: -40px;\n}\n.container .title-menu .menu-box li.active[data-v-50f2063a] {\n  position: relative;\n}\n.container .title-menu .menu-box li.active .router-li[data-v-50f2063a] {\n  color: #fff;\n}\n.container .title-menu .menu-box li.active[data-v-50f2063a]::after {\n  content: "";\n  width: 100%;\n  height: 4px;\n  background-color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.container .title-menu .menu-box li .router-li[data-v-50f2063a] {\n  list-style: none;\n  color: #b2b2b2;\n  text-decoration: none;\n}\n.container .title-menu .menu-box li .router-li[data-v-50f2063a]:hover {\n  cursor: pointer;\n}\n',""])},cnyZ:function(t,e,n){var o=n("X1z6");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("015c8604",o,!0)},"z/E/":function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,c)}s((o=o.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],i=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),l=n("c+8m"),u=n("r84I"),f=n("VKSY"),p=function(t){function e(){var e=t.call(this)||this;e.showType=1;var n=location.hash.replace("#","").split("/");n[0];switch(n.length>1?n[1]:void 0){case"auction":e.showType=1;break;case"myneoname":e.showType=3;break;case"bonus":e.showType=4}return e}return o(e,t),e.prototype.mounted=function(){return a(this,void 0,void 0,function(){var t;return c(this,function(e){switch(e.label){case 0:return t=u.services.auction_test,[4,f.tools.nnstool.getRootInfo("test")];case 1:return t.root=e.sent(),[2]}})})},e.prototype.isActive=function(t){return t==this.$router.currentRoute.name},e=r([l.default({components:{}}),i("design:paramtypes",[])],e)}(s.default);e.default=p}});