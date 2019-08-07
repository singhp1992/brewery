<template>
  <div class="random">
    <h1>Random</h1>

  </div>
</template>

<script>

import axios from 'axios'

function myFunction() {
  var base = "https://api.openbrewerydb.org/breweries/";
  var randomId = Math.floor(Math.random() * 10).toString();;
  var res = base.concat(randomId);
  console.log(res)
}

export default {
  name: 'Random',
  data() {
    return {
      info: null,
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