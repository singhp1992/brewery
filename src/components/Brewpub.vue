<template>
  <div id="brewpub">
    <ul class="brewpub-list"> 
        <h2>Brewpub</h2>
        <li v-bind:key="item.id" v-for="item in brewpubList"> 
            <router-link v-bind:to="'/home/' + item.id"><p class="item">{{ item.name }}</p></router-link>
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
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.brewpub {
  height: fit-content;
}
</style>