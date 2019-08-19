<template>
    <div id="footer">
      <router-link class="no-display" to="/home">Home</router-link>
      <router-link class="no-display" to="/categories">Categories</router-link> 
      <router-link class="no-display" to="/random">Random</router-link>
      <router-link to="/api" target="_blank">API</router-link> 
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
  background-color:black;
  color: white;
  text-align: center;
  padding: 10px 0;
  border-top: 2px solid #d9d9d9;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.3);


  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-gap: 10px;
  justify-content: center;
}

#footer a {
  color: white;
}

#footer a:hover {
  color: rgb(219, 189, 113);
}
</style>