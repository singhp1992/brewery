<template>
  <div id="micro">
    <ul class="micro-list"> 
      <!-- Changed Micro to an li element -->
        <li class="title">Micro</li>
        <li v-bind:key="item.id" 
        v-for="item in microList" > 
            <router-link v-bind:to="'/home/' + item.id"><p class="item">{{ item.name }}</p></router-link>
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
.micro-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.title {
  font-size: 30px;
  font-weight: bold;
}
</style>