<template>
  <div id="micro">
     <h3 class="title">Micro</h3>
    <ul class="micro-list"> 
      <!-- Changed Micro to an li element -->
        <li class="card"
        v-bind:key="item.id" 
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
  /* design css */
  list-style-type: none;
  padding-left: 0;
  /* text-align: left; */

    /* grid css */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  justify-content: center;
}

.title {
  font-size: 30px;
  font-weight: bold;
}

/* card design  */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 200px;
  /* padding-top: 50px; */
  /* margin-bottom: 100px; */
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>