(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"08Wd":function(t,e,s){"use strict";var a=s("bntj");s.n(a).a},"967j":function(t,e,s){},B5To:function(t,e,s){"use strict";var a={props:["recipe"]},i=(s("exR0"),s("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("g-link",{staticClass:"recipe-summary",attrs:{to:this.recipe.path,title:"View recipe"}},[e("div",{staticClass:"recipe-summary__inner"},[e("div",{staticClass:"recipe-summary__text"},[e("h3",[this._v(this._s(this.recipe.title))])]),e("g-image",{staticClass:"recipe-summary__thumbnail",attrs:{src:this.recipe.cover_image.src,alt:"Recipe thumbnail"}})],1)])}),[],!1,null,null,null);e.a=r.exports},JTJg:function(t,e,s){"use strict";var a=s("I+eb"),i=s("WjRb"),r=s("HYAF");a({target:"String",proto:!0,forced:!s("qxPZ")("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},KK8C:function(t,e,s){"use strict";s("eXz5");var a=s("KHd+"),i=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form form--subscribe"},[s("h2",[t._v("Don't wait until tomorrow")]),s("p",[t._v("Join our Rebalancing You community for your free guide:"),s("br"),s("strong",[t._v("The Ultimate Healthful, Well Stocked Kitchen")]),t._v(".")]),s("form",{staticClass:"validate",attrs:{action:"https://kitchenstars.us12.list-manage.com/subscribe/post?u=1a935104817ba5bf1a65e8186&id=ba4ae16724",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[s("div",[s("label",{staticClass:"form__label",attrs:{for:"mce-FNAME"}},[t._v("First Name ")]),s("input",{staticClass:"form__field",attrs:{type:"text",value:"",name:"FNAME",id:"mce-FNAME"}})]),s("div",[s("label",{staticClass:"form__label",attrs:{for:"mce-LNAME"}},[t._v("Last Name ")]),s("input",{staticClass:"form__field",attrs:{type:"text",value:"",name:"LNAME",id:"mce-LNAME"}})]),s("div",[s("label",{staticClass:"form__label",attrs:{for:"mce-EMAIL"}},[t._v("Email Address "),s("span",{staticClass:"form__required"},[t._v("*")])]),s("input",{staticClass:"form__field",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",required:""}})]),s("div",{attrs:{id:"mce-responses"}},[s("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),s("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),s("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[s("input",{attrs:{type:"text",name:"b_1a935104817ba5bf1a65e8186_ba4ae16724",tabindex:"-1",value:""}})]),s("div",{staticClass:"clear"},[s("button",{staticClass:"form__submit",attrs:{type:"submit",id:"mc-embedded-subscribe"}},[t._v("Subscribe")])])])])}],!1,null,null,null);e.a=i.exports},KQm8:function(t,e,s){},OcHe:function(t,e,s){"use strict";var a={props:["article"]},i=(s("pdf1"),s("KHd+")),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("g-link",{staticClass:"article-summary",attrs:{to:t.article.path,title:"Read full article"}},[s("div",{staticClass:"article-summary__inner"},[s("div",{staticClass:"article-summary__info"},[t._v(t._s(t.article.label))]),s("div",{staticClass:"article-summary__text"},[s("h3",[t._v(t._s(t.article.title)+" "),s("span",{staticClass:"article-summary__read-more"},[t._v("Read more ▸")])])]),s("g-image",{staticClass:"article-summary__thumbnail",attrs:{src:t.article.image.src,alt:"Article thumbnail"}})],1)])}),[],!1,null,null,null);e.a=r.exports},"Py/z":function(t,e,s){},TeQF:function(t,e,s){"use strict";var a=s("I+eb"),i=s("tycR").filter,r=s("Hd5f"),n=s("rkAj"),c=r("filter"),o=n("filter");a({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},bntj:function(t,e,s){},eXz5:function(t,e,s){"use strict";var a=s("Py/z");s.n(a).a},exR0:function(t,e,s){"use strict";var a=s("967j");s.n(a).a},iyQ6:function(t,e,s){"use strict";s.r(e);var a=s("hK9i"),i=s("B5To"),r=s("OcHe"),n=(s("TeQF"),s("yq1k"),s("oVuX"),s("+2oP"),s("rB9j"),s("JTJg"),s("UxlC"),s("EnZy"),s("LKBx"),{props:["post"],data:function(){return{text:"",tags:[],display:!0}},created:function(){var t=this.post.edge_media_to_caption.edges[0].node.text.split(" ");this.text=t.filter((function(t){return!t.startsWith("#")})).slice(0,10).join(" ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")+"...",this.tags=t.filter((function(t){return t.startsWith("#")&&t.length>1})),this.display=this.tags.includes("#rebalancingyou")}}),c=(s("08Wd"),s("KHd+")),o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.display?s("a",{staticClass:"photo",style:"background-image:url("+t.post.thumbnail_src+")",attrs:{href:"https://www.instagram.com/p/"+t.post.shortcode,rel:"noopener",target:"_blank",title:"Visit post on Instagram"}},[s("div",{staticClass:"photo__inner"},[s("div",{staticClass:"photo__text"},[s("img",{staticClass:"photo__thumbnail",attrs:{src:t.post.thumbnail_src,alt:"Post thumbnail"}}),t._v("\n      "+t._s(t.text.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,""))+"\n    ")]),t.tags?s("div",{staticClass:"photo__tags"},t._l(t.tags,(function(e,a){return s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],key:a,staticClass:"photo__tag",domProps:{innerHTML:t._s(e)}})})),0):t._e()])]):t._e()}),[],!1,null,null,null).exports,l=s("KK8C"),u={components:{Banner:a.a,RecipeSummary:i.a,ArticleSummary:r.a,InstagramPost:o,SubscribeForm:l.a},metaInfo:function(){var t=this.$page.metadata,e=t.siteUrl,s=t.siteDescription,a="Rebalancing You. Emma Rowland nutrition.",i="".concat(e,"/share.jpg");return{title:a,meta:[{name:"description",content:s},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:s},{name:"twitter:title",content:a},{name:"twitter:site",content:"@rebalancingyou"},{name:"twitter:creator",content:"@rebalancingyou"},{property:"og:type",content:"article"},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:url",content:e},{name:"twitter:image",content:i},{property:"og:image",content:i}]}}},m=null,d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("banner",{attrs:{heading:"Energise,<br />Restore,<br />Nourish...",image:"banner.png"}}),s("section",{staticClass:"section section--articles"},[s("div",{staticClass:"container"},[s("h2",[s("g-link",{attrs:{to:"/articles"}},[t._v("Articles"),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])],1),s("div",{staticClass:"section__container"},t._l(t.$page.articles.edges,(function(t){return s("article-summary",{key:t.node.id,attrs:{article:t.node}})})),1)])]),s("section",{staticClass:"section section--recipes"},[s("div",{staticClass:"container"},[s("h2",[s("g-link",{attrs:{to:"/recipes"}},[t._v("Recipes"),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])],1),s("div",{staticClass:"section__container"},t._l(t.$page.recipes.edges,(function(t){return s("recipe-summary",{key:t.node.id,attrs:{recipe:t.node}})})),1)])]),s("section",{staticClass:"section section--instagram"},[s("div",{staticClass:"container"},[s("h2",[s("a",{attrs:{href:"https://www.instagram.com/rebalancingyou",rel:"noopener",target:"_blank"}},[t._v("Instagram"),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])]),s("div",{staticClass:"section__container"},t._l(t.$page.photos.edges,(function(t){return s("instagram-post",{key:t.node.id,attrs:{post:t.node}})})),1)])])],1)}),[],!1,null,null,null);"function"==typeof m&&m(d);e.default=d.exports},pdf1:function(t,e,s){"use strict";var a=s("KQm8");s.n(a).a},yq1k:function(t,e,s){"use strict";var a=s("I+eb"),i=s("TWQb").includes,r=s("RNIs");a({target:"Array",proto:!0,forced:!s("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")}}]);