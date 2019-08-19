<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from "./views/Nav.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "app",
  components: {
    Nav,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Livvic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>