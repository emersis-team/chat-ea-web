(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({login:"login"}[e]||e)+"."+{login:"d657f57c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({login:"login"}[e]||e)+"."+{login:"fd9beb27"}[e]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/chat-ea-web/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07b9":function(e,t,n){},"0f71":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAABHNCSVQICAgIfAhkiAAAA8RJREFUaEPVmu1xFDEMhpUKIBUAFQAVABVAKgAqACoAKiBUAFQAVJCkAqACQgehApgnscCns9eS7bvMamZnf5w/3ldftrR3IHPloYg8FpF7InI7PezwXUQu0vtTek/Z+WDKKiLPROR1Bri17LmIvBERyAzJKAE0/SFpvAcIljkSEQh1yQgB3OWziNzs2vn/JFwLEqc96/QSAPxJZcOvyccBhIYRLMUc3sRISR71kOghAAjAW83/kKtYUNA1hTL/o4jcNQOwxP2oO/UQAKDd/G0KyogXHIvICzOBtSHhligBNEzQ5tIDXueXSDxPFnKRiBIgW9zKVsZtcIkRsRZljzveBSMESoGLuVs+38KCAr6ZQe51IwSsuck2T1ronL9/MdnpvYi89MyNECAtPsgWHfF9i41TmZNc5Syl3SaHCAHr/115u4LIuqc7G0UI/DGbH6YLWlNLjgFc/H6acS5srkFp4dUT2KcLudNzxAKrD+LVp9HVH2TEso0Dd7pbyET2KvErUNlJJAbAsPrLHCRK12lOUk7miJRuou7soxtFLcA8Ll9kpBsGLcS4Crcud7U6+ndaO1Qf9xAA91JJycUMEpBEowgFkJaUtQug+waaK66XgJIArLVExI0Yi+YhtdeiXkHW6lsvCSwE+JDbzLJAvg7ZiUDOq7UlEqRKxlPcD8mIC5U2xiKQ4U3XQot/NK2tRUC3At1NahYBrsMUOwC3fVEFg5vwAJ6HoqXbdUbSqM5Fw08zjbu1lg2ECBahR4qFwtJjAbRN+UfwjbYVFTDgIUItHLJKlADAKbZnAbcahwgntPtU9xLwdKEJVD3E1NfzdKuksRzPUsZyd609BMgq7ypaJx2iMYCHTJ+CHSJYtHQYYo1XrVTbIlC6ferpycbDeTwphrVqRBZbjUsEauBpaPFbV9ZYSDO4GAoptd+rJGoEauBDjddwTryaYJtcukxx7xKBUv+fCxek8PV9CHsRW3lsFL8flAjQaLUdZz4B7Qu8KqjkBVslrCVQMt8+3KZm1VLVttGTzQlwwqL9/JCa2YHudT3bud5wpZwAGYC7jQp+D6nZ2SZKBIVyxuTx8K/9rgQYRHM11/51uo4laV0bpfIV50IJcIhw2qqEejNRlXaML1mBU/pYCdjMc/ljx0a7nGKtcJmRIFDqzWOe6N1ml+BZu/Qt7RACNt+Gm0u7Rp6tb1ubRxCwuXbmt6/Z3LawQsD2/a/j1PUS5frNH0xUziBA+iQOVLo6ZF4Eg+NsR/AcAvbbV6tGGMQwNH0rkNdGAPYbCv8LwRLasqrUf/YAAAAASUVORK5CYII="},"1f81":function(e,t,n){"use strict";var a=n("f8f5"),r=n.n(a);r.a},"242c":function(e,t,n){},"2ce7":function(e,t,n){},"30f4":function(e,t,n){},"36c6":function(e,t,n){},5515:function(e,t,n){"use strict";var a=n("8076"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Snackbar"),n("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-fast"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.mostrarSnackbar,expression:"mostrarSnackbar == true"}],staticClass:"snackbar"},[n("p",{staticClass:"snackbar-texto"},[e._v(" "+e._s(e.texto)+" ")])])])},i=[],c={components:{},props:{},data:function(){return{mostrarSnackbar:!1,texto:"",myTimeout:null}},created:function(){var e=this;this.$eventHub.$on("snackbar",(function(t){return e.abrirSnackbar(t)}))},mounted:function(){},methods:{abrirSnackbar:function(e){clearTimeout(this.myTimeout),this.texto=e,this.mostrarSnackbar=!0;var t=this;this.myTimeout=setTimeout((function(){t.mostrarSnackbar=!1}),2e3)}}},u=c,l=(n("d981"),n("2877")),f=Object(l["a"])(u,o,i,!1,null,null,null),d=f.exports,h={data:function(){return{}},components:{Snackbar:d},created:function(){a["a"].prototype.$localurl="https://emersis.casya.com.ar",this.$axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("$token"),null==localStorage.getItem("$token")&&this.$router.push("/login")},mounted:function(){},methods:{}},m=h,v=(n("1f81"),n("b78c"),n("5515"),n("60d4"),n("e1ab"),Object(l["a"])(m,r,s,!1,null,null,null)),p=v.exports,g=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-body"},[n("div",{staticClass:"home-left"},[n("input",{ref:"inputBuscar",staticClass:"home-buscar",attrs:{type:"text",placeholder:"Buscar"},on:{keyup:function(t){return e.buscar()}}}),e._l(e.conversacionesFiltradas,(function(t){return n("div",{key:t.id,class:{"home-conversacion-elegida":t==e.conversacionElegida},on:{click:function(n){return e.elegirConversacion(t)}}},[n("Conversacion",{attrs:{conversacion:t}})],1)}))],2),n("div",{staticClass:"home-right"},[null!=e.conversacionElegida?n("Chat",{attrs:{conversacion:e.conversacionElegida}}):e._e()],1)])])},A=[],C=(n("4de4"),n("c975"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conversacion"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.conversacion.ammount_no_read>0,expression:"conversacion.ammount_no_read > 0"}]}),e._m(0),n("p",{staticClass:"conversacion-nombre"},[e._v(e._s(e.conversacion.user_dest.name))]),n("p",{staticClass:"conversacion-email"},[e._v(e._s(e.conversacion.user_dest.email))])])}),y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"conversacion-imagen"},[a("img",{attrs:{src:n("0f71")}})])}],w={data:function(){return{}},props:{conversacion:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},j=w,x=(n("85c8"),Object(l["a"])(j,C,y,!1,null,"fc275df2",null)),E=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat"},[n("div",{ref:"chatScroll",staticClass:"chat-scroll",attrs:{id:"chatScroll"},on:{scroll:e.onScroll}},e._l(e.mensajes,(function(t){return n("div",{key:t.id,staticClass:"chat-container",class:{"chat-mensaje-propio":t.sender_id==e.userId},attrs:{id:t.id}},[n("div",{staticClass:"chat-mensaje"},[n("label",[e._v(e._s(t.message))])])])})),0),n("div",{staticClass:"chat-bottom"},[n("input",{ref:"inputTexto",attrs:{type:"text",placeholder:"Escribe un mensaje aquí"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enviar()}}}),n("button",{staticClass:"chat-enviar",on:{click:function(t){return e.enviar()}}},[e._v("Enviar")])])])},k=[],_=(n("99af"),n("4160"),n("45fc"),n("159b"),{data:function(){return{mensajes:[],userId:null,primeraPagina:!0,currentPage:0,lastPage:0,mensajeOffset:null}},props:{conversacion:[Object]},computed:{},mounted:function(){this.userId=localStorage.getItem("$userId"),this.getChat(),this.actualizar(),this.mensajes=[],this.$refs.chatScroll.addEventListener("touchmove",this.onScroll)},created:function(){var e=this;this.$eventHub.$on("chat-get",(function(t){return e.getChat(t)}))},methods:{actualizar:function(){var e=this;setTimeout((function(){e.getChat(),e.actualizar()}),3e3)},getChat:function(e){null==e?e=this.conversacion.id:(this.mensajes=[],this.primeraPagina=!0);var t=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+e).then((function(e){1!=t.primeraPagina||t.isOverflown(document.getElementById("chatScroll"))||(t.primeraPagina=!1,t.getChatPage(2));var n=!1;t.lastPage=e.data.messages.last_page,e.data.messages.data.reverse(),e.data.messages.data.forEach((function(e){t.mensajes.some((function(t){return t.id==e.id}))||e.conversation_id!=t.conversacion.id||(t.mensajes.push(e),n=!0)})),1==n&&(t.mensajeOffset=t.mensajes[t.mensajes.length-1],t.scrollToBottom())})).catch((function(){}))},getChatPage:function(e){this.mensajeOffset=this.mensajes[0],this.currentPage=e;var t="";null!=e&&(t="?page="+e);var n=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+this.conversacion.id+t).then((function(e){e.data.messages.data.reverse(),n.mensajes=e.data.messages.data.concat(n.mensajes),n.scrollToBottom()})).catch((function(){}))},onScroll:function(){var e=this.$refs.chatScroll;e.scrollTop<.1*e.clientHeight&&this.currentPage<this.lastPage&&(this.offset=this.offset+this.limit,this.currentPage++,this.getChatPage(this.currentPage))},scrollToBottom:function(){var e=this;this.$nextTick((function(){document.getElementById("chatScroll").scrollTop=document.getElementById(e.mensajeOffset.id).offsetTop}))},enviar:function(){this.scrollToBottom();var e=this.$refs.inputTexto.value;if(""!=e){this.$refs.inputTexto.value="";var t=new FormData;t.append("message",e),t.append("receiver_id",this.conversacion.user_dest.id);var n=this;this.$axios.post(this.$localurl+"/api/v1/messages",t).then((function(){n.getChat()})).catch((function(){alert("Se produjo un error, reintente")}))}},isOverflown:function(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}}}),O=_,B=(n("99e5"),Object(l["a"])(O,S,k,!1,null,"c52b5b78",null)),I=B.exports,P={name:"Home",components:{Conversacion:E,Chat:I},data:function(){return{conversacionElegida:null,conversacionesFiltradas:[],conversaciones:[],mensajes:[]}},mounted:function(){this.getConversaciones()},methods:{getConversaciones:function(){var e=this;this.$axios.get(this.$localurl+"/api/v1/messages").then((function(t){e.conversaciones=t.data.conversations,e.conversacionesFiltradas=e.conversaciones})).catch((function(t){401==t.response.status&&e.$router.push("/login")}))},buscar:function(){var e=this.$refs.inputBuscar.value.toUpperCase();this.conversacionesFiltradas=this.conversaciones.filter((function(t){return t.user_dest.name.toUpperCase().indexOf(e)>-1||t.user_dest.email.toUpperCase().indexOf(e)>-1}))},elegirConversacion:function(e){this.conversacionElegida=e,this.$eventHub.$emit("chat-get",e.id)}}},T=P,U=(n("8d81"),Object(l["a"])(T,b,A,!1,null,"de744f80",null)),$=U.exports;a["a"].use(g["a"]);var L=[{path:"/",name:"Home",component:$},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],H=new g["a"]({mode:"history",base:"/chat-ea-web/",routes:L}),K=H,R=n("bc3a"),N=n.n(R);a["a"].config.productionTip=!1,a["a"].prototype.$eventHub=new a["a"],a["a"].prototype.$axios=N.a,new a["a"]({router:K,render:function(e){return e(p)}}).$mount("#app")},"60d4":function(e,t,n){"use strict";var a=n("36c6"),r=n.n(a);r.a},8076:function(e,t,n){},"85c8":function(e,t,n){"use strict";var a=n("07b9"),r=n.n(a);r.a},8793:function(e,t,n){},"8d81":function(e,t,n){"use strict";var a=n("242c"),r=n.n(a);r.a},"99e5":function(e,t,n){"use strict";var a=n("a420"),r=n.n(a);r.a},a420:function(e,t,n){},b78c:function(e,t,n){"use strict";var a=n("8793"),r=n.n(a);r.a},d981:function(e,t,n){"use strict";var a=n("30f4"),r=n.n(a);r.a},e1ab:function(e,t,n){"use strict";var a=n("2ce7"),r=n.n(a);r.a},f8f5:function(e,t,n){}});
//# sourceMappingURL=app.52b9cff3.js.map