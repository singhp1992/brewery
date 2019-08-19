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
  height: fit-content;
  margin: 0 120px;
  font-size: large;

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-column-gap: 50px;
  grid-row-gap: 25px;
  justify-content: center;
}

h4 {
  cursor: pointer;
}

a {
  padding-top: 50px;
  padding-bottom: 75px;
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
  border-radius: 25px;
}

.card:hover {
  box-shadow: 0 10px 20px 0 rgba(255, 254, 254, 0.3);
}

/* individually colored links */
.brewery-list li:nth-child(1) a {
  color: #f96714;
}

.brewery-list li:nth-child(2) a {
  color: #c62168;
}

.brewery-list li:nth-child(3) a {
  color: #1ac373;
}

.brewery-list li:nth-child(4) a {
  color: #8699f6;
}

.brewery-list li:nth-child(5) a {
  color: #006e6d;
}

.brewery-list li:nth-child(6) a {
  color: #ad4d10;
}

.brewery-list li:nth-child(7) a {
  color: #c64363;
}

.brewery-list li:nth-child(8) a {
  color: #89b64d;
}

.brewery-list li:nth-child(9) a {
  color: #2f20c5;
}

.brewery-list li:nth-child(10) a {
  color: #b57cc7;
}
</style>
