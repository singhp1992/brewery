<template>
  <div class="random">
    <h1>Random</h1>

  </div>
</template>

<script>

import axios from 'axios'
const baseURL = "https://api.openbrewerydb.org/breweries/"

function randomRandy() {
  return Math.floor(Math.random() * 10).toString();
}
console.log(randomRandy("y"))

export default {
  name: 'Random',
  data() {
    return {
      info: null,
      baseURL: "https://api.openbrewerydb.org/breweries/",
    }
  },
  methods: {
  },
  mounted() {
    axios
        .get('https://api.openbrewerydb.org/breweries/')
        .then(response => {
            this.info = response.data
        })
  },
  computed: {
    randomIds: function () {
      return Math.floor(Math.random() * 10).toString()
    },    
  },
}


</script>

<style>

.random {
  margin-top: 100px;
}
</style>

'https://api.openbrewerydb.org/breweries/0002'