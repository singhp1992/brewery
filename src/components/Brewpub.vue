<template>
  <div id="brewpub">
    <h3 class="title">Brew Pub</h3>
    <ul class="brewpub-list"> 
      <!-- changed Brewpub to be an li element instead of h2 -->
        <li class="card"
        v-bind:key="item.id" 
        v-for="item in brewpubList"> 
            <router-link v-bind:to="'/home/' + item.id"><a class="item">{{ item.name }}</a></router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Brewpub",
  props: ["brewpubList"]
};
</script>

<style>
.brewpub-list {
  /* design css */
  list-style-type: none;
  margin: 0 120px;
  font-size: large;

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-column-gap: 50px;
  justify-content: center;
}

/* card design */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 100px;
  padding-top: 50px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>