<template>
  <div class="random">
    <h1>Random</h1>
  </div>
</template>

<script>

// export default {
//     name: 'Random'
// }

import axios from 'axios'

export default {
  name: 'Random',
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {
    axios
        .get('https://api.openbrewerydb.org/breweries?page=1&per_page=1')
        .then(response => {
            this.brewerys = response.data
        })
  },
  computed: {

  },
}


</script>

<style>

.random {
  margin-top: 100px;
}
</style>