(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"08Wd":function(t,e,s){"use strict";var i=s("bntj");s.n(i).a},"967j":function(t,e,s){},B5To:function(t,e,s){"use strict";var i={props:["recipe"]},a=(s("exR0"),s("KHd+")),r=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("g-link",{staticClass:"recipe-summary",attrs:{to:this.recipe.path,title:"View recipe"}},[e("div",{staticClass:"recipe-summary__inner"},[e("div",{staticClass:"recipe-summary__text"},[e("h3",[this._v(this._s(this.recipe.title))])]),this.recipe.cover_image?e("g-image",{staticClass:"recipe-summary__thumbnail",attrs:{src:this.recipe.cover_image.src,alt:"Recipe thumbnail"}}):this._e()],1)])}),[],!1,null,null,null);e.a=r.exports},JTJg:function(t,e,s){"use strict";var i=s("I+eb"),a=s("WjRb"),r=s("HYAF");i({target:"String",proto:!0,forced:!s("qxPZ")("includes")},{includes:function(t){return!!~String(r(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},KK8C:function(t,e,s){"use strict";s("eXz5");var i=s("KHd+"),a=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form form--subscribe"},[e("h2",[this._v("Don't wait until tomorrow")]),e("p",[this._v("\n    Join our Rebalancing You community.\n  ")]),e("form",{staticClass:"validate",attrs:{action:"https://kitchenstars.us12.list-manage.com/subscribe?u=1a935104817ba5bf1a65e8186&id=765a0e6187",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[e("div",[e("label",{staticClass:"form__label",attrs:{for:"mce-FNAME"}},[this._v("First Name ")]),e("input",{staticClass:"form__field",attrs:{type:"text",value:"",name:"FNAME",id:"mce-FNAME"}})]),e("div",[e("label",{staticClass:"form__label",attrs:{for:"mce-LNAME"}},[this._v("Last Name ")]),e("input",{staticClass:"form__field",attrs:{type:"text",value:"",name:"LNAME",id:"mce-LNAME"}})]),e("div",[e("label",{staticClass:"form__label",attrs:{for:"mce-EMAIL"}},[this._v("Email Address "),e("span",{staticClass:"form__required"},[this._v("*")])]),e("input",{staticClass:"form__field",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",required:""}})]),e("div",{attrs:{id:"mce-responses"}},[e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_1a935104817ba5bf1a65e8186_ba4ae16724",tabindex:"-1",value:""}})]),e("div",{staticClass:"clear"},[e("button",{staticClass:"form__submit",attrs:{type:"submit",id:"mc-embedded-subscribe"}},[this._v("\n        Subscribe\n      ")])])])])}],!1,null,null,null);e.a=a.exports},KQm8:function(t,e,s){},OcHe:function(t,e,s){"use strict";var i={props:["article"]},a=(s("pdf1"),s("KHd+")),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("g-link",{staticClass:"article-summary",attrs:{to:t.article.path,title:"Read full article"}},[s("div",{staticClass:"article-summary__inner"},[s("div",{staticClass:"article-summary__info"},[t._v(t._s(t.article.label))]),s("div",{staticClass:"article-summary__text"},[s("h3",[t._v("\n        "+t._s(t.article.title)+"\n        "),s("span",{staticClass:"article-summary__read-more"},[t._v("Read more ▸")])])]),s("g-image",{staticClass:"article-summary__thumbnail",attrs:{src:t.article.image.src,alt:"Article thumbnail"}})],1)])}),[],!1,null,null,null);e.a=r.exports},"Py/z":function(t,e,s){},TeQF:function(t,e,s){"use strict";var i=s("I+eb"),a=s("tycR").filter,r=s("Hd5f"),n=s("rkAj"),c=r("filter"),o=n("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},bntj:function(t,e,s){},eXz5:function(t,e,s){"use strict";var i=s("Py/z");s.n(i).a},exR0:function(t,e,s){"use strict";var i=s("967j");s.n(i).a},iyQ6:function(t,e,s){"use strict";s.r(e);var i=s("hK9i"),a=s("B5To"),r=s("OcHe"),n=(s("EnZy"),s("rB9j"),s("UxlC"),s("oVuX"),s("+2oP"),s("TeQF"),s("LKBx"),s("yq1k"),s("JTJg"),{props:["post"],data:function(){return{text:"",tags:[],display:!0}},created:function(){var t=this.post.edge_media_to_caption.edges[0].node.text.split(" ");this.text=t.filter((function(t){return!t.startsWith("#")})).slice(0,10).join(" ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")+"...",this.tags=t.filter((function(t){return t.startsWith("#")&&t.length>1})),this.display=this.tags.includes("#rebalancingyou")}}),c=(s("08Wd"),s("KHd+")),o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.display?s("a",{staticClass:"photo",attrs:{href:"https://www.instagram.com/p/"+t.post.shortcode,rel:"noopener",target:"_blank",title:"Visit post on Instagram"}},[s("div",{staticClass:"photo__inner"},[s("img",{staticClass:"photo__thumbnail",attrs:{src:t.post.thumbnail_src,alt:"Post thumbnail",loading:"lazy",width:"375",height:"375"}}),s("div",{staticClass:"photo__text"},[t._v("\n      "+t._s(t.text.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,""))+"\n    ")]),t.tags?s("div",{staticClass:"photo__tags"},t._l(t.tags,(function(e,i){return s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],key:i,staticClass:"photo__tag",domProps:{innerHTML:t._s(e)}})})),0):t._e()])]):t._e()}),[],!1,null,null,null).exports,l=s("KK8C"),u={components:{Banner:i.a,RecipeSummary:a.a,ArticleSummary:r.a,InstagramPost:o,SubscribeForm:l.a},metaInfo:function(){var t=this.$page.metadata,e=t.siteUrl,s=t.siteDescription,i="Rebalancing You. Emma Rowland Nutrition.",a="".concat(e,"/share.jpg");return{title:i,meta:[{name:"description",content:s},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:s},{name:"twitter:title",content:i},{name:"twitter:site",content:"@rebalancingyou"},{name:"twitter:creator",content:"@rebalancingyou"},{property:"og:type",content:"article"},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:url",content:e},{name:"twitter:image",content:a},{property:"og:image",content:a}]}}},m=null,d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("banner",{attrs:{heading:"Energise,<br />Restore,<br />Nourish...",image:"banner.png"}}),s("section",{staticClass:"section section--articles"},[s("div",{staticClass:"container"},[s("h2",[s("g-link",{attrs:{to:"/articles"}},[t._v("\n          Articles\n          "),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])],1),s("div",{staticClass:"section__container"},t._l(t.$page.articles.edges,(function(t){return s("article-summary",{key:t.node.id,attrs:{article:t.node}})})),1)])]),s("section",{staticClass:"section section--recipes"},[s("div",{staticClass:"container"},[s("h2",[s("g-link",{attrs:{to:"/recipes"}},[t._v("\n          Recipes\n          "),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])],1),s("div",{staticClass:"section__container"},t._l(t.$page.recipes.edges,(function(t){return s("recipe-summary",{key:t.node.id,attrs:{recipe:t.node}})})),1)])]),s("section",{staticClass:"section section--instagram"},[s("div",{staticClass:"container"},[s("h2",[s("a",{attrs:{href:"https://www.instagram.com/rebalancingyou",rel:"noopener",target:"_blank"}},[t._v("\n          Instagram\n          "),s("span",{staticClass:"section__view-more"},[t._v("View more ▸")])])]),s("div",{staticClass:"section__container"},t._l(t.$page.photos.edges,(function(t){return s("instagram-post",{key:t.node.id,attrs:{post:t.node}})})),1)])])],1)}),[],!1,null,null,null);"function"==typeof m&&m(d);e.default=d.exports},pdf1:function(t,e,s){"use strict";var i=s("KQm8");s.n(i).a},yq1k:function(t,e,s){"use strict";var i=s("I+eb"),a=s("TWQb").includes,r=s("RNIs");i({target:"Array",proto:!0,forced:!s("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")}}]);