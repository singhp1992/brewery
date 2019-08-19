<template>
  <div id="micro">
    <h1 class="title">Micro Brewery</h1>
    <ul class="category-list"> 
      <!-- Changed Micro to an li element -->
        <li class="category-card"
        v-bind:key="item.id" 
        v-for="item in microList" > 
            <router-link v-bind:to="'/home/' + item.id"><a class="item">{{ item.name }}</a></router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Micro",
  props: ["microList"]
};
</script>

<style>
/* css in Categories.vue */
</style>