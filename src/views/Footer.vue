<template>
    <div id="footer">
      <router-link class="no-display" to="/home">Home</router-link>
      <router-link class="no-display" to="/categories">Categories</router-link> 
      <router-link class="no-display" to="/random">Random</router-link>
      <router-link to="/api" target="_blank">API Documentation</router-link> 
      <router-link to="/github" target="_blank">Preeti Singh</router-link>
    </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
#footer {
  /* design css */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 0;
  border-top: 2px solid black;
  box-shadow: 0 -5px 16px 0px rgba(0, 0, 0, 0.3);

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}

#footer a {
  color: goldenrod;
}

#footer a:hover {
  color: white;
}
</style>