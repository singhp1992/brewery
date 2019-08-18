<template>
    <div id="footer">
      <router-link to="/home">Home</router-link> |
      <router-link to="/categories">Categories</router-link> | 
      <router-link to="/random">Random</router-link> |
      <router-link to="/api" target="_blank">API Documentation</router-link> | 
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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  z-index: 10;
  height: 5%;
  padding-top: 10px;
  border-top: 2px solid black;
  box-shadow: 0 -5px 16px 0px rgba(0, 0, 0, 0.3);
}

#footer a {
  color: goldenrod;
}

@media screen and (max-width: 414px) and (min-width: 319px) {
  #footer {
    display: none;
  }
}
</style>