<template>
  <div id="nav">
    <router-link to="/">Welcome</router-link>  
    <router-link to="/home">Breweries</router-link>  
    <router-link to="/categories">Categories</router-link>  
    <router-link to="/random">Random</router-link>  
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
#nav {
  /* design css */
  padding: 30px;
  position: fixed;
  text-align: center;
  margin-left: -30px;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  background-color: black;
  color: white;
  border-bottom: 2px solid #d9d9d9;
  z-index: 10;
  font-size: x-large;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-gap: 10px;
  justify-content: center;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 0 10px;
}

a:hover,
#nav a.router-link-exact-active {
  color: #E48252;
}
</style>