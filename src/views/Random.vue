<template>
  <div id="random">
    <div class="random-info card">
      <h1 class="transform">{{ info.name }}</h1>
      <p class="transform">Type: {{ info.brewery_type }}</p>
      <p class="transform">Address: {{ info.street }} </p> 
      <p> {{ info.state }} </p>
      <p>Contact: +1 {{ info.phone }}</p>
      <p>Website: <a class="random-url" v-bind:href="info.website_url" target="_blank">{{ info.website_url }}</a></p>
      <div class="random-button">
        <button v-on:click="fetchAnother()">Another One!</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Random",
  data() {
    return {
      info: []
    };
  },
  methods: {
    // on button click will concatenate a new, random id to the api call
    fetchAnother() {
      axios
        .get(
          "https://api.openbrewerydb.org/breweries/".concat(
            Math.floor(Math.random() * 600).toString()
          )
        )
        .then(response => {
          this.info = response.data;
        });
    }
  },
  mounted() {
    axios
      // accessing random page will provide a random id to the end of the api call
      .get(
        "https://api.openbrewerydb.org/breweries/".concat(
          Math.floor(Math.random() * 600).toString()
        )
      )
      .then(response => {
        this.info = response.data;
      });
  }
};
</script>

<style>
#random {
  /* design css */
  margin-top: 130px;
  height: 100%;

  /* grid css */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
}

.transform {
  text-transform: capitalize;
}

.random-url {
  color: blue;
}

.random-url:visited {
  color: black;
}

.random-button {
  text-align: center;
  margin-top: 50px;
}

button {
  background-color: #0e0e0e;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 16px;
  -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  font-family: "Livvic", sans-serif;
}

/* card design  */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 400px;
  height: 400px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>

