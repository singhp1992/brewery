<template>
  <div id="nav">
        <router-link to="/">Welcome</router-link>  
        <router-link to="/home">All Breweries</router-link>  
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
  border-bottom: 2px solid black;
  z-index: 10;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}

#nav {
  display: grid;
  max-width: 100%;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 20px;
}

/* make sure that the mobile screens dont cut out */

a {
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 0 10px;
}

a:visited {
  color: white;
}

#nav a.router-link-exact-active {
  color: purple;
}

/* @media screen and (max-width: 414px) and (min-width: 319px) {
  /* need to be more precise with nav bar */
/* WHY IS CATEGORIES DISAPPEARING ONLY ON MEDIAQUERY */

/* #nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    width: 100%;
  }

  a {
    padding: 10px;
  }
}  */
</style>