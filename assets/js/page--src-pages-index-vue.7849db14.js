(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(t,e,a){},171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},174:function(t,e,a){},175:function(t,e){},180:function(t,e,a){"use strict";var i=a(170);a.n(i).a},181:function(t,e,a){"use strict";var i=a(171);a.n(i).a},182:function(t,e,a){"use strict";var i=a(172);a.n(i).a},183:function(t,e,a){"use strict";var i=a(4),s=a(69).filter,n=a(51),r=a(34),c=n("filter"),l=r("filter");i({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},184:function(t,e,a){"use strict";var i=a(173);a.n(i).a},185:function(t,e,a){"use strict";var i=a(174);a.n(i).a},186:function(t,e,a){"use strict";var i=a(175),s=a.n(i);e.default=s.a},187:function(t,e,a){"use strict";a.r(e);var i={props:["url","path","label","title","image","alt"],mounted:function(){console.log(this.$props)}},s=(a(180),a(29)),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g-link",{staticClass:"summary",attrs:{to:t.path,title:"View "+t.title}},[a("div",{staticClass:"summary__inner"},[t.label?a("div",{staticClass:"summary__info"},[t._v(t._s(t.label))]):t._e(),a("div",{staticClass:"summary__text"},[a("p",[t._v(t._s(t.title))])]),a("g-image",{staticClass:"summary__thumbnail",attrs:{src:t.image,alt:t.alt}})],1)])}),[],!1,null,null,null).exports,r={props:["recipe"]},c=(a(181),Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("g-link",{staticClass:"recipe-summary",attrs:{to:this.recipe.path,title:"View recipe"}},[e("div",{staticClass:"recipe-summary__inner"},[e("div",{staticClass:"recipe-summary__text"},[e("h3",[this._v(this._s(this.recipe.title))])]),e("g-image",{staticClass:"recipe-summary__thumbnail",attrs:{src:this.recipe.cover_image.src,alt:"Recipe thumbnail"}})],1)])}),[],!1,null,null,null).exports),l={props:["article"]},o=(a(182),Object(s.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g-link",{staticClass:"article-summary",attrs:{to:t.article.path,title:"Read full article"}},[a("div",{staticClass:"article-summary__inner"},[a("div",{staticClass:"article-summary__info"},[t._v(t._s(t.article.label))]),a("div",{staticClass:"article-summary__text"},[a("h3",[t._v(t._s(t.article.title)+" "),a("span",{staticClass:"article-summary__read-more"},[t._v("Read more ⟶")])])]),a("g-image",{staticClass:"article-summary__thumbnail",attrs:{src:t.article.image.src,alt:"Article thumbnail"}})],1)])}),[],!1,null,null,null).exports),u=(a(183),a(76),a(77),a(26),a(78),a(52),{props:["post"],data:function(){return{text:"",tags:[],display:!0}},created:function(){var t=this.post.edge_media_to_caption.edges[0].node.text.split(" ");this.text=t.filter((function(t){return!t.startsWith("#")})).slice(0,10).join(" ")+"...",this.tags=t.filter((function(t){return t.startsWith("#")&&t.length>1}))}}),m=(a(184),{components:{ItemSummary:n,RecipeSummary:c,ArticleSummary:o,InstagramPost:Object(s.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.display?a("a",{staticClass:"photo",style:"background-image:url("+t.post.thumbnail_src+")",attrs:{href:"https://www.instagram.com/p/"+t.post.shortcode,rel:"noopener",target:"_blank",title:"Visit post on Instagram"}},[a("div",{staticClass:"photo__inner"},[a("div",{staticClass:"photo__text"},[a("img",{staticClass:"photo__thumbnail",attrs:{src:t.post.thumbnail_src,alt:"Post thumbnail"}}),t._v("\n      "+t._s(t.text.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,""))+"\n    ")]),t.tags?a("div",{staticClass:"photo__tags"},t._l(t.tags,(function(e,i){return a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],key:i,staticClass:"photo__tag",domProps:{innerHTML:t._s(e)}})})),0):t._e()])]):t._e()}),[],!1,null,null,null).exports},metaInfo:function(){var t=this.$page.metadata,e=t.siteUrl,a=t.siteDescription,i="Rebalancing You. Emma Rowland nutrition.",s="".concat(e,"/share.jpg");return{title:i,meta:[{name:"description",content:a},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:a},{name:"twitter:title",content:i},{name:"twitter:site",content:"@rebalancingyou"},{name:"twitter:creator",content:"@rebalancingyou"},{property:"og:type",content:"article"},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:url",content:e},{name:"twitter:image",content:s},{property:"og:image",content:s}]}}}),p=(a(185),a(186)),_=Object(s.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",{staticClass:"section section--articles"},[a("div",{staticClass:"container"},[a("h2",[t._v("Articles")]),a("div",{staticClass:"section__container"},t._l(t.$page.articles.edges,(function(t){return a("article-summary",{key:t.node.id,attrs:{article:t.node}})})),1)])]),a("section",{staticClass:"section section--recipes"},[a("div",{staticClass:"container"},[a("h2",[t._v("Recipes")]),a("div",{staticClass:"section__container"},t._l(t.$page.recipes.edges,(function(t){return a("recipe-summary",{key:t.node.id,attrs:{recipe:t.node}})})),1)])]),a("section",{staticClass:"section section--instagram"},[a("div",{staticClass:"container"},[a("h2",[t._v("Instagram")]),a("div",{staticClass:"section__container"},t._l(t.$page.photos.edges,(function(t){return a("instagram-post",{key:t.node.id,attrs:{post:t.node}})})),1)])])])}),[],!1,null,null,null);"function"==typeof p.default&&Object(p.default)(_);e.default=_.exports}}]);