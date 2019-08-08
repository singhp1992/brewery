<template>
  <div id="categories">
    <h1>Categories</h1>
    <Micro :brewerys="brewerys"
    :state="state" />
  </div>
</template>

<script>
import Micro from '../components/Micro'
import axios from 'axios'


export default {
  name: 'Categories',
  components: {
    Micro
  }, 
  data() {
    return {
      state: '',
      brewerys: [],
    }
  },
  methods: {
  },
  mounted() {
    axios
        .get('https://api.openbrewerydb.org/breweries?page=1&per_page=10')
        .then(response => {
            this.brewerys = response.data
        })
  },
}

</script>

<style>

.categories {
  margin-top: 100px;
}

</style>