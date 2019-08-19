<template>
  <div id="contract">
    <h3 class="title">Contract Brewery</h3>
    <ul class="list"> 
      <!-- Changed Contract to be an li element -->
        <li class="card" 
        v-bind:key="item.id" 
        v-for="item in contractList"> 
            <router-link v-bind:to="'/home/' + item.id"><a class="item">{{ item.name }}</a></router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contract",
  props: ["contractList"]
};
</script>

<style>
/* css in categories view */
</style>