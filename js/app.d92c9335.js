(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/jn-components/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0422":function(t,e,n){"use strict";var a=n("10d5"),i=n.n(a);e["default"]=i.a},"079d":function(t,e,n){},"0d7a":function(t,e,n){"use strict";var a=n("c39d"),i=n.n(a);i.a},"0f26":function(t,e,n){},"10d5":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"modal":{"modalTitle":"Fancy english stuff"},"hello":"hello world!","fluff":"in english"},"ja":{"modal":{"modalTitle":"Fancy japanese stuff"},"hello":"こんにちは、世界！","fluff":"in japanese"}}'),delete t.options._Ctor}},"1bf5":function(t,e,n){"use strict";var a=n("9e75"),i=n.n(a);i.a},"1ef5":function(t,e,n){"use strict";var a=n("52da"),i=n.n(a);i.a},"24e0":function(t,e,n){"use strict";var a=n("d32b"),i=n.n(a);i.a},2918:function(t,e,n){},"2bbb":function(t,e,n){},"2f3c":function(t,e,n){"use strict";var a=n("6e02"),i=n.n(a);i.a},"30b7":function(t,e,n){},"3e53":function(t,e,n){"use strict";var a=n("9a15"),i=n.n(a);i.a},5033:function(t,e,n){"use strict";var a=n("6a47"),i=n.n(a);i.a},"52da":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("div",{staticClass:"left-col"},[n("nav",[n("ul",[n("router-link",{attrs:{to:"/card-container",tag:"li"}},[t._v("Card container")]),n("router-link",{attrs:{to:"/horizontal",tag:"li"}},[t._v("Horizontal cards")]),n("router-link",{attrs:{to:"/dialog",tag:"li"}},[t._v("Dialogboks")]),n("router-link",{attrs:{to:"/locale",tag:"li"}},[t._v("Locale")]),n("router-link",{attrs:{to:"/lists",tag:"li"}},[t._v("Lists")]),n("router-link",{attrs:{to:"/buttons",tag:"li"}},[t._v("Buttons")]),n("router-link",{attrs:{to:"/mini-card",tag:"li"}},[t._v("Mini card")]),n("router-link",{attrs:{to:"/tasklist",tag:"li"}},[t._v("TaskList")]),n("router-link",{attrs:{to:"/board",tag:"li"}},[t._v("Board")]),n("router-link",{attrs:{to:"/assessment",tag:"li"}},[t._v("Vurdering")])],1)])]),n("div",{staticClass:"right-col"},[n("h1",{staticClass:"mb20"},[t._v("Jobbnorge Vue-bibliotek")]),n("router-view")],1),n("hr")])},o=[],s={name:"App"},l=s,c=(n("eb02"),n("2877")),u=Object(c["a"])(l,r,o,!1,null,"00d3b342",null),d=u.exports,f=n("1157"),m=n.n(f),p=(n("4989"),n("ab8b"),n("6b10"),n("cc81"),n("a925")),g=n("ad3d"),h=n("584e"),v=n("b702"),b=n("e018"),_=n("ecee"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-hor-cards"},t._l(t.cards,(function(t){return n("JnCardHorizontal",{key:t.title,attrs:{mainFrameTitle:t.mainFrameTitle,colorTheme:t.colorTheme,secondFrameTitle:t.secondFrameTitle,secondFrameTopText:t.secondFrameTopText,icon:t.icon}})})),1)},y=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jn-card-hor"},[n("div",{staticClass:"frame main-frame",class:t.GetBackground(this.colorTheme,!0)},[null==t.icon?n("h1",[t._v(t._s(t.mainFrameTitle))]):t._e(),n("h1",[n("fa-icon",{attrs:{icon:["fal",this.icon]}})],1)]),n("div",{staticClass:"frame second-frame",class:t.GetBackground(this.colorTheme,!1)},[n("h5",{staticClass:"txt-black"},[t._v(t._s(t.secondFrameTitle))]),n("span",{staticClass:"top-right-text",class:t.GetTextColor(this.colorTheme)},[t._v(t._s(t.secondFrameTopText))])])])},k=[],j={name:"JnCardHorizontal",props:{mainFrameTitle:String,secondFrameTitle:String,secondFrameTopText:String,colorTheme:String,icon:String},methods:{GetBackground:function(t,e){switch("black"==t&&console.log(this.icon),t){case"red":return e?"bg-red":"bg-red-secondary";case"blue":return e?"bg-blue":"bg-blue-secondary";case"green":return e?"bg-green":"bg-green-secondary";case"black":return e?"bg-black":"bg-black-secondary"}},GetTextColor:function(t){switch(t){case"red":return"txt-red";case"blue":return"txt-blue";case"green":return"txt-green";case"black":return"txt-black"}}}},T=j,w=(n("93be"),Object(c["a"])(T,x,k,!1,null,"2047b197",null)),D=w.exports,J={name:"HorizontalCards",components:{JnCardHorizontal:D},data:function(){return{cards:[{mainFrameTitle:"920",colorTheme:"blue",secondFrameTitle:"Gjennomsnitt screeningscore",secondFrameTopText:"av 1200 mulige"},{mainFrameTitle:"22%",colorTheme:"black",secondFrameTitle:"Kvalifiserte",secondFrameTopText:""},{mainFrameTitle:"92",colorTheme:"red",secondFrameTitle:"Nye søkere",secondFrameTopText:"200 søkere totalt"},{icon:"comments",colorTheme:"green",secondFrameTitle:"Forespørsler",secondFrameTopText:"Krever handling"}]}}},B=J,E=(n("3e53"),Object(c["a"])(B,C,y,!1,null,"0e0b4bc3",null)),O=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openInfoModal}},[t._v("Info-Modal")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openConfirmModal}},[t._v("Confirm-Modal")])])},F=[],M=(n("b0c0"),n("d3b7"),n("5530")),L=n("d4ec"),P=n("bee2"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal fade",attrs:{id:"jnDialogModal",tabindex:"-1",role:"dialog","aria-labelledby":"jnDialogModalLabel","aria-hidden":"true","data-backdrop":"static","data-keyboard":"false"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"jnDialogModalLabel"}},[t._v(t._s(t.modalTitle))])]),n("div",{staticClass:"modal-body"},[t._v(t._s(t.modalBody))]),n("div",{staticClass:"modal-footer"},[t.rejectButton.visible?n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.rejectModal}},[t._v(t._s(t.rejectButton.text))]):t._e(),t.resolveButton.visible?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.resolveModal}},[t._v(t._s(t.resolveButton.text))]):t._e()])])])])])},N=[],R={name:"JnDialogComponent",data:function(){return{display:!1,modalTitle:"",modalBody:"",rejectButton:{visible:!1,text:""},resolveButton:{visible:!1,text:""}}},watch:{display:function(t){t?$(document).ready((function(){return $("#jnDialogModal").modal("show")})):$(document).ready((function(){return $("#jnDialogModal").modal("hide")}))}},methods:{resolveModal:function(){this.display=!1,this.$emit("resolveModal")},rejectModal:function(){this.display=!1,this.$emit("rejectModal")},setOptions:function(t){Object.assign(this.$data,t)},showModal:function(t){this.display=t}}},I=R,z=Object(c["a"])(I,A,N,!1,null,null,null),H=z.exports,G=function(){function t(){Object(L["a"])(this,t),this.jnDialogComp=null}return Object(P["a"])(t,[{key:"mountVueComponent",value:function(){var t=document.createElement("div");t.id="jnDialogCtn",document.getElementsByTagName("body")[0].appendChild(t);var e=Vue.component(H.name,H);this.jnDialogComp=(new e).$mount(),document.getElementById("jnDialogCtn").appendChild(this.jnDialogComp.$el)}},{key:"confirm",value:function(t){var e=this;document.getElementById("jnDialogCtn")||this.mountVueComponent();var n={modalTitle:"Vennligst bekreft ditt valg",modalBody:"Du må bekrefte handlingen for å kunne fortsette.",rejectButton:{visible:!0,text:"Avbryt"},resolveButton:{visible:!0,text:"Bekreft"}};return this.jnDialogComp.setOptions(Object(M["a"])({},n,{},t)),this.jnDialogComp.showModal(!0),new Promise((function(t,n){e.jnDialogComp.$on("resolveModal",(function(){t("jn dialog modal resolved")})),e.jnDialogComp.$on("rejectModal",(function(){n("jn dialog modal rejected")}))}))}},{key:"info",value:function(t){var e=this;document.getElementById("jnDialogCtn")||this.mountVueComponent();var n={modalTitle:"Modal info tittel.",modalBody:"Her står det ennå mer detaljer som kunne har vært interessant til brukeren.",rejectButton:{visible:!1},resolveButton:{visible:!0,text:"Greit"}};return this.jnDialogComp.setOptions(Object(M["a"])({},n,{},t)),this.jnDialogComp.showModal(!0),new Promise((function(t){e.jnDialogComp.$on("resolveModal",(function(){t("info read")}))}))}}]),t}(),V=new G,q={name:"DialogExample",methods:{openInfoModal:function(){V.info({modalTitle:this.$t("modal.modalTitle")})},openConfirmModal:function(){V.confirm().then((function(t){return console.info(t)})).catch((function(t){return console.warn(t)}))}}},K=q,W=Object(c["a"])(K,S,F,!1,null,null,null),U=W.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{attrs:{for:"locale"}},[t._v("locale")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.locale,expression:"locale"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.locale=e.target.multiple?n:n[0]}}},[n("option",[t._v("en")]),n("option",[t._v("ja")])]),n("p",[t._v("message: "+t._s(t.$t("hello")))])])},X=[],Y={name:"LocaleDemo",data:function(){return this.$root.$i18n.locale="en",{locale:"en"}},watch:{locale:function(t){this.$root.$i18n.locale=t}}},Z=Y,tt=n("0422"),et=Object(c["a"])(Z,Q,X,!1,null,null,null);"function"===typeof tt["default"]&&Object(tt["default"])(et);var nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"350px"}},[n("JnCard",{attrs:{title:"To",subtitle:"Kortet viser ikke tittel fordi den ikke tilfredstiller kriteriene",contentPlaceholder:t.cardOpt.contentPlaceholder},on:{buttonClick:t.jnCardButtonClicked},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("I'm a description text coming from a different context. Ain't that cool or what?")])]},proxy:!0},{key:"button",fn:function(){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.anotherHandler}},[t._v("I'm from bootstrap")])]},proxy:!0}])})],1),n("div",{staticClass:"wrapper"},t._l([1,2,3,4,5],(function(e){return n("JnCard",{key:e,attrs:{title:t.cardOpt.title,subtitle:t.cardOpt.subtitle},on:{buttonClick:t.jnCardButtonClicked},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",[n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}})])]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Handling")])]},proxy:!0}],null,!0)})})),1)])},it=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card jn-card"},[n("div",{staticClass:"wrapper card-body"},[t.title.length>2?n("h2",{staticClass:"jn-card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?n("p",{staticClass:"jn-card-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),n("div",[t._t("content",[t.contentPlaceholder?n("img",{staticClass:"card-img mt-2 mb-2",attrs:{src:t.contentPlaceholder.imgPath,alt:t.contentPlaceholder.imgAlt}}):t._e()])],2),t._t("description"),n("div",{staticClass:"wrapper"},[t._t("button")],2)],2)])},ot=[],st=function t(e,n){Object(L["a"])(this,t),this.imgPath=e,this.imgAlt=n},lt={name:"JnCard",props:{title:String,subtitle:String,contentPlaceholder:st}},ct=lt,ut=(n("701a"),Object(c["a"])(ct,rt,ot,!1,null,"f9867236",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button",attrs:{role:"button",href:t.url,id:t.id}},[t._t("default"),t.icon?n("fa-icon",{attrs:{icon:["fal",t.icon]}}):n("fa-icon",{attrs:{icon:["fal","chevron-right"]}})],2)},mt=[],pt={name:"TextButton",props:{url:String,id:String,icon:String}},gt=pt,ht=(n("892c"),Object(c["a"])(gt,ft,mt,!1,null,"bd4fde72",null)),vt=ht.exports,bt={name:"JnCardCtn",components:{JnCard:dt,JnTextButton:vt},data:function(){return{cardOpt:{title:"Lorem ipsum dolor",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex?",contentPlaceholder:new st("hamperokken.jpg","hamperokken alt text")}}},methods:{jnCardButtonClicked:function(t){console.info(t)},anotherHandler:function(t){console.info(t)}}},_t=bt,Ct=(n("780e"),Object(c["a"])(_t,at,it,!1,null,"9079362e",null)),yt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("JnCard",{attrs:{title:"Annonse"},scopedSlots:t._u([{key:"content",fn:function(){return[n("ul",{staticClass:"no-padding-ul"},t._l(t.list1,(function(t){return n("JnListElement",{key:t.id,attrs:{icon:"file-alt",title:t.title,secondaryText:t.secondaryText,isExternal:t.isExternal,url:t.url,borderBetweenElements:t.borderBetweenElements,navigable:t.navigable}})})),1)]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Gå til annonser")])]},proxy:!0}])}),n("JnCard",{attrs:{title:"Dokumenter"},scopedSlots:t._u([{key:"content",fn:function(){return[n("ul",{staticClass:"no-padding-ul"},t._l(t.list2,(function(t){return n("JnListElement",{key:t.id,attrs:{icon:"user-secret",title:t.title,secondaryText:t.secondaryText,isExternal:t.isExternal,url:t.url,borderBetweenElements:t.borderBetweenElements,navigable:t.navigable}})})),1)]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Gå til dokumenter")])]},proxy:!0}])})],1)},kt=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"grid-wrapper",class:{borderBetween:t.borderBetweenElements,grow:t.navigable},on:{click:function(e){t.navigable&&t.navigate()}}},[n("i",{staticClass:"icon"},[n("fa-icon",{attrs:{icon:["fal",t.icon],size:"lg"}})],1),n("div",[t.secondaryText?n("p",{staticClass:"secondary-text"},[t._v(t._s(t.secondaryText))]):t._e(),n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),t.navigable?n("div",[t.isExternal?n("i",{staticClass:"center"},[n("fa-icon",{staticClass:"icon",attrs:{icon:["fal","external-link"],size:"lg"}})],1):n("i",{staticClass:"center"},[n("fa-icon",{staticClass:"icon",attrs:{icon:["fal","chevron-right"],size:"lg"}})],1)]):t._e()])},Tt=[],wt={name:"JnList",props:{icon:String,title:String,secondaryText:String,isExternal:Boolean,url:String,borderBetweenElements:Boolean,navigable:Boolean},methods:{navigate:function(){window.location.href=this.url}}},Dt=wt,Jt=(n("1bf5"),Object(c["a"])(Dt,jt,Tt,!1,null,"0d04d7fb",null)),Bt=Jt.exports,Et={name:"demoList",components:{JnListElement:Bt,JnCard:dt,JnTextButton:vt},data:function(){return{list1:[{id:1,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Publisert - 10 dager igjen",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0},{id:2,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Utgått - 2 dager siden",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0},{id:3,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Publisert - 5 dager igjen",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0}],list2:[{id:1,isExternal:!1,title:"Innstillingsdokument (standard)",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0},{id:2,isExternal:!1,title:"Avslagsbrev",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0},{id:3,isExternal:!1,title:"Tilbudsbrev",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0}]}}},Ot=Et,St=(n("af6d"),Object(c["a"])(Ot,xt,kt,!1,null,"787a8f1f",null)),$t=St.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper pt20"},[n("h3",[t._v("Buttons")]),n("JnTextButton",{attrs:{url:"http://nrk.no",id:"someIdToDoStuff"}},[t._v("My text")]),n("div",{staticClass:"button-row"},[n("JnToggleButton",{attrs:{icon:"sort-numeric-up",action:t.handleOnClick,placement:"left",secondIcon:"sort-numeric-down-alt"}},[t._v("Toggle Text")]),n("JnToggleButton",{attrs:{icon:"user-plus",action:t.handleOnClick,placement:"right"}},[t._v("Toggle Text")])],1),n("h3",[t._v("Dropdown meny")]),n("DashboardTopMenu")],1)},Mt=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isActive},attrs:{role:"button"},on:{click:t.filter}},["left"===t.placement?n("fa-icon",{attrs:{icon:["fal",t.activeIcon]}}):t._e(),t._t("default"),"right"===t.placement?n("fa-icon",{attrs:{icon:["fal",t.icon]}}):t._e()],2)},Pt=[],At={name:"JnToggleButton",props:{icon:String,secondIcon:String,placement:String,action:Function},data:function(){return{isActive:!1,activeIcon:this.icon}},methods:{filter:function(){this.isActive=!this.isActive,this.isActive?this.activeIcon=this.secondIcon:this.activeIcon=this.icon}}},Nt=At,Rt=(n("e214"),Object(c["a"])(Nt,Lt,Pt,!1,null,"609396bc",null)),It=Rt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("JnDropDownBtn",{attrs:{text:"Ny Søker",options:t.dropdownOptions,icon:"user-plus"}}),n("JnDropDownBtn",{attrs:{text:"Last Ned",options:t.dropdownOptions}})],1)},Ht=[],Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn-drop dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[n("fa-icon",{attrs:{icon:["fal",t.icon]}}),t._v(" "+t._s(t.text)+" ")],1),n("div",{staticClass:"dropdown-menu"},t._l(t.options,(function(e,a){return n("a",{key:a,staticClass:"dropdown-item",attrs:{href:e.url}},[t._v(t._s(e.text))])})),0)])},Vt=[],qt={name:"JnDropDownBtn",props:{text:String,icon:String,options:Array}},Kt=qt,Wt=(n("24e0"),Object(c["a"])(Kt,Gt,Vt,!1,null,"4ce35479",null)),Ut=Wt.exports,Qt=[{text:"Inviter ny søker",url:"#"},{text:"Registrer ny søknad",url:"#"}],Xt={name:"DashboardTopMenu",components:{JnDropDownBtn:Ut},data:function(){return{dropdownOptions:Qt}}},Yt=Xt,Zt=(n("0d7a"),Object(c["a"])(Yt,zt,Ht,!1,null,"75a14131",null)),te=Zt.exports,ee={name:"ButtonDemo",components:{JnTextButton:vt,JnToggleButton:It,DashboardTopMenu:te},methods:{handleOnClick:function(){}}},ne=ee,ae=(n("7f57"),Object(c["a"])(ne,Ft,Mt,!1,null,"52d91098",null)),ie=ae.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"jn-card-mini-ctn-wrapper"},[n("JnCardMini",{attrs:{figure:5}}),n("JnCardMini",{attrs:{figure:5,info:"Lorem ipsum dolorLorem ipsumLorem ipsum"}}),n("JnCardMini",{attrs:{info:"hello"},scopedSlots:t._u([{key:"chart",fn:function(){return[n("div",[n("div",[n("JnPieChart",{attrs:{figures:t.pieData}}),n("JnLegend",{attrs:{figures:t.pieData,align:"vertical"}})],1)])]},proxy:!0}])}),n("JnCardMini",{attrs:{info:"Lorem ipsum"},scopedSlots:t._u([{key:"chart",fn:function(){return[n("div",[n("JnPieChart",{attrs:{figures:t.pieData2,height:"80%",donutHoleSize:.3}}),n("JnLegend",{attrs:{figures:t.pieData2}})],1)]},proxy:!0}])})],1),n("div",{staticStyle:{height:"800px"}},[n("JnPieChart",{attrs:{figures:t.pieData2}})],1),n("div",{staticClass:"pie-chart-wrapper"},[n("JnPieChart",{attrs:{figures:t.pieData2}}),n("JnPieChart",{attrs:{figures:t.pieData2,donutHoleSize:0,strokeColor:"#DDDDDD",strokeWidth:0}})],1),n("div",{staticStyle:{height:"300px"}},[n("div",[n("JnPieChart",{attrs:{figures:t.fluff,height:"80%"}}),n("JnLegend",{attrs:{figures:t.fluff,align:"horizontal"}})],1),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.shuffle}},[t._v("suffle")])]),n("div",[n("JnPieChart",{attrs:{figures:t.pieData2}}),n("JnLegend",{attrs:{figures:t.pieData2}})],1)])},oe=[],se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jn-card-mini-wrapper"},[t._t("chart"),t.figure?n("div",{staticClass:"jn-card-mini-content jn-card-mini-figure"},[t._v(t._s(t.figure))]):t._e(),t.info?n("div",{staticClass:"jn-card-mini-content jn-card-mini-info"},[t._v(t._s(t.info))]):t._e()],2)},le=[],ce=(n("a9e3"),{name:"JnCardMini",props:{figure:Number,info:String}}),ue=ce,de=(n("e01a"),Object(c["a"])(ue,se,le,!1,null,"20256aa0",null)),fe=de.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"pie-chart",attrs:{width:"100%",height:"100%"}})},pe=[],ge=(n("99af"),n("4160"),n("b64b"),n("ac1f"),n("466d"),n("159b"),n("5698")),he={name:"JnPieChart",props:{figures:Object,donutHoleSize:{type:Number,default:.64,validator:function(t){return t>=0&&t<=1}},strokeWidth:{type:Number,default:2},strokeColor:{type:String,default:"#FFFFFF",validator:function(t){return t.match(/^#[0-9A-F]{6}$/).length>0}}},methods:{showFigure:function(t){var e=t.data,n=e.key,a=e.value,i=this.$el.getElementsByTagName("text");i[0].textContent=a,i[1].textContent=n},hideFigure:function(){var t=this.$el.getElementsByTagName("text");t[0].textContent="",t[1].textContent=""},renderChart:function(){if(!(Object.keys(this.figures).length<=0)){var t=this.$el;t.childNodes.forEach((function(e){return t.removeChild(e)}));var e=$(this.$el).width(),n=$(this.$el).height(),a=.5*Math.min(e,n),i=Object.keys(this.figures).length>2?["#127DAC","#1D764F","#D41472","#44303C","#7AD296"]:["#1D754F","#D3F5DF"],r=ge["d"]().domain(this.figures).range(i),o=ge["e"](this.$el).attr("viewBox","0 0 ".concat(e," ").concat(n)).append("g").attr("transform","translate(".concat(e/2,",").concat(n/2,")")),s=ge["c"]().value((function(t){return t.value}))(ge["b"](this.figures)),l=ge["a"]().innerRadius(a*this.donutHoleSize).outerRadius(a);o.selectAll().data(s).enter().append("path").attr("fill",(function(t){return r(t.data.key)})).attr("d",l),this.strokeWidth>0&&o.selectAll("path").attr("stroke",this.strokeColor).style("stroke-width","".concat(this.strokeWidth,"px"));var c=parseInt(2*a*this.donutHoleSize);if(c>90){var u=.2*c,d=.1*c>14?.1*c:14;o.selectAll("path").on("mouseenter",this.showFigure).on("mouseleave",this.hideFigure),o.append("text").attr("text-anchor","middle").attr("y","-10").attr("style","font-size:".concat(u,"px")).text(""),o.append("text").attr("text-anchor","middle").attr("x","0").attr("y","".concat(.15*c)).attr("style","font-size:".concat(d,"px")).text("")}}}},mounted:function(){this.renderChart()},watch:{figures:function(){this.renderChart()}}},ve=he,be=Object(c["a"])(ve,me,pe,!1,null,null,null),_e=be.exports,Ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"vertical"===t.align?n("ul",t._l(t.figures,(function(e,a){return n("li",{key:a},[n("fa-icon",{style:{color:t.color(a)},attrs:{icon:["far","square"]}}),n("span",{staticClass:"ml-1"},[t._v(t._s(a)+": "+t._s(e))])],1)})),0):n("div",{staticClass:"inline-view"},t._l(t.figures,(function(e,a){return n("div",{key:a,staticClass:"mr-3"},[n("fa-icon",{style:{color:t.color(a)},attrs:{icon:["far","square"]}}),n("span",{staticClass:"ml-2"},[t._v(t._s(a)+": "+t._s(e))])],1)})),0)},ye=[],xe={name:"JnLegend",props:{figures:{type:Object,required:!0},align:{type:String,default:"vertical"}},data:function(){return{color:function(){},hexColors:[]}},methods:{renderLegend:function(){Object.keys(this.figures).length<=0||(this.hexColors=Object.keys(this.figures).length>2?["#127DAC","#1D764F","#D41472","#44303C","#7AD296"]:["#1D754F","#D3F5DF"],this.color=ge["d"]().domain(this.figures).range(this.hexColors))}},mounted:function(){this.renderLegend()},watch:{figures:function(){this.renderLegend()}}},ke=xe,je=(n("c39e"),Object(c["a"])(ke,Ce,ye,!1,null,"9e11bd48",null)),Te=je.exports,we={name:"JnCardMiniCtn",components:{JnCardMini:fe,JnPieChart:_e,JnLegend:Te},data:function(){return{pieData:{Aktuell:5,Ansatt:5,Intervju:4,"Min status":1,Oppdatert:1,Tilbud:3,Ubehandlet:31},pieData2:{Aktuell:1,Ansatt:5},fluff:{}}},mounted:function(){var t=this;setTimeout((function(){t.fluff={hei:1,hoo:0,boo:4}}),3e3)},methods:{shuffle:function(){this.fluff={hei:3,hoo:2,boo:1}}}},De=we,Je=(n("762c"),Object(c["a"])(De,re,oe,!1,null,"10a8a414",null)),Be=Je.exports,Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("JnTaskList",{attrs:{tasks:t.tasks,toggle:t.toggle}})},Oe=[],Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.tasks,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"task"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:[function(n){var a=e.completed,i=n.target,r=!!i.checked;if(Array.isArray(a)){var o=null,s=t._i(a,o);i.checked?s<0&&t.$set(e,"completed",a.concat([o])):s>-1&&t.$set(e,"completed",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(e,"completed",r)},function(n){return t.toggle(e)}]}}),n("label",{class:{completed:e.completed},attrs:{for:e.name}},[t._v(t._s(e.name))])])])})),0)])},$e=[],Fe={name:"JnTaskList",props:{tasks:Array,toggle:{type:Function}}},Me=Fe,Le=(n("890b"),Object(c["a"])(Me,Se,$e,!1,null,"4dd5da40",null)),Pe=Le.exports,Ae={name:"TaskListDemo",components:{JnTaskList:Pe},methods:{toggle:function(){alert("Halloi!")}},data:function(){return{tasks:[{id:1,name:"Eksempeloppgave 1 med litt lengere tekst(...)",completed:!0},{id:2,name:"Eksempeloppgave 2",completed:!1},{id:3,name:"Eksempeloppgave 3",completed:!0},{id:4,name:"Eksempeloppgave 4",completed:!1},{id:5,name:"Eksempeloppgave 5",completed:!0}]}}},Ne=Ae,Re=Object(c["a"])(Ne,Ee,Oe,!1,null,null,null),Ie=Re.exports,ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("JnBoard",{attrs:{boards:t.boards}})],1)},He=[],Ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[t._l(t.boards,(function(e){return n("JnBoardList",{key:e.name,attrs:{orderby:t.orderby,direction:t.direction,name:e.name,items:e.items}})})),n("JnBinaryDecision",{attrs:{text:"Kvalifisert?",decision:t.decision},on:{change:t.makeDecision}})],2)},Ve=[],qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boardlist"},[n("div",{staticClass:"head"},[t._v(t._s(t.name))]),t._l(t.orderedItems,(function(e){return n("JnJobseekerMiniCard",t._b({key:e.key},"JnJobseekerMiniCard",e,!1))}))],2)},Ke=[],We=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-wrapper"},[n("div",[n("p",{staticClass:"name"},[t._v(t._s(t.firstName)+" "+t._s(t.lastName))]),n("p",{staticClass:"title"},[t._v(t._s(t.title)+", "+t._s(t.age))])]),n("div",[n("div",{staticClass:"points"},[n("i",{staticClass:"icon"},[n("fa-icon",{attrs:{icon:["fas","bullseye"],size:"sm"}})],1),t._v(" "+t._s(t.points)+" poeng ")])])])},Ue=[],Qe={name:"JnJobseekerMiniCard",props:{firstName:String,lastName:String,title:String,points:Number,age:Number}},Xe=Qe,Ye=(n("a357"),Object(c["a"])(Xe,We,Ue,!1,null,"165591e1",null)),Ze=Ye.exports,tn=n("2ef0"),en=n.n(tn),nn={name:"JnBoardList",components:{JnJobseekerMiniCard:Ze},props:{name:String,items:Array,orderby:String,direction:String},computed:{orderedItems:function(){var t=this;return en.a.orderBy(t.items,t.orderby,t.direction)}}},an=nn,rn=(n("dc58"),Object(c["a"])(an,qe,Ke,!1,null,"f114bdae",null)),on=rn.exports,sn=function(t,e){var n=e._c;return n("div",{staticClass:"jn-binary-decision-wrapper"},[n("span",[e._v(e._s(e.props.text))]),n("div",[n("input",e._g({attrs:{type:"radio",id:"yes",value:"1",name:"decision"},domProps:{checked:1===e.decision}},e.listeners)),n("label",{attrs:{for:"yes"}},[n("span",{class:{"with-opacity":1!==e.props.decision}},[n("fa-icon",{attrs:{icon:["fas","thumbs-up"]}})],1),n("span",{staticClass:"ml-1"},[e._v("Ja")])])]),n("div",[n("input",e._g({attrs:{type:"radio",id:"no",value:"0",name:"decision"},domProps:{checked:0===e.decision}},e.listeners)),n("label",{attrs:{for:"no"}},[n("span",{class:{"with-opacity":0!==e.props.decision}},[n("fa-icon",{attrs:{icon:["fas","thumbs-down"]}})],1),n("span",{staticClass:"ml-1"},[e._v("Nei")])])])])},ln=[],cn={functional:!0,name:"JnBinaryDecision",props:{text:{type:String,required:!0},decision:{type:Number}}},un=cn,dn=(n("2f3c"),Object(c["a"])(un,sn,ln,!0,null,"5e54a84b",null)),fn=dn.exports,mn={name:"JnBoard",components:{JnBoardList:on,JnBinaryDecision:fn},data:function(){return{decision:null,orderby:void 0,direction:(void 0).ASCENDING}},props:{boards:Array},methods:{makeDecision:function(t){var e=t.srcElement.value;this.decision=Number(e)}}},pn=mn,gn=(n("5033"),Object(c["a"])(pn,Ge,Ve,!1,null,"329b3294",null)),hn=gn.exports,vn={name:"demoList",components:{JnBoard:hn},data:function(){return{boards:[{name:"Til vurdering",items:[{firstName:"Per-Oskar",lastName:"Helgesen",title:"Rådgiver",points:967,age:32},{firstName:"Gunnvor H.",lastName:"Mohaug",title:"Arbeidsledig",points:1003,age:31}]},{name:"Intervju",items:[{firstName:"Nils Carl Fredrik Berg",lastName:"Johansson",title:"Selger",points:990,age:27},{firstName:"June Larsen",lastName:"Granlund",title:"Butikkmedarbeider",points:850,age:27}]}]}}},bn=vn,_n=(n("1ef5"),Object(c["a"])(bn,ze,He,!1,null,"26382f96",null)),Cn=_n.exports,yn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Rating",{attrs:{size:20}}),n("div",{staticClass:"container"},[n("JnPickDateTime",{attrs:{action:t.tellTime,colorTheme:"green"}})],1)],1)},xn=[],kn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating"},[n("div",{staticClass:"stars",on:{mouseleave:function(e){return t.showCurrentRating(0)}}},[n("star-rating",{attrs:{"show-rating":!1,increment:.5,"star-size":t.size,"active-color":"#D41472"},on:{"current-rating":t.showCurrentRating,"rating-selected":t.setCurrentSelectedRating},model:{value:t.boundRating,callback:function(e){t.boundRating=e},expression:"boundRating"}}),n("p",[t._v(t._s(t.rating)+"("+t._s(t.avgRating)+")")])],1),n("button",{staticClass:"btn btn-tertiary",on:{click:t.resetCurrentSelectedRating}},[n("fa-icon",{attrs:{icon:["fal","eraser"]}}),t._v(" Nullstill rangering ")],1),n("p",[t._v(t._s(t.currentRating))])])},jn=[],Tn=n("c1da"),wn=n.n(Tn),Dn={name:"rating",components:{StarRating:wn.a},props:{size:Number},data:function(){return{rating:" ",currentRating:"Ingen rangering",currentSelectedRating:"Ingen rangering",boundRating:0,avgRating:0}},methods:{showCurrentRating:function(t){this.currentRating=0===t?this.currentSelectedRating:"Gi kandidaten: "+t},setCurrentSelectedRating:function(t){this.rating=t,this.rating>1?this.currentSelectedRating="Din rangering: "+t+" stjerner":this.currentSelectedRating="Din rangering: "+t+" stjerne"},resetCurrentSelectedRating:function(){this.currentRating="Ingen rangering",this.boundRating=0,this.rating=0},getCurrentRating:function(){return this.rating}}},Jn=Dn,Bn=(n("7f7d"),Object(c["a"])(Jn,kn,jn,!1,null,"592cd05f",null)),En=Bn.exports,On=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"datetime-container"},[n("label",{attrs:{for:"date"}},[n("p",[t._v(t._s(t.dateLabel))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectDate,expression:"selectDate"}],class:t.getColorTheme(this.colorTheme),attrs:{type:"date",name:"date"},domProps:{value:t.selectDate},on:{blur:t.handleOnBlur,input:function(e){e.target.composing||(t.selectDate=e.target.value)}}})]),n("label",{attrs:{for:"time"}},[n("p",[t._v(t._s(t.timeLabel))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectTime,expression:"selectTime"}],class:t.getColorTheme(this.colorTheme),attrs:{type:"time",name:"time"},domProps:{value:t.selectTime},on:{blur:t.handleOnBlur,input:function(e){e.target.composing||(t.selectTime=e.target.value)}}})])])},Sn=[],$n={name:"jnPickDateTime",props:{action:Function,colorTheme:String},data:function(){return{dateLabel:"Velg dato",timeLabel:"Velg tid",selectDate:"",selectTime:""}},methods:{handleOnBlur:function(){"date"===event.srcElement.name?this.dateLabel="Dato:":this.timeLabel="Tid:",this.updateComponents()},updateComponents:function(){var t={date:this.selectDate,time:this.selectTime};return this.action(t)},getColorTheme:function(t){switch(t){case"red":return"red";case"blue":return"blue";case"green":return"green";case"black":return"black"}}}},Fn=$n,Mn=(n("a949"),Object(c["a"])(Fn,On,Sn,!1,null,"612234d9",null)),Ln=Mn.exports,Pn={name:"AsessmentExample",components:{Rating:En,JnPickDateTime:Ln},methods:{tellTime:function(t){console.log(t)}}},An=Pn,Nn=(n("e2b2"),Object(c["a"])(An,yn,xn,!1,null,"3c1f34a8",null)),Rn=Nn.exports;window.$=m.a,window.Vue=a["a"],a["a"].use(i["a"]);var In=new i["a"]({base:"/jn-components",mode:"history",routes:[{path:"/horizontal",component:O},{path:"/dialog",component:U},{path:"/locale",component:nt},{path:"/card-container",component:yt},{path:"/lists",component:$t},{path:"/buttons",component:ie},{path:"/mini-card",component:Be},{path:"/tasklist",component:Ie},{path:"/board",component:Cn},{path:"/assessment",component:Rn}]});a["a"].use(p["a"]),_["c"].add(b["a"],h["k"],h["j"],h["d"],h["f"],h["b"],h["g"],v["a"],h["i"],h["h"],h["e"],b["c"],h["a"],h["c"],b["b"]),a["a"].component("fa-icon",g["a"]);var zn=new p["a"]({locale:"ja"});new a["a"]({i18n:zn,router:In,render:function(t){return t(d)}}).$mount("#app")},"572e":function(t,e,n){},"5a62":function(t,e,n){},"6a47":function(t,e,n){},"6b10":function(t,e,n){},"6e02":function(t,e,n){},"701a":function(t,e,n){"use strict";var a=n("0f26"),i=n.n(a);i.a},"762c":function(t,e,n){"use strict";var a=n("30b7"),i=n.n(a);i.a},"780e":function(t,e,n){"use strict";var a=n("f4a6"),i=n.n(a);i.a},"7f57":function(t,e,n){"use strict";var a=n("c6a7"),i=n.n(a);i.a},"7f7d":function(t,e,n){"use strict";var a=n("5a62"),i=n.n(a);i.a},8561:function(t,e,n){},"890b":function(t,e,n){"use strict";var a=n("e6b2"),i=n.n(a);i.a},"892c":function(t,e,n){"use strict";var a=n("2918"),i=n.n(a);i.a},"93be":function(t,e,n){"use strict";var a=n("079d"),i=n.n(a);i.a},9743:function(t,e,n){},"9a15":function(t,e,n){},"9e75":function(t,e,n){},a357:function(t,e,n){"use strict";var a=n("572e"),i=n.n(a);i.a},a949:function(t,e,n){"use strict";var a=n("fb76"),i=n.n(a);i.a},ab56:function(t,e,n){},af6d:function(t,e,n){"use strict";var a=n("e70f"),i=n.n(a);i.a},c39d:function(t,e,n){},c39e:function(t,e,n){"use strict";var a=n("9743"),i=n.n(a);i.a},c6a7:function(t,e,n){},cc81:function(t,e,n){},d32b:function(t,e,n){},dc58:function(t,e,n){"use strict";var a=n("8561"),i=n.n(a);i.a},e01a:function(t,e,n){"use strict";var a=n("2bbb"),i=n.n(a);i.a},e214:function(t,e,n){"use strict";var a=n("ab56"),i=n.n(a);i.a},e27d:function(t,e,n){},e2b2:function(t,e,n){"use strict";var a=n("e2c6"),i=n.n(a);i.a},e2c6:function(t,e,n){},e6b2:function(t,e,n){},e70f:function(t,e,n){},eb02:function(t,e,n){"use strict";var a=n("e27d"),i=n.n(a);i.a},f4a6:function(t,e,n){},fb76:function(t,e,n){}});
//# sourceMappingURL=app.d92c9335.js.map