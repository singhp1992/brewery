<template>
  <div class="random">
    <h1>Random</h1>
    <div class="random-info">
        <p class="transform">Title: {{ info.name }}</p>
        <p class="transform">Type: {{ info.brewery_type }}</p>
        <p class="transform">Location: {{ info.street }},  {{ info.state }} </p>
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
      info: null,
    }
  },
  methods: {
    fetchAnother(){
      axios
      .get("https://api.openbrewerydb.org/breweries/".concat(Math.floor(Math.random() * 6000).toString()))
      .then(response => {
            this.info = response.data
        })
    }
  },
  mounted() {
    axios
        .get("https://api.openbrewerydb.org/breweries/".concat(Math.floor(Math.random() * 100).toString()))
        .then(response => {
            this.info = response.data
            console.log(this.info)
        })
  },
}


</script>

<style>

.random {
  margin-top: 100px;
}

.random-info {
  margin-top: 50px;
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
    margin-top: 100px;
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

'https://api.openbrewerydb.org/breweries/0002'