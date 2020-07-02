<template>
  <div class="chat">
    <div>
      <div
        v-for="mensaje in mensajes"
        :key="mensaje.id"
        class="chat-container"
        v-bind:class="{ 'chat-mensaje-propio': mensaje.sender_id == userId }"
      >
        <div class="chat-mensaje">
          <label>{{ mensaje.message }}</label>
        </div>
      </div>
    </div>

    <div class="chat-bottom">
      <input type="text" placeholder="Escribe un mensaje aquí" ref="inputTexto" />
      <button @click="enviar()">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensajes: [],
      userId: null
    };
  },
  props: { conversacion: [Object] },
  computed: {},
  mounted() {
    this.userId = localStorage.getItem("$userId");
    this.getChat();
    this.actualizar();
  },
  created() {
    this.$eventHub.$on("chat-get", id => this.getChat(id));
  },
  methods: {
    actualizar() {
      var that = this;
      setTimeout(function() {
        that.getChat();
        that.actualizar();
      }, 3000);
    },
    getChat(id) {
      if (id == null) {
        id = this.conversacion.id;
      }
      var that = this;
      this.mensajes = [];
      this.$axios
        .get(this.$localurl + "/api/v1/messages/" + id)
        .then(function(response) {
          that.mensajes = response.data.messages.data;
        })
        .catch(function() {
          that.errorUsuario = true;
          that.errorPassword = true;
        });
    },
    enviar() {
      var texto = this.$refs.inputTexto.value;
      if (texto != "") {
        this.mensajes.push({
          id: 0,
          sender_id: this.userId,
          message: texto
        });
        this.$refs.inputTexto.value = "";
        var data = new FormData();
        data.append("message", texto);
        data.append("receiver_id", this.conversacion.user_dest.id);
        this.$axios
          .post(this.$localurl + "/api/v1/messages/", data)
          .then(function() {})
          .catch(function() {
            alert("Se produjo un error, reintente");
          });
      }
    }
  }
};
</script>

<style scoped src="../assets/css/components/chat.css"></style>
