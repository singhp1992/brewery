<template>
  <div id="categories">
    <h1>Categories</h1>
    <Micro :brewerys="brewerys" 
    :microList="microList"/>
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
  computed: {
    microList: function () {
        const micro = [];
        this.brewerys.forEach((item) => {
            if (item.brewery_type === "micro") {
                micro.push(item.name);
            } 
        });
        return micro;
    }
  },
}

</script>

<style>

.categories {
  margin-top: 100px;
}

</style>