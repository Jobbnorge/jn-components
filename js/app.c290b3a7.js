(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/jn-components/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0308":function(t,e,n){},"0321":function(t,e,n){"use strict";var o=n("517f"),a=n.n(o);a.a},"035c":function(t,e,n){"use strict";var o=n("888f"),a=n.n(o);a.a},"0422":function(t,e,n){"use strict";var o=n("10d5"),a=n.n(o);e["default"]=a.a},"079d":function(t,e,n){},"0d7a":function(t,e,n){"use strict";var o=n("c39d"),a=n.n(o);a.a},"0f26":function(t,e,n){},"10d5":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"modal":{"modalTitle":"Fancy english stuff"},"hello":"hello world!","fluff":"in english"},"ja":{"modal":{"modalTitle":"Fancy japanese stuff"},"hello":"こんにちは、世界！","fluff":"in japanese"}}'),delete t.options._Ctor}},1193:function(t,e,n){"use strict";var o=n("986d"),a=n.n(o);a.a},"158a":function(t,e,n){},"17bd":function(t,e,n){},"19eb":function(t,e,n){},"219f":function(t,e,n){},"2bbb":function(t,e,n){},"2db2":function(t,e,n){"use strict";var o=n("b2ba"),a=n.n(o);a.a},"30b7":function(t,e,n){},"3e53":function(t,e,n){"use strict";var o=n("9a15"),a=n.n(o);a.a},"41b4":function(t,e){},"517f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("div",{staticClass:"left-col"},[n("nav",[n("ul",[n("router-link",{attrs:{to:"/card-container",tag:"li"}},[t._v("Card container")]),n("router-link",{attrs:{to:"/horizontal",tag:"li"}},[t._v("Horizontal cards")]),n("router-link",{attrs:{to:"/dialog",tag:"li"}},[t._v("Dialogboks")]),n("router-link",{attrs:{to:"/locale",tag:"li"}},[t._v("Locale")]),n("router-link",{attrs:{to:"/lists",tag:"li"}},[t._v("Lists")]),n("router-link",{attrs:{to:"/buttons",tag:"li"}},[t._v("Buttons")]),n("router-link",{attrs:{to:"/mini-card",tag:"li"}},[t._v("Mini card")]),n("router-link",{attrs:{to:"/tasklist",tag:"li"}},[t._v("TaskList")]),n("router-link",{attrs:{to:"/assessment",tag:"li"}},[t._v("Vurdering")])],1)])]),n("div",{staticClass:"right-col"},[n("h1",{staticClass:"mb20"},[t._v("Jobbnorge Vue-bibliotek")]),n("router-view")],1),n("hr")])},r=[],s={name:"App"},l=s,c=(n("aec1"),n("2877")),u=Object(c["a"])(l,i,r,!1,null,"9c13546e",null),d=u.exports,f=n("1157"),p=n.n(f),m=(n("4989"),n("ab8b"),n("6b10"),n("cc81"),n("a925")),h=n("ad3d"),b=n("584e"),g=n("e018"),v=n("ecee"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-hor-cards"},t._l(t.cards,(function(t){return n("JnCardHorizontal",{key:t.title,attrs:{mainFrameTitle:t.mainFrameTitle,colorTheme:t.colorTheme,secondFrameTitle:t.secondFrameTitle,secondFrameTopText:t.secondFrameTopText,icon:t.icon}})})),1)},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jn-card-hor"},[n("div",{staticClass:"frame main-frame",class:t.GetBackground(this.colorTheme,!0)},[null==t.icon?n("h1",[t._v(t._s(t.mainFrameTitle))]):t._e(),n("h1",[n("fa-icon",{attrs:{icon:["fal",this.icon]}})],1)]),n("div",{staticClass:"frame second-frame",class:t.GetBackground(this.colorTheme,!1)},[n("h5",{staticClass:"txt-black"},[t._v(t._s(t.secondFrameTitle))]),n("span",{staticClass:"top-right-text",class:t.GetTextColor(this.colorTheme)},[t._v(t._s(t.secondFrameTopText))])])])},x=[],k={name:"JnCardHorizontal",props:{mainFrameTitle:String,secondFrameTitle:String,secondFrameTopText:String,colorTheme:String,icon:String},methods:{GetBackground:function(t,e){switch("black"==t&&console.log(this.icon),t){case"red":return e?"bg-red":"bg-red-secondary";case"blue":return e?"bg-blue":"bg-blue-secondary";case"green":return e?"bg-green":"bg-green-secondary";case"black":return e?"bg-black":"bg-black-secondary"}},GetTextColor:function(t){switch(t){case"red":return"txt-red";case"blue":return"txt-blue";case"green":return"txt-green";case"black":return"txt-black"}}}},j=k,T=(n("93be"),Object(c["a"])(j,y,x,!1,null,"2047b197",null)),D=T.exports,w={name:"HorizontalCards",components:{JnCardHorizontal:D},data:function(){return{cards:[{mainFrameTitle:"920",colorTheme:"blue",secondFrameTitle:"Gjennomsnitt screeningscore",secondFrameTopText:"av 1200 mulige"},{mainFrameTitle:"22%",colorTheme:"black",secondFrameTitle:"Kvalifiserte",secondFrameTopText:""},{mainFrameTitle:"92",colorTheme:"red",secondFrameTitle:"Nye søkere",secondFrameTopText:"200 søkere totalt"},{icon:"comments",colorTheme:"green",secondFrameTitle:"Forespørsler",secondFrameTopText:"Krever handling"}]}}},J=w,B=(n("3e53"),Object(c["a"])(J,C,_,!1,null,"0e0b4bc3",null)),O=B.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openInfoModal}},[t._v("Info-Modal")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openRichInfoModal}},[t._v("Rich info Modal")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openConfirmModal}},[t._v("Confirm-Modal")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.openFluffModal}},[t._v("Use component in body")]),t.isModalVisible?n("JnDialogComponent",t._b({on:{resolveModal:t.resolveModal,rejectModal:t.rejectModal},scopedSlots:t._u([{key:"header",fn:function(){return[n("p",[t._v("I am the header")])]},proxy:!0},{key:"body",fn:function(){return[n("JnDropDownBtn",{attrs:{text:t.selected,type:"event",options:[{text:"hello"},{text:"hello 2"}]},on:{itemClicked:t.itemClicked}})]},proxy:!0}],null,!1,2286120959)},"JnDialogComponent",t.fluffData,!1)):t._e()],1)},M=[],S=(n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("5530")),F=n("d4ec"),P=n("bee2"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"},on:{"after-leave":function(e){return t.$emit("modalClosed")}}},[t.displayModal?n("div",{staticClass:"simple-modal-backdrop"},[n("div",{staticClass:"simple-modal",attrs:{id:t.modalId,role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"header"},[t._t("header",[t.modalTitle?n("h5",{attrs:{id:"jnDialogModalLabel"}},[t._v(t._s(this.modalTitle))]):t._e()])],2),n("section",{staticClass:"body"},[t._t("body",[t._v(t._s(this.modalBody))])],2),n("footer",{staticClass:"footer"},[t.rejectButton.visible?n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.rejectModal}},[t._v(t._s(this.rejectButton.text))]):t._e(),t.resolveButton.visible?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.resolveModal}},[t._v(t._s(this.resolveButton.text))]):t._e()])])]):t._e()])},A=[],I={name:"JnDialogComponent",props:{modalId:{type:String,default:"jnDialogModal"},modalTitle:String,modalBody:String,rejectButton:{visible:Boolean,text:String},resolveButton:{visible:Boolean,text:String}},data:function(){return{displayModal:!1}},mounted:function(){this.displayModal=!0},methods:{resolveModal:function(){this.displayModal=!1,this.$emit("resolveModal")},rejectModal:function(){this.displayModal=!1,this.$emit("rejectModal")},setOptions:function(t){Object.assign(this.$data,t)}}},N=I,z=(n("0321"),Object(c["a"])(N,L,A,!1,null,"44a332d7",null)),V=z.exports,H={modalTitle:"Vennligst bekreft ditt valg",modalBody:"Du må bekrefte handlingen for å kunne fortsette.",rejectButton:{visible:!0,text:"Avbryt"},resolveButton:{visible:!0,text:"Bekreft"}},G={modalTitle:"Modal info tittel.",modalBody:"Her står det ennå mer detaljer som kunne har vært interessant til brukeren.",rejectButton:{visible:!1},resolveButton:{visible:!0,text:"Greit"}},R=function(){function t(){Object(F["a"])(this,t),this.jnDialogCtn=null,this.jnDialogComp=null}return Object(P["a"])(t,[{key:"mountVueComponent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.header,o=e.body;this.jnDialogCtn||(this.jnDialogCtn=document.createElement("div"),this.jnDialogCtn.id="jnDialogCtn",document.getElementsByTagName("body")[0].appendChild(this.jnDialogCtn));var a=Vue.component(V.name,V);this.jnDialogComp=new a({propsData:t}),n&&(this.jnDialogComp.$slots.header=this.jnDialogComp.$createElement(n.node,n.data)),o&&(this.jnDialogComp.$slots.body=this.jnDialogComp.$createElement(o.node,o.data)),this.jnDialogComp.$mount(),this.jnDialogCtn.appendChild(this.jnDialogComp.$el)}},{key:"setModalProps",value:function(t){Object.assign(this.jnDialogComp,t)}},{key:"confirm",value:function(t){var e=this;this.mountVueComponent(Object(S["a"])(Object(S["a"])({},H),t)),this.setModalProps(Object(S["a"])(Object(S["a"])({},H),t));var n=this;return this.jnDialogComp.$on("modalClosed",(function(){n.unmountJnDialog()})),new Promise((function(t,n){e.jnDialogComp.$on("resolveModal",(function(){t("jn dialog modal resolved")})),e.jnDialogComp.$on("rejectModal",(function(){n("jn dialog modal rejected")}))}))}},{key:"info",value:function(t){var e=this;this.mountVueComponent(Object(S["a"])(Object(S["a"])({},G),t)),this.setModalProps(Object(S["a"])(Object(S["a"])({},G),t));var n=this;return this.jnDialogComp.$on("modalClosed",(function(){n.unmountJnDialog()})),new Promise((function(t){e.jnDialogComp.$on("resolveModal",(function(){t("info read")}))}))}},{key:"richInfo",value:function(t,e){var n=this;this.mountVueComponent(Object(S["a"])(Object(S["a"])({},G),t),e),this.setModalProps(Object(S["a"])(Object(S["a"])({},G),t));var o=this;return this.jnDialogComp.$on("modalClosed",(function(){o.unmountJnDialog()})),new Promise((function(t){n.jnDialogComp.$on("resolveModal",(function(){t("rich info read")}))}))}},{key:"unmountJnDialog",value:function(){this.jnDialogCtn.removeChild(this.jnDialogCtn.firstChild),this.jnDialogComp.$children.forEach((function(t){return t.$destroy()})),this.jnDialogComp.$destroy()}}]),t}(),K=new R,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"datetime-container"},[n("label",{attrs:{for:"date"}},[n("p",[t._v(t._s(t.dateLabel))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectDate,expression:"selectDate"}],class:t.getColorTheme(this.colorTheme),attrs:{type:"date",name:"date"},domProps:{value:t.selectDate},on:{blur:t.handleOnChange,input:function(e){e.target.composing||(t.selectDate=e.target.value)}}})]),n("label",{attrs:{for:"time"}},[n("p",[t._v(t._s(t.timeLabel))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectTime,expression:"selectTime"}],class:t.getColorTheme(this.colorTheme),attrs:{type:"time",name:"time"},domProps:{value:t.selectTime},on:{blur:t.handleOnChange,input:function(e){e.target.composing||(t.selectTime=e.target.value)}}})])])},U=[],q={name:"jnPickDateTime",props:{colorTheme:String},data:function(){return{dateLabel:"Velg dato",timeLabel:"Velg tid",selectDate:"",selectTime:""}},methods:{handleOnChange:function(){"date"===event.srcElement.name?this.dateLabel="Dato:":this.timeLabel="Tid:";var t={date:this.selectDate,time:this.selectTime};this.$emit("inputChanged",t)},getColorTheme:function(t){switch(t){case"red":return"red";case"blue":return"blue";case"green":return"green";case"black":return"black"}}}},Q=q,X=(n("e0d3"),Object(c["a"])(Q,W,U,!1,null,"bf9160f2",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn-drop dropdown-toggle",attrs:{"data-toggle":"dropdown",id:"dropdownMenuButton","aria-haspopup":"true","aria-expanded":"false"}},[t.icon?n("fa-icon",{attrs:{icon:["fal",t.icon]}}):t._e(),t._v(" "+t._s(t.text)+" ")],1),n("div",{staticClass:"dropdown-menu"},["event"===t.type?n("ul",t._l(t.options,(function(e,o){return n("li",{key:o,staticClass:"dropdown-item",on:{click:function(n){return t.$emit("itemClicked",e)}}},[t._v(" "+t._s(e.text)+" ")])})),0):t._l(t.options,(function(e,o){return n("a",{key:o,staticClass:"dropdown-item",attrs:{href:e.url}},[t._v(t._s(e.text))])}))],2)])},tt=[],et={name:"JnDropDownBtn",props:{text:String,icon:String,type:String,options:Array}},nt=et,ot=(n("035c"),Object(c["a"])(nt,Z,tt,!1,null,"8a70236c",null)),at=ot.exports,it={name:"DialogExample",components:{JnDialogComponent:V,JnDropDownBtn:at},data:function(){return{fluffData:{modalId:"fluffModal",display:!1,modalBody:"fluff",modalTitle:"",size:"large",rejectButton:{visible:!0,text:"Avbryt"},resolveButton:{visible:!0,text:"Fluff OK"}},isModalVisible:!1,selected:"Velg noe"}},methods:{openInfoModal:function(){K.info({modalTitle:"Jeg er en info modal"})},openRichInfoModal:function(){K.richInfo({modalTitle:"I am even richer"},{header:{node:"h1",data:{domProps:{innerHTML:"blue",className:"hello-class"}}},body:{node:Y,data:{props:{colorTheme:"red"},domProps:{className:"fluff-class"}}}})},openConfirmModal:function(){K.confirm().then((function(t){return console.info(t)})).catch((function(t){return console.warn(t)}))},openFluffModal:function(){this.isModalVisible=!0},resolveModal:function(){this.isModalVisible=!1},rejectModal:function(){this.isModalVisible=!1},itemClicked:function(t){this.selected=t.text}}},rt=it,st=(n("8e99"),Object(c["a"])(rt,E,M,!1,null,"6d0f3595",null)),lt=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{attrs:{for:"locale"}},[t._v("locale")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.locale,expression:"locale"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.locale=e.target.multiple?n:n[0]}}},[n("option",[t._v("en")]),n("option",[t._v("ja")])]),n("p",[t._v("message: "+t._s(t.$t("hello")))])])},ut=[],dt={name:"LocaleDemo",data:function(){return this.$root.$i18n.locale="en",{locale:"en"}},watch:{locale:function(t){this.$root.$i18n.locale=t}}},ft=dt,pt=n("0422"),mt=Object(c["a"])(ft,ct,ut,!1,null,null,null);"function"===typeof pt["default"]&&Object(pt["default"])(mt);var ht=mt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"350px"}},[n("JnCard",{attrs:{title:"To",subtitle:"Kortet viser ikke tittel fordi den ikke tilfredstiller kriteriene",contentPlaceholder:t.cardOpt.contentPlaceholder},on:{buttonClick:t.jnCardButtonClicked},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("I'm a description text coming from a different context. Ain't that cool or what?")])]},proxy:!0},{key:"button",fn:function(){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.anotherHandler}},[t._v("I'm from bootstrap")])]},proxy:!0}])})],1),n("div",{staticClass:"wrapper"},t._l([1,2,3,4,5],(function(e){return n("JnCard",{key:e,attrs:{title:t.cardOpt.title,subtitle:t.cardOpt.subtitle},on:{buttonClick:t.jnCardButtonClicked},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",[n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}}),n("div",{staticStyle:{height:"100px",border:"1px solid grey"}})])]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Handling")])]},proxy:!0}],null,!0)})})),1)])},gt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card jn-card"},[n("div",{staticClass:"wrapper card-body"},[t.title.length>2?n("h2",{staticClass:"jn-card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?n("p",{staticClass:"jn-card-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),n("div",[t._t("content",[t.contentPlaceholder?n("img",{staticClass:"card-img mt-2 mb-2",attrs:{src:t.contentPlaceholder.imgPath,alt:t.contentPlaceholder.imgAlt}}):t._e()])],2),t._t("description"),n("div",{staticClass:"wrapper"},[t._t("button")],2)],2)])},Ct=[],_t=function t(e,n){Object(F["a"])(this,t),this.imgPath=e,this.imgAlt=n},yt={name:"JnCard",props:{title:String,subtitle:String,contentPlaceholder:_t}},xt=yt,kt=(n("701a"),Object(c["a"])(xt,vt,Ct,!1,null,"f9867236",null)),jt=kt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button",attrs:{role:"button",href:t.url,id:t.id}},[t._t("default"),t.icon?n("fa-icon",{attrs:{icon:["fal",t.icon]}}):n("fa-icon",{attrs:{icon:["fal","chevron-right"]}})],2)},Dt=[],wt={name:"TextButton",props:{url:String,id:String,icon:String}},Jt=wt,Bt=(n("6cc8"),n("41b4")),Ot=n.n(Bt),Et=Object(c["a"])(Jt,Tt,Dt,!1,null,"538492cc",null);"function"===typeof Ot.a&&Ot()(Et);var Mt=Et.exports,$t={name:"JnCardCtn",components:{JnCard:jt,JnTextButton:Mt},data:function(){return{cardOpt:{title:"Lorem ipsum dolor",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex?",contentPlaceholder:new _t("hamperokken.jpg","hamperokken alt text")}}},methods:{jnCardButtonClicked:function(t){console.info(t)},anotherHandler:function(t){console.info(t)}}},St=$t,Ft=(n("780e"),Object(c["a"])(St,bt,gt,!1,null,"9079362e",null)),Pt=Ft.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("JnCard",{attrs:{title:"Annonse"},scopedSlots:t._u([{key:"content",fn:function(){return[n("ul",{staticClass:"no-padding-ul"},t._l(t.list1,(function(t){return n("JnListElement",{key:t.id,attrs:{icon:"file-alt",title:t.title,secondaryText:t.secondaryText,isExternal:t.isExternal,url:t.url,borderBetweenElements:t.borderBetweenElements,navigable:t.navigable}})})),1)]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Gå til annonser")])]},proxy:!0}])}),n("JnCard",{attrs:{title:"Dokumenter"},scopedSlots:t._u([{key:"content",fn:function(){return[n("ul",{staticClass:"no-padding-ul"},t._l(t.list2,(function(t){return n("JnListElement",{key:t.id,attrs:{icon:"user-secret",title:t.title,secondaryText:t.secondaryText,isExternal:t.isExternal,url:t.url,borderBetweenElements:t.borderBetweenElements,navigable:t.navigable}})})),1)]},proxy:!0},{key:"button",fn:function(){return[n("JnTextButton",[t._v("Gå til dokumenter")])]},proxy:!0}])})],1)},At=[],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"grid-wrapper",class:{borderBetween:t.borderBetweenElements,grow:t.navigable},on:{click:function(e){t.navigable&&t.navigate()}}},[n("i",{staticClass:"icon"},[n("fa-icon",{attrs:{icon:["fal",t.icon],size:"lg"}})],1),n("div",[t.secondaryText?n("p",{staticClass:"secondary-text"},[t._v(t._s(t.secondaryText))]):t._e(),n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),t.navigable?n("div",[t.isExternal?n("i",{staticClass:"center"},[n("fa-icon",{staticClass:"icon",attrs:{icon:["fal","external-link"],size:"lg"}})],1):n("i",{staticClass:"center"},[n("fa-icon",{staticClass:"icon",attrs:{icon:["fal","chevron-right"],size:"lg"}})],1)]):t._e()])},Nt=[],zt={name:"JnList",props:{icon:String,title:String,secondaryText:String,isExternal:Boolean,url:String,borderBetweenElements:Boolean,navigable:Boolean},methods:{navigate:function(){window.location.href=this.url}}},Vt=zt,Ht=(n("2db2"),n("c530")),Gt=n.n(Ht),Rt=Object(c["a"])(Vt,It,Nt,!1,null,"77f15bc6",null);"function"===typeof Gt.a&&Gt()(Rt);var Kt=Rt.exports,Wt={name:"demoList",components:{JnListElement:Kt,JnCard:jt,JnTextButton:Mt},data:function(){return{list1:[{id:1,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Publisert - 10 dager igjen",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0},{id:2,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Utgått - 2 dager siden",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0},{id:3,isExternal:!0,title:"Jobbnorge.no",secondaryText:"Publisert - 5 dager igjen",url:"https://jobbnorge.no",borderBetweenElements:!0,navigable:!0}],list2:[{id:1,isExternal:!1,title:"Innstillingsdokument (standard)",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0},{id:2,isExternal:!1,title:"Avslagsbrev",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0},{id:3,isExternal:!1,title:"Tilbudsbrev",url:"https://jobbnorge.no",borderBetweenElements:!1,navigable:!0}]}}},Ut=Wt,qt=(n("1193"),Object(c["a"])(Ut,Lt,At,!1,null,"73bfb8da",null)),Qt=qt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper pt20"},[n("h3",[t._v("Buttons")]),n("JnTextButton",{attrs:{url:"http://nrk.no",id:"someIdToDoStuff"}},[t._v("My text")]),n("div",{staticClass:"button-row"},[n("JnToggleButton",{attrs:{icon:"sort-numeric-up",placement:"left",secondIcon:"sort-numeric-down-alt"}},[t._v("Toggle Text")]),n("JnToggleButton",{attrs:{icon:"user-plus",placement:"right"}},[t._v("Toggle Text")])],1),n("h3",[t._v("Dropdown meny")]),n("DashboardTopMenu"),n("JnDropDownBtn",{attrs:{text:"No anchor-tag",type:"event",options:[{text:"hello"},{text:"hello 2"}]},on:{itemClicked:t.itemClicked}}),n("JnDropDownBtn",{attrs:{text:"With anchor tag",options:[{text:"NRK",url:"http://www.nrk.no"},{text:"VG",url:"http://www.vg.no"}]}})],1)},Yt=[],Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isActive},attrs:{role:"button"},on:{click:t.filter}},["left"===t.placement?n("fa-icon",{attrs:{icon:["fal",t.activeIcon]}}):t._e(),t._t("default"),"right"===t.placement?n("fa-icon",{attrs:{icon:["fal",t.icon]}}):t._e()],2)},te=[],ee={name:"JnToggleButton",props:{icon:String,secondIcon:String,placement:String,action:Function},data:function(){return{isActive:!1,activeIcon:this.icon}},methods:{filter:function(){this.isActive=!this.isActive,this.isActive?this.activeIcon=this.secondIcon:this.activeIcon=this.icon}}},ne=ee,oe=(n("e214"),Object(c["a"])(ne,Zt,te,!1,null,"609396bc",null)),ae=oe.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("JnDropDownBtn",{attrs:{text:"Ny Søker",options:t.dropdownOptions,icon:"user-plus"}}),n("JnDropDownBtn",{attrs:{text:"Last Ned",options:t.dropdownOptions}})],1)},re=[],se=[{text:"Inviter ny søker",url:"#"},{text:"Registrer ny søknad",url:"#"}],le={name:"DashboardTopMenu",components:{JnDropDownBtn:at},data:function(){return{dropdownOptions:se}}},ce=le,ue=(n("0d7a"),Object(c["a"])(ce,ie,re,!1,null,"75a14131",null)),de=ue.exports,fe={name:"ButtonDemo",components:{JnTextButton:Mt,JnToggleButton:ae,DashboardTopMenu:de,JnDropDownBtn:at},data:function(){return{item:{}}},methods:{itemClicked:function(t){this.item=t}}},pe=fe,me=(n("f74d"),Object(c["a"])(pe,Xt,Yt,!1,null,"4a45461f",null)),he=me.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"jn-card-mini-ctn-wrapper"},[n("JnCardMini",{attrs:{figure:5}}),n("JnCardMini",{attrs:{figure:5,info:"Lorem ipsum dolorLorem ipsumLorem ipsum"}}),n("JnCardMini",{attrs:{info:"hello"},scopedSlots:t._u([{key:"chart",fn:function(){return[n("div",[n("div",[n("JnPieChart",{attrs:{figures:t.pieData}}),n("JnLegend",{attrs:{figures:t.pieData,align:"vertical"}})],1)])]},proxy:!0}])}),n("JnCardMini",{attrs:{info:"Lorem ipsum"},scopedSlots:t._u([{key:"chart",fn:function(){return[n("div",[n("JnPieChart",{attrs:{figures:t.pieData2,height:"80%",donutHoleSize:.3}}),n("JnLegend",{attrs:{figures:t.pieData2}})],1)]},proxy:!0}])})],1),n("div",{staticStyle:{height:"800px"}},[n("JnPieChart",{attrs:{figures:t.pieData2}})],1),n("div",{staticClass:"pie-chart-wrapper"},[n("JnPieChart",{attrs:{figures:t.pieData2}}),n("JnPieChart",{attrs:{figures:t.pieData2,donutHoleSize:0,strokeColor:"#DDDDDD",strokeWidth:0}})],1),n("div",{staticStyle:{height:"300px"}},[n("div",[n("JnPieChart",{attrs:{figures:t.fluff,height:"80%"}}),n("JnLegend",{attrs:{figures:t.fluff,align:"horizontal"}})],1),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.shuffle}},[t._v("suffle")])]),n("div",[n("JnPieChart",{attrs:{figures:t.pieData2}}),n("JnLegend",{attrs:{figures:t.pieData2}})],1)])},ge=[],ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jn-card-mini-wrapper"},[t._t("chart"),t.figure?n("div",{staticClass:"jn-card-mini-content jn-card-mini-figure"},[t._v(t._s(t.figure))]):t._e(),t.info?n("div",{staticClass:"jn-card-mini-content jn-card-mini-info"},[t._v(t._s(t.info))]):t._e()],2)},Ce=[],_e=(n("a9e3"),{name:"JnCardMini",props:{figure:Number,info:String}}),ye=_e,xe=(n("e01a"),Object(c["a"])(ye,ve,Ce,!1,null,"20256aa0",null)),ke=xe.exports,je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"pie-chart",attrs:{width:"100%",height:"100%"}})},Te=[],De=(n("99af"),n("b64b"),n("ac1f"),n("466d"),n("5698")),we={name:"JnPieChart",props:{figures:Object,donutHoleSize:{type:Number,default:.64,validator:function(t){return t>=0&&t<=1}},strokeWidth:{type:Number,default:2},strokeColor:{type:String,default:"#FFFFFF",validator:function(t){return t.match(/^#[0-9A-F]{6}$/).length>0}}},methods:{showFigure:function(t){var e=t.data,n=e.key,o=e.value,a=this.$el.getElementsByTagName("text");a[0].textContent=o,a[1].textContent=n},hideFigure:function(){var t=this.$el.getElementsByTagName("text");t[0].textContent="",t[1].textContent=""},renderChart:function(){if(!(Object.keys(this.figures).length<=0)){var t=this.$el;t.childNodes.forEach((function(e){return t.removeChild(e)}));var e=$(this.$el).width(),n=$(this.$el).height(),o=.5*Math.min(e,n),a=Object.keys(this.figures).length>2?["#127DAC","#1D764F","#D41472","#44303C","#7AD296"]:["#1D754F","#D3F5DF"],i=De["d"]().domain(this.figures).range(a),r=De["e"](this.$el).attr("viewBox","0 0 ".concat(e," ").concat(n)).append("g").attr("transform","translate(".concat(e/2,",").concat(n/2,")")),s=De["c"]().value((function(t){return t.value}))(De["b"](this.figures)),l=De["a"]().innerRadius(o*this.donutHoleSize).outerRadius(o);r.selectAll().data(s).enter().append("path").attr("fill",(function(t){return i(t.data.key)})).attr("d",l),this.strokeWidth>0&&r.selectAll("path").attr("stroke",this.strokeColor).style("stroke-width","".concat(this.strokeWidth,"px"));var c=parseInt(2*o*this.donutHoleSize);if(c>90){var u=.2*c,d=.1*c>14?.1*c:14;r.selectAll("path").on("mouseenter",this.showFigure).on("mouseleave",this.hideFigure),r.append("text").attr("text-anchor","middle").attr("y","-10").attr("style","font-size:".concat(u,"px")).text(""),r.append("text").attr("text-anchor","middle").attr("x","0").attr("y","".concat(.15*c)).attr("style","font-size:".concat(d,"px")).text("")}}}},mounted:function(){this.renderChart()},watch:{figures:function(){this.renderChart()}}},Je=we,Be=Object(c["a"])(Je,je,Te,!1,null,null,null),Oe=Be.exports,Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"vertical"===t.align?n("ul",t._l(t.figures,(function(e,o){return n("li",{key:o},[n("fa-icon",{style:{color:t.color(o)},attrs:{icon:["fas","circle"]}}),n("span",{staticClass:"ml-1"},[t._v(t._s(o)+": "+t._s(e))])],1)})),0):n("div",{staticClass:"inline-view"},t._l(t.figures,(function(e,o){return n("div",{key:o,staticClass:"mr-3"},[n("fa-icon",{style:{color:t.color(o)},attrs:{icon:["fas","circle"]}}),n("span",{staticClass:"ml-2"},[t._v(t._s(o)+": "+t._s(e))])],1)})),0)},Me=[],$e={name:"JnLegend",props:{figures:{type:Object,required:!0},align:{type:String,default:"vertical"}},data:function(){return{color:function(){},hexColors:[]}},methods:{renderLegend:function(){Object.keys(this.figures).length<=0||(this.hexColors=Object.keys(this.figures).length>2?["#127DAC","#1D764F","#D41472","#44303C","#7AD296"]:["#1D754F","#D3F5DF"],this.color=De["d"]().domain(this.figures).range(this.hexColors))}},mounted:function(){this.renderLegend()},watch:{figures:function(){this.renderLegend()}}},Se=$e,Fe=(n("9dac"),Object(c["a"])(Se,Ee,Me,!1,null,"d59a5648",null)),Pe=Fe.exports,Le={name:"JnCardMiniCtn",components:{JnCardMini:ke,JnPieChart:Oe,JnLegend:Pe},data:function(){return{pieData:{Aktuell:5,Ansatt:5,Intervju:4,"Min status":1,Oppdatert:1,Tilbud:3,Ubehandlet:31},pieData2:{Aktuell:1,Ansatt:5},fluff:{}}},mounted:function(){var t=this;setTimeout((function(){t.fluff={hei:1,hoo:0,boo:4}}),3e3)},methods:{shuffle:function(){this.fluff={hei:3,hoo:2,boo:1}}}},Ae=Le,Ie=(n("762c"),Object(c["a"])(Ae,be,ge,!1,null,"10a8a414",null)),Ne=Ie.exports,ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("JnTaskList",{attrs:{tasks:t.tasks,toggle:t.toggle}})},Ve=[],He=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.tasks,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"task"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:[function(n){var o=e.completed,a=n.target,i=!!a.checked;if(Array.isArray(o)){var r=null,s=t._i(o,r);a.checked?s<0&&t.$set(e,"completed",o.concat([r])):s>-1&&t.$set(e,"completed",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(e,"completed",i)},function(n){return t.toggle(e)}]}}),n("label",{class:{completed:e.completed},attrs:{for:e.name}},[t._v(t._s(e.name))])])])})),0)])},Ge=[],Re={name:"JnTaskList",props:{tasks:Array,toggle:{type:Function}}},Ke=Re,We=(n("890b"),Object(c["a"])(Ke,He,Ge,!1,null,"4dd5da40",null)),Ue=We.exports,qe={name:"TaskListDemo",components:{JnTaskList:Ue},methods:{toggle:function(){alert("Halloi!")}},data:function(){return{tasks:[{id:1,name:"Eksempeloppgave 1 med litt lengere tekst(...)",completed:!0},{id:2,name:"Eksempeloppgave 2",completed:!1},{id:3,name:"Eksempeloppgave 3",completed:!0},{id:4,name:"Eksempeloppgave 4",completed:!1},{id:5,name:"Eksempeloppgave 5",completed:!0}]}}},Qe=qe,Xe=Object(c["a"])(Qe,ze,Ve,!1,null,null,null),Ye=Xe.exports,Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("JnPickDateTime",{attrs:{colorTheme:"green"},on:{inputChanged:t.inputChanged}})],1),n("JnCounter",{attrs:{startAt:20,max:20,min:1}})],1)},tn=[],en=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter"},[n("button",{staticClass:"btn pad darken-hover animate",attrs:{type:"button"},on:{click:t.decrement}},[n("fa-icon",{attrs:{icon:["fal","chevron-up"],size:"4x"}})],1),n("button",{staticClass:"text-xxl btn pad darken-hover animate",attrs:{type:"button"},on:{click:t.openModal}},[t._v(t._s(t.showNumber))]),n("button",{staticClass:"btn pad darken-hover animate",attrs:{type:"button"},on:{click:t.increment}},[n("fa-icon",{attrs:{icon:["fal","chevron-down"],size:"4x"}})],1)])},nn=[],on={name:"JnCounter",props:{startAt:Number,max:Number,min:Number,step:Number,message:String},data:function(){return{counter:0,showNumber:"-",incrementBy:1,down:"decrement"}},created:function(){this.counter=this.startAt,this.step&&(this.incrementBy=this.step)},methods:{increment:function(){this.counter<this.max&&(this.counter+=this.incrementBy),this.showNumber=this.counter},decrement:function(){this.counter>this.min&&(this.counter-=this.incrementBy),this.showNumber=this.counter},openModal:function(){console.log("modal open")}}},an=on,rn=(n("babd"),Object(c["a"])(an,en,nn,!1,null,"6858737b",null)),sn=rn.exports,ln={name:"AsessmentExample",components:{JnPickDateTime:Y,JnCounter:sn},data:function(){return{time:{}}},methods:{tellTime:function(t){this.time=t},inputBlur:function(t){console.info(t)}}},cn=ln,un=(n("b8e3"),Object(c["a"])(cn,Ze,tn,!1,null,"7001c152",null)),dn=un.exports;window.$=p.a,window.Vue=o["a"],o["a"].use(a["a"]);var fn=new a["a"]({base:"/jn-components",mode:"history",routes:[{path:"/horizontal",component:O},{path:"/dialog",component:lt},{path:"/locale",component:ht},{path:"/card-container",component:Pt},{path:"/lists",component:Qt},{path:"/buttons",component:he},{path:"/mini-card",component:Ne},{path:"/tasklist",component:Ye},{path:"/assessment",component:dn}]});o["a"].use(m["a"]),v["c"].add(g["a"],b["p"],b["o"],b["g"],b["j"],b["d"],b["k"],b["n"],b["m"],b["i"],g["d"],b["b"],b["f"],g["c"],b["e"],b["c"],g["b"],b["h"],b["l"],b["b"],b["a"],g["e"]),o["a"].component("fa-icon",h["a"]);var pn=new m["a"]({locale:"ja"});new o["a"]({i18n:pn,router:fn,render:function(t){return t(d)}}).$mount("#app")},"6b10":function(t,e,n){},"6cc8":function(t,e,n){"use strict";var o=n("19eb"),a=n.n(o);a.a},"701a":function(t,e,n){"use strict";var o=n("0f26"),a=n.n(o);a.a},"762c":function(t,e,n){"use strict";var o=n("30b7"),a=n.n(o);a.a},"780e":function(t,e,n){"use strict";var o=n("f4a6"),a=n.n(o);a.a},"888f":function(t,e,n){},"890b":function(t,e,n){"use strict";var o=n("e6b2"),a=n.n(o);a.a},"8e99":function(t,e,n){"use strict";var o=n("ab31"),a=n.n(o);a.a},"93be":function(t,e,n){"use strict";var o=n("079d"),a=n.n(o);a.a},9528:function(t,e,n){},"986d":function(t,e,n){},"9a15":function(t,e,n){},"9dac":function(t,e,n){"use strict";var o=n("0308"),a=n.n(o);a.a},ab31:function(t,e,n){},ab56:function(t,e,n){},aec1:function(t,e,n){"use strict";var o=n("f1ed"),a=n.n(o);a.a},b2ba:function(t,e,n){},b8e3:function(t,e,n){"use strict";var o=n("17bd"),a=n.n(o);a.a},babd:function(t,e,n){"use strict";var o=n("219f"),a=n.n(o);a.a},c39d:function(t,e,n){},c530:function(t,e){},cc81:function(t,e,n){},e01a:function(t,e,n){"use strict";var o=n("2bbb"),a=n.n(o);a.a},e0d3:function(t,e,n){"use strict";var o=n("158a"),a=n.n(o);a.a},e214:function(t,e,n){"use strict";var o=n("ab56"),a=n.n(o);a.a},e6b2:function(t,e,n){},f1ed:function(t,e,n){},f4a6:function(t,e,n){},f74d:function(t,e,n){"use strict";var o=n("9528"),a=n.n(o);a.a}});
//# sourceMappingURL=app.c290b3a7.js.map