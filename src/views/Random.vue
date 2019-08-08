<template>
  <div class="random">
    <h1 class="transform">{{ info.name }}</h1>
    <div class="random-info">
        <p class="transform">Type: {{ info.brewery_type }}</p>
        <p class="transform">Address: {{ info.street }} </p> 
        <p> {{ info.state }} </p>
        <p>Contact: +1 {{ info.phone }}</p>
        <p>Website: <a class="random-url" v-bind:href="info.website_url" target="_blank">{{ info.website_url }}</a></p>
    </div>
    <div class="random-button">
        <button v-on:click="fetchAnother()">Another One!</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Random',
  data() {
    return {
      info: []
    }
  },
  methods: {
    fetchAnother(){
      axios
      .get("https://api.openbrewerydb.org/breweries/".concat(Math.floor(Math.random() * 650).toString()))
      .then(response => {
            this.info = response.data
        })
    }
  },
  mounted() {
    axios
        .get("https://api.openbrewerydb.org/breweries/".concat(Math.floor(Math.random() * 650).toString()))
        .then(response => {
            this.info = response.data
        })
  },
}


</script>

<style>

.random {
  margin-top: 100px;
}

.random-info {
  margin-top: 20px;
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
    font-family: 'Roboto Mono', monospace, sans-serif;
}

</style>

