<template>
  <div class="home">
    <div class="home-body">
      <div class="home-left">
        <input
          class="home-buscar"
          type="text"
          placeholder="Buscar"
          @keyup="buscar()"
          ref="inputBuscar"
        />
        <div
          v-for="conversacion in conversacionesFiltradas"
          :key="conversacion.id"
          @click="elegirConversacion(conversacion)"
          v-bind:class="{
            'home-conversacion-elegida': conversacion == conversacionElegida,
          }"
        >
          <Conversacion :conversacion="conversacion"></Conversacion>
        </div>
      </div>
      <div class="home-right">
        <Chat v-if="conversacionElegida != null" :conversacion="conversacionElegida"></Chat>
      </div>
    </div>
  </div>
</template>

<script>
import Conversacion from "@/components/Conversacion.vue";
import Chat from "@/components/Chat.vue";

export default {
  name: "Home",
  components: {
    Conversacion,
    Chat
  },
  data() {
    return {
      conversacionElegida: null,
      conversacionesFiltradas: [],
      conversaciones: [],
      mensajes: []
    };
  },
  mounted() {
    this.getConversaciones();
  },
  methods: {
    getConversaciones() {
      var that = this;
      this.$axios
        .post(this.$localurl + "/api/v1/messages")
        .then(function(response) {
          that.conversaciones = response.conversations;
          that.conversacionesFiltradas = that.conversaciones;
        })
        .catch(function() {
          that.errorUsuario = true;
          that.errorPassword = true;
        });
    },
    buscar() {
      var inputBuscar = this.$refs.inputBuscar.value.toUpperCase();
      this.conversacionesFiltradas = this.conversaciones.filter(
        c =>
          c.user_dest.name.toUpperCase().indexOf(inputBuscar) > -1 ||
          c.user_dest.email.toUpperCase().indexOf(inputBuscar) > -1
      );
    },
    elegirConversacion(conversacion) {
      this.conversacionElegida = conversacion;
      this.$eventHub.$emit("chat-get");
    }
  }
};
</script>

<style scoped src="../assets/css/views/home.css"></style>
