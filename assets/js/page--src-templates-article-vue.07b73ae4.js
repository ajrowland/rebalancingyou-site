(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1aP3":function(t,e,r){"use strict";var n=r("VQBy");r.n(n).a},"4Brf":function(t,e,r){"use strict";var n=r("I+eb"),i=r("g6v/"),o=r("2oRo"),a=r("UTVS"),c=r("hh1v"),s=r("m/L8").f,l=r("6JNq"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(p,u);var g=p.prototype=u.prototype;g.constructor=p;var m=g.toString,v="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;s(g,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var r=v?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,e,r){var n=r("tiKp");e.f=n},"BX/b":function(t,e,r){var n=r("/GqU"),i=r("JBy8").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(n(t))}},VQBy:function(t,e,r){},"dG/n":function(t,e,r){var n=r("Qo9l"),i=r("UTVS"),o=r("5Tg+"),a=r("m/L8").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},pNMO:function(t,e,r){"use strict";var n=r("I+eb"),i=r("2oRo"),o=r("0GbY"),a=r("xDBR"),c=r("g6v/"),s=r("STAE"),l=r("/b8u"),u=r("0Dky"),f=r("UTVS"),p=r("6LWA"),g=r("hh1v"),m=r("glrk"),v=r("ewvW"),y=r("/GqU"),d=r("wE6v"),h=r("XGwC"),b=r("fHMY"),_=r("33Wh"),w=r("JBy8"),S=r("BX/b"),O=r("dBg+"),$=r("Bs8V"),k=r("m/L8"),B=r("0eef"),P=r("kRJp"),T=r("busE"),j=r("VpIT"),C=r("93I0"),N=r("0BK2"),E=r("kOOl"),I=r("tiKp"),J=r("5Tg+"),R=r("dG/n"),L=r("1E5z"),V=r("afO8"),G=r("tycR").forEach,U=C("hidden"),x=I("toPrimitive"),M=V.set,q=V.getterFor("Symbol"),H=Object.prototype,K=i.Symbol,Q=o("JSON","stringify"),W=$.f,D=k.f,X=S.f,A=B.f,F=j("symbols"),Y=j("op-symbols"),z=j("string-to-symbol-registry"),Z=j("symbol-to-string-registry"),tt=j("wks"),et=i.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=c&&u((function(){return 7!=b(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(H,e);n&&delete H[e],D(t,e,r),n&&t!==H&&D(H,e,n)}:D,it=function(t,e){var r=F[t]=b(K.prototype);return M(r,{type:"Symbol",tag:t,description:e}),c||(r.description=e),r},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},at=function(t,e,r){t===H&&at(Y,e,r),m(t);var n=d(e,!0);return m(r),f(F,n)?(r.enumerable?(f(t,U)&&t[U][n]&&(t[U][n]=!1),r=b(r,{enumerable:h(0,!1)})):(f(t,U)||D(t,U,h(1,{})),t[U][n]=!0),nt(t,n,r)):D(t,n,r)},ct=function(t,e){m(t);var r=y(e),n=_(r).concat(ft(r));return G(n,(function(e){c&&!st.call(r,e)||at(t,e,r[e])})),t},st=function(t){var e=d(t,!0),r=A.call(this,e);return!(this===H&&f(F,e)&&!f(Y,e))&&(!(r||!f(this,e)||!f(F,e)||f(this,U)&&this[U][e])||r)},lt=function(t,e){var r=y(t),n=d(e,!0);if(r!==H||!f(F,n)||f(Y,n)){var i=W(r,n);return!i||!f(F,n)||f(r,U)&&r[U][n]||(i.enumerable=!0),i}},ut=function(t){var e=X(y(t)),r=[];return G(e,(function(t){f(F,t)||f(N,t)||r.push(t)})),r},ft=function(t){var e=t===H,r=X(e?Y:y(t)),n=[];return G(r,(function(t){!f(F,t)||e&&!f(H,t)||n.push(F[t])})),n};(s||(T((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===H&&r.call(Y,t),f(this,U)&&f(this[U],e)&&(this[U][e]=!1),nt(this,e,h(1,t))};return c&&rt&&nt(H,e,{configurable:!0,set:r}),it(e,t)}).prototype,"toString",(function(){return q(this).tag})),T(K,"withoutSetter",(function(t){return it(E(t),t)})),B.f=st,k.f=at,$.f=lt,w.f=S.f=ut,O.f=ft,J.f=function(t){return it(I(t),t)},c&&(D(K.prototype,"description",{configurable:!0,get:function(){return q(this).description}}),a||T(H,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:K}),G(_(tt),(function(t){R(t)})),n({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(z,e))return z[e];var r=K(e);return z[e]=r,Z[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),n({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),Q)&&n({target:"JSON",stat:!0,forced:!s||u((function(){var t=K();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}))},{stringify:function(t,e,r){for(var n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=e,(g(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),i[1]=e,Q.apply(null,i)}});K.prototype[x]||P(K.prototype,x,K.prototype.valueOf),L(K,"Symbol"),N[U]=!0},xtqI:function(t,e,r){"use strict";r.r(e);r("pNMO"),r("4Brf"),r("ma9I");var n={metaInfo:function(){var t=this.$page.metadata.siteUrl,e={title:this.$page.article.title,meta:[{name:"description",content:this.$page.article.description},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:this.$page.article.description},{name:"twitter:title",content:this.$page.article.title},{name:"twitter:site",content:"@rebalancingyou"},{name:"twitter:creator",content:"@rebalancingyou"},{property:"og:type",content:"article"},{property:"og:title",content:this.$page.article.title},{property:"og:description",content:this.$page.article.description},{property:"og:url",content:"".concat(t).concat(this.$page.article.path)}]};if(this.$page.article.cover_image){var r=this.$page.article.cover_image.src,n="".concat(t).concat(r);e.meta.push({name:"twitter:image",content:n}),e.meta.push({property:"og:image",content:n})}return e}},i=(r("1aP3"),r("KHd+")),o=null,a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("article",{staticClass:"article"},[r("div",{staticClass:"container"},[r("div",{staticClass:"article__header"},[r("div",{staticClass:"article__info"},[t._v(t._s(t.$page.article.date)+". "),r("strong",[t._v(t._s(t.$page.article.timeToRead)+" min read.")])]),r("h3",{staticClass:"article__title"},[t._v("\n          "+t._s(t.$page.article.title)+"\n        ")])]),r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article__intro",domProps:{innerHTML:t._s(t.$page.article.introduction)}}),t.$page.article.cover_image?r("div",{staticClass:"article__image"},[r("g-image",{attrs:{src:t.$page.article.cover_image,alt:t.$page.article.cover_image_alt,position:"top"}})],1):t._e(),r("div",{staticClass:"article__content"},[r("p",{staticClass:"article__back"},[r("g-link",{attrs:{to:"/",title:"Return to home"}},[t._v("◀ Back")])],1),r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.article.content)}}),r("p",{staticClass:"article__back"},[r("g-link",{attrs:{to:"/",title:"Return to home"}},[t._v("◀ Back")])],1)])])])])}),[],!1,null,null,null);"function"==typeof o&&o(a);e.default=a.exports}}]);