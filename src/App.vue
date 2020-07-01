<template>
  <div id="app">
    <Snackbar></Snackbar>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Snackbar from "@/components/Snackbar.vue";

export default {
  data() {
    return {};
  },
  components: { Snackbar },
  created() {
    Vue.prototype.$localurl = "https://emersis.casya.com.ar";
  },
  mounted() {
    if (localStorage.getItem("$token") == null) {
      // this.$router.push("/login");
    }
  },
  methods: {}
};
</script>

<style src="@/assets/css/fonts.css"></style>
<style src="@/assets/css/transitions.css"></style>
<style src="@/assets/css/app.css"></style>
<style src="@/assets/css/error.css"></style>
<style src="@/assets/css/components/loading.css"></style>
