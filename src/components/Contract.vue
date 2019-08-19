<template>
  <div id="contract">
    <h1 class="title">Contract Brewery</h1>
    <ul class="category-list"> 
      <!-- Changed Contract to be an li element -->
        <li class="category-card" 
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
#contract {
  padding-top: 25px;
}
/* css in categories view */
</style>