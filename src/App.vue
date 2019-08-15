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
  font-family: "Roboto Mono", monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>


// improve design
// get rid of blank space - look into modern websites for inspo
// add mobile mediaqueries
//  This time there are invalid html tags within the ul tag - look into this on dom
// add more comments throughout application