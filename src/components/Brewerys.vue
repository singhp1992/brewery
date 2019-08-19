<template>
    <div class="brewerys">
        <ul class="brewery-list">
            <li :key="brewery.id"
            class="card" 
            v-for="brewery in brewerys"
            v-show="state === '' || state === brewery.state"  >
                <router-link v-bind:to="'/home/' + brewery.id"><a>{{ brewery.name }}</a></router-link>
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
  margin: 50px 0 100px 0;
}

.brewery-list {
  /* design css */
  list-style-type: none;
  height: 1000px;
  margin: 0 120px;
  font-size: large;

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-column-gap: 50px;
  justify-content: center;
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

/* card design  */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 100px;
  padding-top: 50px;
  background-color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
