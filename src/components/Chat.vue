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
      <input type="text" placeholder="Escribe un mensaje aquí" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensajes: [],
      userId: 2
    };
  },
  props: { conversacion: [Object] },
  computed: {},
  mounted() {
    this.getChat();
  },
  created() {
    this.$eventHub.$on("chat-get", () => this.getChat());
  },
  methods: {
    getChat() {
      var that = this;
      this.$axios
        .post(this.$localurl + "/api/v1/messages/" + this.conversacion.id)
        .then(function(response) {
          that.mensajes = response.messages;
        })
        .catch(function() {
          that.errorUsuario = true;
          that.errorPassword = true;
        });
    }
  }
};
</script>

<style scoped src="../assets/css/components/chat.css"></style>
