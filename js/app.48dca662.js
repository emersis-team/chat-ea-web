(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r={app:0},o=[];function i(e){return c.p+"js/"+({chat:"chat",login:"login"}[e]||e)+"."+{chat:"a110cf00",login:"76b3a1ed"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={chat:1,login:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({chat:"chat",login:"login"}[e]||e)+"."+{chat:"261fba99",login:"cdf5363c"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],f.parentNode.removeChild(f),n(o)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/chat-ea-web/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07b9":function(e,t,n){},"0f71":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAABHNCSVQICAgIfAhkiAAAA8RJREFUaEPVmu1xFDEMhpUKIBUAFQAVABVAKgAqACoAKiBUAFQAVJCkAqACQgehApgnscCns9eS7bvMamZnf5w/3ldftrR3IHPloYg8FpF7InI7PezwXUQu0vtTek/Z+WDKKiLPROR1Bri17LmIvBERyAzJKAE0/SFpvAcIljkSEQh1yQgB3OWziNzs2vn/JFwLEqc96/QSAPxJZcOvyccBhIYRLMUc3sRISR71kOghAAjAW83/kKtYUNA1hTL/o4jcNQOwxP2oO/UQAKDd/G0KyogXHIvICzOBtSHhligBNEzQ5tIDXueXSDxPFnKRiBIgW9zKVsZtcIkRsRZljzveBSMESoGLuVs+38KCAr6ZQe51IwSsuck2T1ronL9/MdnpvYi89MyNECAtPsgWHfF9i41TmZNc5Syl3SaHCAHr/115u4LIuqc7G0UI/DGbH6YLWlNLjgFc/H6acS5srkFp4dUT2KcLudNzxAKrD+LVp9HVH2TEso0Dd7pbyET2KvErUNlJJAbAsPrLHCRK12lOUk7miJRuou7soxtFLcA8Ll9kpBsGLcS4Crcud7U6+ndaO1Qf9xAA91JJycUMEpBEowgFkJaUtQug+waaK66XgJIArLVExI0Yi+YhtdeiXkHW6lsvCSwE+JDbzLJAvg7ZiUDOq7UlEqRKxlPcD8mIC5U2xiKQ4U3XQot/NK2tRUC3At1NahYBrsMUOwC3fVEFg5vwAJ6HoqXbdUbSqM5Fw08zjbu1lg2ECBahR4qFwtJjAbRN+UfwjbYVFTDgIUItHLJKlADAKbZnAbcahwgntPtU9xLwdKEJVD3E1NfzdKuksRzPUsZyd609BMgq7ypaJx2iMYCHTJ+CHSJYtHQYYo1XrVTbIlC6ferpycbDeTwphrVqRBZbjUsEauBpaPFbV9ZYSDO4GAoptd+rJGoEauBDjddwTryaYJtcukxx7xKBUv+fCxek8PV9CHsRW3lsFL8flAjQaLUdZz4B7Qu8KqjkBVslrCVQMt8+3KZm1VLVttGTzQlwwqL9/JCa2YHudT3bud5wpZwAGYC7jQp+D6nZ2SZKBIVyxuTx8K/9rgQYRHM11/51uo4laV0bpfIV50IJcIhw2qqEejNRlXaML1mBU/pYCdjMc/ljx0a7nGKtcJmRIFDqzWOe6N1ml+BZu/Qt7RACNt+Gm0u7Rp6tb1ubRxCwuXbmt6/Z3LawQsD2/a/j1PUS5frNH0xUziBA+iQOVLo6ZF4Eg+NsR/AcAvbbV6tGGMQwNH0rkNdGAPYbCv8LwRLasqrUf/YAAAAASUVORK5CYII="},"1f81":function(e,t,n){"use strict";var a=n("f8f5"),s=n.n(a);s.a},"295b":function(e,t,n){"use strict";var a=n("9040"),s=n.n(a);s.a},"2ce7":function(e,t,n){},"30f4":function(e,t,n){},"36c6":function(e,t,n){},5515:function(e,t,n){"use strict";var a=n("8076"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Snackbar"),n("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-fast"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.mostrarSnackbar,expression:"mostrarSnackbar == true"}],staticClass:"snackbar"},[n("p",{staticClass:"snackbar-texto"},[e._v(" "+e._s(e.texto)+" ")])])])},i=[],c={components:{},props:{},data:function(){return{mostrarSnackbar:!1,texto:"",myTimeout:null}},created:function(){var e=this;this.$eventHub.$on("snackbar",(function(t){return e.abrirSnackbar(t)}))},mounted:function(){},methods:{abrirSnackbar:function(e){clearTimeout(this.myTimeout),this.texto=e,this.mostrarSnackbar=!0;var t=this;this.myTimeout=setTimeout((function(){t.mostrarSnackbar=!1}),2e3)}}},u=c,l=(n("d981"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,null,null),f=d.exports,m={data:function(){return{}},components:{Snackbar:f},created:function(){a["a"].prototype.$localurl="https://emersis.casya.com.ar",this.$axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("$token"),null==localStorage.getItem("$token")&&this.$router.push("/login"),a["a"].prototype.$isMobile=this.isMobile()},mounted:function(){},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},h=m,p=(n("1f81"),n("b78c"),n("5515"),n("60d4"),n("e1ab"),Object(l["a"])(h,s,r,!1,null,null,null)),v=p.exports,g=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-body"},[n("div",{staticClass:"home-left"},[n("input",{ref:"inputBuscar",staticClass:"home-buscar",attrs:{type:"text",placeholder:"Buscar"},on:{keyup:function(t){return e.buscar()}}}),n("div",{staticClass:"home-left-conversaciones"},e._l(e.conversacionesFiltradas,(function(t){return n("div",{key:t.id,class:{"home-conversacion-elegida":t==e.conversacionElegida},on:{click:function(n){return e.elegirConversacion(t)}}},[n("Conversacion",{attrs:{conversacion:t}})],1)})),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$isMobile,expression:"!$isMobile"}],staticClass:"home-right"},[null!=e.conversacionElegida?n("Chat",{attrs:{conversacion:e.conversacionElegida}}):e._e()],1)])])},j=[],C=(n("4de4"),n("c975"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conversacion"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.conversacion.ammount_no_read>0,expression:"conversacion.ammount_no_read > 0"}]}),e._m(0),n("p",{staticClass:"conversacion-nombre"},[e._v(e._s(e.conversacion.user_dest.name))]),n("p",{staticClass:"conversacion-email"},[e._v(e._s(e.conversacion.user_dest.email))])])}),A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"conversacion-imagen"},[a("img",{attrs:{src:n("0f71")}})])}],_={data:function(){return{}},props:{conversacion:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},w=_,y=(n("85c8"),Object(l["a"])(w,C,A,!1,null,"fc275df2",null)),x=y.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat"},[n("div",{staticClass:"chat-top"},[n("p",[e._v(e._s(null!=e.$conversacionElegida?e.$conversacionElegida.user_dest.name:""))])]),n("div",{ref:"chatScroll",staticClass:"chat-scroll",attrs:{id:"chatScroll"},on:{scroll:e.onScroll}},e._l(e.mensajes,(function(t){return n("div",{key:t.id,staticClass:"chat-container",class:{"chat-mensaje-propio":t.sender_id==e.userId},attrs:{id:t.id}},[t.sender_id!=e.userId?n("span",{staticClass:"chat-tail"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 13",width:"8",height:"13"}},[n("path",{attrs:{opacity:".13",fill:"#0000000",d:"M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"}}),n("path",{attrs:{fill:"currentColor",d:"M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]):e._e(),t.sender_id==e.userId?n("span",{staticClass:"chat-tail-out"},[n("svg",{staticClass:"chat-tail-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 13",width:"8",height:"13"}},[n("path",{attrs:{opacity:".13",d:"M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"}}),n("path",{attrs:{fill:"currentColor",d:"M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"}})])]):e._e(),null!=t.message_type&&"TextMessage"==t.message_type.substr(11,100)?n("MensajeTexto",{attrs:{mensaje:t.message}}):e._e(),null!=t.message_type&&"FileMessage"==t.message_type.substr(11,100)&&e.esArchivo(t)?n("MensajeArchivo",{attrs:{mensaje:t.message}}):e._e(),null!=t.message_type&&"FileMessage"==t.message_type.substr(11,100)&&e.esImagen(t)?n("MensajeImagen",{attrs:{mensaje:t.message}}):e._e(),null!=t.message_type&&"FileMessage"==t.message_type.substr(11,100)&&e.esVideo(t)?n("MensajeVideo",{attrs:{mensaje:t.message}}):e._e(),null!=t.message_type&&"FileMessage"==t.message_type.substr(11,100)&&e.esAudio(t)?n("MensajeAudio",{attrs:{mensaje:t.message}}):e._e()],1)})),0),n("div",{staticClass:"chat-bottom"},[n("div",{staticClass:"chat-adjuntar",attrs:{title:"Adjuntar"},on:{click:function(t){return e.adjuntar()}}},[n("input",{ref:"adjuntoFiles",staticClass:"app-hide",attrs:{type:"file",multiple:""},on:{change:function(t){return e.changeAdjunto()}}}),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"currentColor",d:"M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"}})])]),n("input",{ref:"inputTexto",attrs:{type:"text",placeholder:"Escribe un mensaje aquí"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enviar()}}}),n("button",{staticClass:"chat-enviar",on:{click:function(t){return e.enviar()}}},[e._v("Enviar")])])])},E=[],S=(n("99af"),n("4160"),n("45fc"),n("ac1f"),n("1276"),n("159b"),n("b620")),k=n("901b"),I=n("8a60"),M=n("b1af"),O=n("ff3b"),B={name:"Chat",components:{MensajeTexto:S["a"],MensajeArchivo:k["a"],MensajeImagen:I["a"],MensajeVideo:M["a"],MensajeAudio:O["a"]},data:function(){return{mensajes:[],userId:null,primeraPagina:!0,currentPage:0,lastPage:0,mensajeOffset:null}},props:{conversacion:[Object]},computed:{},mounted:function(){this.userId=localStorage.getItem("$userId"),this.getChat(),this.actualizar(),this.mensajes=[],this.$refs.chatScroll.addEventListener("touchmove",this.onScroll)},created:function(){var e=this;this.$eventHub.$on("chat-get",(function(t){return e.getChat(t)}))},methods:{actualizar:function(){var e=this;setTimeout((function(){e.getChat(),e.actualizar()}),3e3)},esImagen:function(e){var t=e.message.files[0].file.split(".")[1].toLowerCase();return"png"==t||"jpg"==t||"svg"==t||"jpeg"==t},esVideo:function(e){var t=e.message.files[0].file.split(".")[1].toLowerCase();return"webm"==t||"mkv"==t||"flv"==t||"mp4"==t||"mov"==t||"avi"==t},esAudio:function(e){var t=e.message.files[0].file.split(".")[1].toLowerCase();return"m4a"==t||"qt"==t},esArchivo:function(e){return 0==this.esImagen(e)&&0==this.esVideo(e)&&0==this.esAudio(e)},getChat:function(e){null==e?e=this.conversacion.id:(this.mensajes=[],this.primeraPagina=!0);var t=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+e).then((function(e){1!=t.primeraPagina||t.isOverflown(document.getElementById("chatScroll"))||(t.primeraPagina=!1,t.getChatPage(2));var n=!1;t.lastPage=e.data.messages.last_page,e.data.messages.data.reverse(),e.data.messages.data.forEach((function(e){t.mensajes.some((function(t){return t.id==e.id}))||e.conversation_id!=t.conversacion.id||(t.mensajes.push(e),n=!0)})),1==n&&(t.mensajeOffset=t.mensajes[t.mensajes.length-1],t.scrollToBottom())})).catch((function(e){401==e.response.status&&(localStorage.removeItem("$expire"),t.$router.push("/login"))}))},getChatPage:function(e){this.mensajeOffset=this.mensajes[0],this.currentPage=e;var t="";null!=e&&(t="?page="+e);var n=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+this.conversacion.id+t).then((function(e){e.data.messages.data.reverse(),n.mensajes=e.data.messages.data.concat(n.mensajes),n.scrollToBottom()})).catch((function(e){401==e.response.status&&(localStorage.removeItem("$expire"),n.$router.push("/login"))}))},onScroll:function(){var e=this.$refs.chatScroll;e.scrollTop<.1*e.clientHeight&&this.currentPage<this.lastPage&&(this.offset=this.offset+this.limit,this.currentPage++,this.getChatPage(this.currentPage))},scrollToBottom:function(){var e=this;this.$nextTick((function(){null!=e.mensajeOffset&&(document.getElementById("chatScroll").scrollTop=document.getElementById(e.mensajeOffset.id).offsetTop)}))},enviar:function(){this.scrollToBottom();var e=this.$refs.inputTexto.value;if(""!=e){this.$refs.inputTexto.value="";var t=new FormData;t.append("message",e),t.append("receiver_id",this.conversacion.user_dest.id);var n=this;this.$axios.post(this.$localurl+"/api/v1/messages/textMessage",t).then((function(){n.getChat()})).catch((function(e){401==e.response.status&&(localStorage.removeItem("$expire"),n.$router.push("/login")),alert("Se produjo un error, reintente")}))}},isOverflown:function(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth},adjuntar:function(){this.$refs.adjuntoFiles.click()},changeAdjunto:function(){if(this.$refs.adjuntoFiles.files.length>0){var e=new FormData;e.append("message","archivos"),e.append("receiver_id",this.conversacion.user_dest.id),this.$refs.adjuntoFiles.files.forEach((function(t,n){e.append("file["+n+"]",t)}));var t=this;this.$axios.post(this.$localurl+"/api/v1/messages/fileMessage",e).then((function(){t.getChat()})).catch((function(e){401==e.response.status&&(localStorage.removeItem("$expire"),t.$router.push("/login")),alert("Se produjo un error, reintente")}))}}}},P=B,T=(n("295b"),Object(l["a"])(P,$,E,!1,null,"3755175d",null)),L=T.exports,U={name:"Home",components:{Conversacion:x,Chat:L},data:function(){return{conversacionElegida:null,conversacionesFiltradas:[],conversaciones:[],mensajes:[]}},mounted:function(){this.$isMobile&&(this.mostrarChat=!1),this.getConversaciones()},methods:{getConversaciones:function(){var e=this;this.$axios.get(this.$localurl+"/api/v1/messages").then((function(t){e.conversaciones=t.data.conversations,e.conversacionesFiltradas=e.conversaciones})).catch((function(t){401==t.response.status&&(localStorage.removeItem("$expire"),e.$router.push("/login"))}))},buscar:function(){var e=this.$refs.inputBuscar.value.toUpperCase();this.conversacionesFiltradas=this.conversaciones.filter((function(t){return t.user_dest.name.toUpperCase().indexOf(e)>-1||t.user_dest.email.toUpperCase().indexOf(e)>-1}))},elegirConversacion:function(e){this.$isMobile&&this.$router.push("/chat/"+e.id+"/"+e.user_dest.id),this.conversacionElegida=e,a["a"].prototype.$conversacionElegida=e,this.$eventHub.$emit("chat-get",e.id)}}},F=U,H=(n("d994"),Object(l["a"])(F,b,j,!1,null,"770231ca",null)),V=H.exports;a["a"].use(g["a"]);var K=[{path:"/",name:"Home",component:V},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/chat/:id/:user_dest_id",name:"chat",component:function(){return n.e("chat").then(n.bind(null,"293a"))}}],R=new g["a"]({mode:"history",base:"/chat-ea-web/",routes:K}),N=R,J=n("bc3a"),D=n.n(J);a["a"].config.productionTip=!1,a["a"].prototype.$eventHub=new a["a"],a["a"].prototype.$axios=D.a,new a["a"]({router:N,render:function(e){return e(v)}}).$mount("#app")},"5a38":function(e,t,n){},"60d4":function(e,t,n){"use strict";var a=n("36c6"),s=n.n(a);s.a},6108:function(e,t,n){"use strict";var a=n("6572"),s=n.n(a);s.a},6224:function(e,t,n){"use strict";var a=n("ffe8"),s=n.n(a);s.a},6572:function(e,t,n){},8076:function(e,t,n){},"85c8":function(e,t,n){"use strict";var a=n("07b9"),s=n.n(a);s.a},8793:function(e,t,n){},"8a60":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-mensaje"},e._l(e.mensaje.files,(function(t){return n("div",{key:t.id,staticClass:"chat-mensaje-imagen"},[n("img",{attrs:{src:e.$localurl+"/public/storage/"+t.file}})])})),0)},s=[],r={name:"MensajeImagen",components:{},data:function(){return{mostrarImagen:!1}},props:{mensaje:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},o=r,i=(n("d339"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,"04ac1e90",null);t["a"]=c.exports},"901b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-mensaje"},e._l(e.mensaje.files,(function(t){return n("div",{key:t.id,staticClass:"chat-mensaje-archivo"},[n("label",[e._v(e._s(t.original_file))]),n("a",{attrs:{href:e.$localurl+"/public/storage/"+t.file,download:""}},[e._v("Descargar")])])})),0)},s=[],r={name:"MensajeArchivo",components:{},data:function(){return{}},props:{mensaje:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},o=r,i=(n("b301"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,"860b0126",null);t["a"]=c.exports},9040:function(e,t,n){},"9d21":function(e,t,n){},a061:function(e,t,n){},b1af:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-mensaje"},e._l(e.mensaje.files,(function(t){return n("div",{key:t.id,staticClass:"chat-mensaje-video"},[n("video",{attrs:{controls:"",name:"media"}},[n("source",{attrs:{src:e.$localurl+"/public/storage/"+t.file,type:"video/mp4"}})])])})),0)},s=[],r={name:"MensajeVideo",components:{},data:function(){return{}},props:{mensaje:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},o=r,i=(n("f1da"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,"68ad83a9",null);t["a"]=c.exports},b301:function(e,t,n){"use strict";var a=n("a061"),s=n.n(a);s.a},b620:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-mensaje"},[n("label",[e._v(e._s(e.mensaje.text))])])},s=[],r={name:"MensajeTexto",components:{},data:function(){return{}},props:{mensaje:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},o=r,i=(n("6108"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,"2d0c2100",null);t["a"]=c.exports},b78c:function(e,t,n){"use strict";var a=n("8793"),s=n.n(a);s.a},cdec:function(e,t,n){},d339:function(e,t,n){"use strict";var a=n("5a38"),s=n.n(a);s.a},d981:function(e,t,n){"use strict";var a=n("30f4"),s=n.n(a);s.a},d994:function(e,t,n){"use strict";var a=n("9d21"),s=n.n(a);s.a},e1ab:function(e,t,n){"use strict";var a=n("2ce7"),s=n.n(a);s.a},f1da:function(e,t,n){"use strict";var a=n("cdec"),s=n.n(a);s.a},f8f5:function(e,t,n){},ff3b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-mensaje"},e._l(e.mensaje.files,(function(t){return n("div",{key:t.id,staticClass:"chat-mensaje-audio"},[n("audio",{attrs:{controls:"",name:"media"}},[n("source",{attrs:{src:e.$localurl+"/public/storage/"+t.file,type:"audio/mpeg"}})])])})),0)},s=[],r={name:"MensajeAudio",components:{},data:function(){return{}},props:{mensaje:[Object]},computed:{},mounted:function(){},created:function(){},methods:{}},o=r,i=(n("6224"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,"5a423457",null);t["a"]=c.exports},ffe8:function(e,t,n){}});
//# sourceMappingURL=app.48dca662.js.map