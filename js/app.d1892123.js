(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({login:"login"}[e]||e)+"."+{login:"9ea62b45"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({login:"login"}[e]||e)+"."+{login:"fd9beb27"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/chat-ea-web/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07b9":function(e,t,n){},"0f71":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAABHNCSVQICAgIfAhkiAAAA8RJREFUaEPVmu1xFDEMhpUKIBUAFQAVABVAKgAqACoAKiBUAFQAVJCkAqACQgehApgnscCns9eS7bvMamZnf5w/3ldftrR3IHPloYg8FpF7InI7PezwXUQu0vtTek/Z+WDKKiLPROR1Bri17LmIvBERyAzJKAE0/SFpvAcIljkSEQh1yQgB3OWziNzs2vn/JFwLEqc96/QSAPxJZcOvyccBhIYRLMUc3sRISR71kOghAAjAW83/kKtYUNA1hTL/o4jcNQOwxP2oO/UQAKDd/G0KyogXHIvICzOBtSHhligBNEzQ5tIDXueXSDxPFnKRiBIgW9zKVsZtcIkRsRZljzveBSMESoGLuVs+38KCAr6ZQe51IwSsuck2T1ronL9/MdnpvYi89MyNECAtPsgWHfF9i41TmZNc5Syl3SaHCAHr/115u4LIuqc7G0UI/DGbH6YLWlNLjgFc/H6acS5srkFp4dUT2KcLudNzxAKrD+LVp9HVH2TEso0Dd7pbyET2KvErUNlJJAbAsPrLHCRK12lOUk7miJRuou7soxtFLcA8Ll9kpBsGLcS4Crcud7U6+ndaO1Qf9xAA91JJycUMEpBEowgFkJaUtQug+waaK66XgJIArLVExI0Yi+YhtdeiXkHW6lsvCSwE+JDbzLJAvg7ZiUDOq7UlEqRKxlPcD8mIC5U2xiKQ4U3XQot/NK2tRUC3At1NahYBrsMUOwC3fVEFg5vwAJ6HoqXbdUbSqM5Fw08zjbu1lg2ECBahR4qFwtJjAbRN+UfwjbYVFTDgIUItHLJKlADAKbZnAbcahwgntPtU9xLwdKEJVD3E1NfzdKuksRzPUsZyd609BMgq7ypaJx2iMYCHTJ+CHSJYtHQYYo1XrVTbIlC6ferpycbDeTwphrVqRBZbjUsEauBpaPFbV9ZYSDO4GAoptd+rJGoEauBDjddwTryaYJtcukxx7xKBUv+fCxek8PV9CHsRW3lsFL8flAjQaLUdZz4B7Qu8KqjkBVslrCVQMt8+3KZm1VLVttGTzQlwwqL9/JCa2YHudT3bud5wpZwAGYC7jQp+D6nZ2SZKBIVyxuTx8K/9rgQYRHM11/51uo4laV0bpfIV50IJcIhw2qqEejNRlXaML1mBU/pYCdjMc/ljx0a7nGKtcJmRIFDqzWOe6N1ml+BZu/Qt7RACNt+Gm0u7Rp6tb1ubRxCwuXbmt6/Z3LawQsD2/a/j1PUS5frNH0xUziBA+iQOVLo6ZF4Eg+NsR/AcAvbbV6tGGMQwNH0rkNdGAPYbCv8LwRLasqrUf/YAAAAASUVORK5CYII="},"1f81":function(e,t,n){"use strict";var a=n("f8f5"),r=n.n(a);r.a},"242c":function(e,t,n){},"2ce7":function(e,t,n){},"30f4":function(e,t,n){},"36c6":function(e,t,n){},5515:function(e,t,n){"use strict";var a=n("8076"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Snackbar"),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-fast"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.mostrarSnackbar,expression:"mostrarSnackbar == true"}],staticClass:"snackbar"},[n("p",{staticClass:"snackbar-texto"},[e._v(" "+e._s(e.texto)+" ")])])])},i=[],c={components:{},props:{},data:function(){return{mostrarSnackbar:!1,texto:"",myTimeout:null}},created:function(){var e=this;this.$eventHub.$on("snackbar",(function(t){return e.abrirSnackbar(t)}))},mounted:function(){},methods:{abrirSnackbar:function(e){clearTimeout(this.myTimeout),this.texto=e,this.mostrarSnackbar=!0;var t=this;this.myTimeout=setTimeout((function(){t.mostrarSnackbar=!1}),2e3)}}},u=c,l=(n("d981"),n("2877")),d=Object(l["a"])(u,s,i,!1,null,null,null),f=d.exports,p={data:function(){return{}},components:{Snackbar:f},created:function(){a["a"].prototype.$localurl="https://emersis.casya.com.ar",this.$axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("$token"),null==localStorage.getItem("$token")&&this.$router.push("/login")},mounted:function(){},methods:{}},v=p,h=(n("1f81"),n("b78c"),n("5515"),n("60d4"),n("e1ab"),Object(l["a"])(v,r,o,!1,null,null,null)),m=h.exports,g=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-body"},[n("div",{staticClass:"home-left"},[n("input",{ref:"inputBuscar",staticClass:"home-buscar",attrs:{type:"text",placeholder:"Buscar"},on:{keyup:function(t){return e.buscar()}}}),e._l(e.conversacionesFiltradas,(function(t){return n("div",{key:t.id,class:{"home-conversacion-elegida":t==e.conversacionElegida},on:{click:function(n){return e.elegirConversacion(t)}}},[n("Conversacion",{attrs:{conversacion:t}})],1)}))],2),n("div",{staticClass:"home-right"},[null!=e.conversacionElegida?n("Chat",{attrs:{conversacion:e.conversacionElegida}}):e._e()],1)])])},A=[],C=(n("4de4"),n("c975"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conversacion"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.conversacion.ammount_no_read>0,expression:"conversacion.ammount_no_read > 0"}]}),e._m(0),n("p",{staticClass:"conversacion-nombre"},[e._v(e._s(e.conversacion.user_dest.name))]),n("p",{staticClass:"conversacion-email"},[e._v(e._s(e.conversacion.user_dest.email))])])}),w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"conversacion-imagen"},[a("img",{attrs:{src:n("0f71")}})])}],y={data:function(){return{}},props:{conversacion:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},x=y,E=(n("85c8"),Object(l["a"])(x,C,w,!1,null,"fc275df2",null)),j=E.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat"},[n("div",e._l(e.mensajes,(function(t){return n("div",{key:t.id,staticClass:"chat-container",class:{"chat-mensaje-propio":t.sender_id==e.userId}},[n("div",{staticClass:"chat-mensaje"},[n("label",[e._v(e._s(t.message))])])])})),0),n("div",{staticClass:"chat-bottom"},[n("input",{ref:"inputTexto",attrs:{type:"text",placeholder:"Escribe un mensaje aquí"}}),n("button",{staticClass:"chat-enviar",on:{click:function(t){return e.enviar()}}},[e._v("Enviar")])])])},_=[],S=(n("4160"),n("45fc"),n("159b"),{data:function(){return{mensajes:[],userId:null,primeraPagina:!0}},props:{conversacion:[Object]},computed:{},mounted:function(){this.userId=localStorage.getItem("$userId"),this.getChat(),this.actualizar(),this.mensajes=[]},created:function(){var e=this;this.$eventHub.$on("chat-get",(function(t){return e.getChat(t,null)}))},methods:{actualizar:function(){var e=this;setTimeout((function(){e.getChat(),e.actualizar()}),3e3)},getChat:function(e,t){null==e&&(e=this.conversacion.id);var n="";null!=t&&(n="?page="+t);var a=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+e+n).then((function(e){1==a.primeraPagina&&(a.primeraPagina=!1,a.getChat(null,2)),e.data.messages.data.reverse(),e.data.messages.data.forEach((function(e){a.mensajes.some((function(t){return t.id==e.id}))||a.mensajes.push(e)}))})).catch((function(){}))},enviar:function(){var e=this.$refs.inputTexto.value;if(""!=e){this.mensajes.push({id:0,sender_id:this.userId,message:e}),this.$refs.inputTexto.value="";var t=new FormData;t.append("message",e),t.append("receiver_id",this.conversacion.user_dest.id),this.$axios.post(this.$localurl+"/api/v1/messages",t).then((function(){})).catch((function(){alert("Se produjo un error, reintente")}))}}}}),I=S,U=(n("a748"),Object(l["a"])(I,k,_,!1,null,"209fae8c",null)),O=U.exports,B={name:"Home",components:{Conversacion:j,Chat:O},data:function(){return{conversacionElegida:null,conversacionesFiltradas:[],conversaciones:[],mensajes:[]}},mounted:function(){this.getConversaciones()},methods:{getConversaciones:function(){var e=this;this.$axios.get(this.$localurl+"/api/v1/messages").then((function(t){e.conversaciones=t.data.conversations,e.conversacionesFiltradas=e.conversaciones})).catch((function(t){401==t.response.status&&e.$router.push("/login")}))},buscar:function(){var e=this.$refs.inputBuscar.value.toUpperCase();this.conversacionesFiltradas=this.conversaciones.filter((function(t){return t.user_dest.name.toUpperCase().indexOf(e)>-1||t.user_dest.email.toUpperCase().indexOf(e)>-1}))},elegirConversacion:function(e){this.conversacionElegida=e,this.$eventHub.$emit("chat-get",e.id)}}},L=B,K=(n("8d81"),Object(l["a"])(L,b,A,!1,null,"de744f80",null)),R=K.exports;a["a"].use(g["a"]);var T=[{path:"/",name:"Home",component:R},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],$=new g["a"]({mode:"history",base:"/chat-ea-web/",routes:T}),H=$,N=n("bc3a"),P=n.n(N);a["a"].config.productionTip=!1,a["a"].prototype.$eventHub=new a["a"],a["a"].prototype.$axios=P.a,new a["a"]({router:H,render:function(e){return e(m)}}).$mount("#app")},"60d4":function(e,t,n){"use strict";var a=n("36c6"),r=n.n(a);r.a},8076:function(e,t,n){},"85c8":function(e,t,n){"use strict";var a=n("07b9"),r=n.n(a);r.a},8793:function(e,t,n){},"8d81":function(e,t,n){"use strict";var a=n("242c"),r=n.n(a);r.a},a748:function(e,t,n){"use strict";var a=n("dcb6"),r=n.n(a);r.a},b78c:function(e,t,n){"use strict";var a=n("8793"),r=n.n(a);r.a},d981:function(e,t,n){"use strict";var a=n("30f4"),r=n.n(a);r.a},dcb6:function(e,t,n){},e1ab:function(e,t,n){"use strict";var a=n("2ce7"),r=n.n(a);r.a},f8f5:function(e,t,n){}});
//# sourceMappingURL=app.d1892123.js.map