<template>
    <div class="brewerys">
        <ul class="brewery-list">
            <li :key="brewery.id" 
            v-for="brewery in brewerys"
            v-show="state === '' || state === brewery.state"  >
                <router-link v-bind:to="'/home/' + brewery.id"><h4>{{ brewery.name }}</h4></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Brewerys",
  props: ["brewerys", "state"]
};
</script>

<style scoped>
.brewerys {
  text-align: center;
  margin: auto;
  margin-bottom: 100px;
}

.brewery-list {
  list-style-type: none;
  padding-left: 0;
}

h4 {
  cursor: pointer;
}

a {
  color: black;
}

a:hover {
  color: darkgrey;
}
</style>
