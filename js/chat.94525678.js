(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"1bef":function(t,e,a){"use strict";var s=a("7dc8"),n=a.n(s);n.a},"1faf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAAABHNCSVQICAgIfAhkiAAAAVlJREFUWEfV2c1Nw0AQQOGXAhCUkBLoAOgESsiFHuggR1JBOHIDUQEUgEQJHDhyiCayI8da/86sd8b3jN+3q0ReZ4XtdQXsgQ3waTs6PW1leBOJfwOugV/gbgmEFaAZX6/JIggLQCpeEF/AbbUbhht9PkoLKBovFA2geLwG4CJ+LsBN/ByAq/ipAHfxUwAu48cC3MaPAbiOHwK4j+8DhIjvAoSJTwFCxbcB4eKbgJDxNaAr/q86Uf1ne5jXD97K4/Q7cKOfVWTCowDkDCuIyyIJupseAXJFRZwANeIDuGgtyhPwqluobJ/+bh8pu3biAXjOlqEYnDoTh0J0HerDIPreSoRADL1WcY8YAvT9xLr4Yo8BuEaMBbhFTAG4REwFuEPMAbhCzAW4QWgALhBaQHGEBaAPIX/0yWEp22UFSCF2wH228mqwJaCJeFkiXm5oDZCZa+An98rX8w+YCmb+NJKbQwAAAABJRU5ErkJggg=="},"293a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home-body"},[s("div",{staticClass:"home-right"},[s("div",{staticClass:"chat"},[s("div",{staticClass:"chat-contacto",on:{click:function(e){return t.$router.back()}}},[s("img",{attrs:{src:a("1faf")}}),s("label",[t._v(t._s(t.nombreContacto))])]),s("div",{ref:"chatScroll",staticClass:"chat-scroll",attrs:{id:"chatScroll"},on:{scroll:t.onScroll}},t._l(t.mensajes,(function(e){return s("div",{key:e.id,staticClass:"chat-container",class:{"chat-mensaje-propio":e.sender_id==t.userId},attrs:{id:e.id}},[s("div",{staticClass:"chat-mensaje"},[s("label",[t._v(t._s(e.message))])])])})),0),s("div",{staticClass:"chat-bottom"},[s("input",{ref:"inputTexto",attrs:{type:"text",placeholder:"Escribe un mensaje aquí"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enviar()}}}),s("button",{staticClass:"chat-enviar",on:{click:function(e){return t.enviar()}}},[t._v("Enviar")])])])])])])},n=[],i=(a("99af"),a("4de4"),a("4160"),a("45fc"),a("b0c0"),a("159b"),{data:function(){return{mensajes:[],conversaciones:[],userId:null,primeraPagina:!0,currentPage:0,lastPage:0,mensajeOffset:null,seguirActualizando:!0,nombreContacto:""}},props:{},computed:{},mounted:function(){this.userId=localStorage.getItem("$userId"),this.getChat(),this.actualizar(),this.mensajes=[],this.$refs.chatScroll.addEventListener("touchmove",this.onScroll)},created:function(){var t=this;this.$eventHub.$on("loged",(function(){return t.seguirActualizando=!0})),this.$eventHub.$on("chat-get",(function(e){return t.getChat(e)}))},methods:{actualizar:function(){if(this.seguirActualizando){var t=this;setTimeout((function(){t.getChat(),t.getConversaciones(),t.actualizar()}),3e3)}},getConversaciones:function(){var t=this;this.$axios.get(this.$localurl+"/api/v1/messages").then((function(e){t.nombreContacto=e.data.conversations.filter((function(e){return e.user_dest.id==t.$route.params.user_dest_id}))[0].user_dest.name})).catch((function(){}))},getChat:function(t){null==t?t=this.$route.params.id:(this.mensajes=[],this.primeraPagina=!0);var e=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+t).then((function(t){1!=e.primeraPagina||e.isOverflown(document.getElementById("chatScroll"))||(e.primeraPagina=!1,e.getChatPage(2));var a=!1;e.lastPage=t.data.messages.last_page,t.data.messages.data.reverse(),t.data.messages.data.forEach((function(t){e.mensajes.some((function(e){return e.id==t.id}))||t.conversation_id!=e.$route.params.id||(e.mensajes.push(t),a=!0)})),1==a&&(e.mensajeOffset=e.mensajes[e.mensajes.length-1],e.scrollToBottom())})).catch((function(t){401==t.response.status&&(e.seguirActualizando=!1,e.$router.push("/login"))}))},getChatPage:function(t){this.mensajeOffset=this.mensajes[0],this.currentPage=t;var e="";null!=t&&(e="?page="+t);var a=this;this.$axios.get(this.$localurl+"/api/v1/messages/"+this.$route.params.id+e).then((function(t){t.data.messages.data.reverse(),a.mensajes=t.data.messages.data.concat(a.mensajes),a.scrollToBottom()})).catch((function(t){401==t.response.status&&(a.seguirActualizando=!1,a.$router.push("/login"))}))},onScroll:function(){var t=this.$refs.chatScroll;t.scrollTop<.1*t.clientHeight&&this.currentPage<this.lastPage&&(this.offset=this.offset+this.limit,this.currentPage++,this.getChatPage(this.currentPage))},scrollToBottom:function(){var t=this;this.$nextTick((function(){document.getElementById("chatScroll").scrollTop=document.getElementById(t.mensajeOffset.id).offsetTop}))},enviar:function(){this.scrollToBottom();var t=this.$refs.inputTexto.value;if(""!=t){this.$refs.inputTexto.value="";var e=new FormData;e.append("message",t),e.append("receiver_id",this.$route.params.user_dest_id);var a=this;this.$axios.post(this.$localurl+"/api/v1/messages",e).then((function(){a.getChat()})).catch((function(t){401==t.response.status&&(a.seguirActualizando=!1,a.$router.push("/login")),alert("Se produjo un error, reintente")}))}},isOverflown:function(t){return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}}}),o=i,r=(a("1bef"),a("2b57"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"3b386c7f",null);e["default"]=c.exports},"2b57":function(t,e,a){"use strict";var s=a("66bd"),n=a.n(s);n.a},"66bd":function(t,e,a){},"7dc8":function(t,e,a){}}]);
//# sourceMappingURL=chat.94525678.js.map