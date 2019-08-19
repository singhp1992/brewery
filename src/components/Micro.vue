<template>
  <div id="micro">
    <h3 class="title">Micro Brewery</h3>
    <ul class="list"> 
      <!-- Changed Micro to an li element -->
        <li class="card"
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
/* css in categories view */
</style>