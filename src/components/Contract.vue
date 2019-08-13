<template>
  <div id="contract">
    <ul class="contract-list"> 
        <h2>Contract</h2>
        <li v-bind:key="item.id" v-for="item in contractList"> 
            <router-link v-bind:to="'/home/' + item.id"><p class="item">{{ item.name }}</p></router-link>
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
.contract-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.contract {
  height: fit-content;
}
</style>