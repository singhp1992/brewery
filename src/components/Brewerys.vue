<template>
    <div class="brewerys">
        <ul class="brewery-list">
            <li :key="brewery.id" 
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
  margin: 20px 0 100px 0;
}

.brewery-list {
  /* design css */
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 350px;
  margin: 0 120px;
  justify-content: space-around;
  font-size: large;

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 10px;
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

/* @media screen and (max-width: 414px) and (min-width: 319px) {
  .brewery-list {
    display: inline;
  }

  li {
    margin-top: 20px;
  }
} */
</style>
