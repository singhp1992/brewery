<template>
  <div id="brewpub">
    <h1 class="title">Brew Pub</h1>
    <ul class="category-list brewpub"> 
      <!-- changed Brewpub to be an li element instead of h2 -->
        <li class="category-card"
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
#brewpub {
  padding-top: 25px;
}
/* css in Categories.vue */
</style>