<template>
  <div class="random">
    <h1>Random</h1>

    <div class="random-info">
        <p>Title: {{ info.name }}</p>
        <p>Type: {{ info.brewery_type }}</p>
        <p>Location: {{ info.street }},  {{ info.state }} </p>
        <p>Contact: +1 {{ info.phone }}</p>
        <p>Website: {{ info.website_url }}</p>
    </div>

    <div class="random-button">
        <button>Another One!</button>
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

.random-button {
    text-align: center;
}

button {
    background-color: #0e0e0e;
    color: white;
    width: 200px;
    height: 50px;
    font-size: 16px;
    -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

</style>

'https://api.openbrewerydb.org/breweries/0002'