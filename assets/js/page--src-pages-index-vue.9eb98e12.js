(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e){},175:function(t,e,n){"use strict";var i=n(164);n.n(i).a},176:function(t,e,n){"use strict";var i=n(4),a=n(69).filter,r=n(49),s=n(30),o=r("filter"),c=s("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},177:function(t,e,n){"use strict";var i=n(4),a=n(73).includes,r=n(126);i({target:"Array",proto:!0,forced:!n(30)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},178:function(t,e,n){"use strict";var i=n(4),a=n(77),r=n(13);i({target:"String",proto:!0,forced:!n(78)("includes")},{includes:function(t){return!!~String(r(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},179:function(t,e,n){"use strict";var i=n(165);n.n(i).a},180:function(t,e,n){"use strict";var i=n(166);n.n(i).a},181:function(t,e,n){"use strict";var i=n(167),a=n.n(i);e.default=a.a},182:function(t,e,n){"use strict";n.r(e);var i=n(111),a={props:["article"]},r=(n(175),n(29)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g-link",{staticClass:"article-summary",attrs:{to:t.article.path,title:"Read full article"}},[n("div",{staticClass:"article-summary__inner"},[n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article-summary__date",domProps:{innerHTML:t._s(t.article.date)}}),n("div",{staticClass:"article-summary__text"},[n("p",[t._v(t._s(t.article.introduction)+" "),n("span",{staticClass:"article-summary__read-more"},[t._v("Read more ⟶")])])]),n("g-image",{staticClass:"article-summary__thumbnail",attrs:{src:t.article.cover_image.src,alt:"Article thumbnail"}})],1)])}),[],!1,null,null,null).exports,o=(n(176),n(177),n(79),n(80),n(26),n(178),n(81),n(52),{props:["post"],data:function(){return{text:"",tags:[],display:!0}},created:function(){var t=this.post.edge_media_to_caption.edges[0].node.text.split(" ");this.text=t.filter((function(t){return!t.startsWith("#")})).slice(0,15).join(" ")+"...",this.tags=t.filter((function(t){return t.startsWith("#")&&t.length>1})),this.display=this.tags.includes("#rebalancingyou")}}),c=(n(179),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("a",{staticClass:"photo",style:"background-image:url("+t.post.display_url+")",attrs:{href:"https://www.instagram.com/p/"+t.post.shortcode,rel:"noopener",target:"_blank",title:"Visit post on Instagram"}},[n("div",{staticClass:"photo__inner"},[n("div",{staticClass:"photo__text"},[n("img",{staticClass:"photo__thumbnail",attrs:{src:t.post.thumbnail_src,alt:"Post thumbnail"}}),t._v("\n      "+t._s(t.text)+"\n    ")]),t.tags?n("div",{staticClass:"photo__tags"},t._l(t.tags,(function(e,i){return n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],key:i,staticClass:"photo__tag",domProps:{innerHTML:t._s(e)}})})),0):t._e()])]):t._e()}),[],!1,null,null,null).exports),l=Object(i.a)({components:{ArticleSummary:s,InstagramPost:c},metaInfo:{title:"Home",description:"Energise, replenish, nurish."}},"metaInfo",(function(){var t=this.$page.metadata,e=t.siteUrl,n=t.siteDescription,i="Rebalancing You. Emma Rowland nutrition.",a="".concat(e,"/share.jpg");return{title:i,meta:[{name:"description",content:n},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:n},{name:"twitter:title",content:i},{name:"twitter:site",content:"@rebalancingyou"},{name:"twitter:creator",content:"@rebalancingyou"},{property:"og:type",content:"article"},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:url",content:e},{name:"twitter:image",content:a},{property:"og:image",content:a}]}})),u=(n(180),n(181)),p=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"photos"},[e("div",{staticClass:"container"},[e("div",{staticClass:"photos__container"},[this._l(this.$page.articles.edges,(function(t){return e("article-summary",{key:t.node.id,attrs:{article:t.node}})})),this._l(this.$page.photos.edges,(function(t){return e("instagram-post",{key:t.node.id,attrs:{post:t.node}})}))],2)])])])}),[],!1,null,null,null);"function"==typeof u.default&&Object(u.default)(p);e.default=p.exports}}]);