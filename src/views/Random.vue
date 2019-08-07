<template>
  <div class="random">
    <h1>Random</h1>

    <p> {{ info }} </p> 
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
</style>

'https://api.openbrewerydb.org/breweries/0002'