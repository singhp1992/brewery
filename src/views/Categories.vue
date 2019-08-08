<template>
  <div id="categories">
    <h1>Categories</h1>
    <div class="organized">
      <Micro :microList="microList"/>
      <Brewpub :brewpubList="brewpubList"/>
      <Contract :contractList="contractList"/>
      <Bar :barList="barList"/>
    </div>
  </div>
</template>

<script>
import Micro from '../components/Micro'
import Brewpub from '../components/Brewpub'
import Contract from '../components/Contract'
import axios from 'axios'


export default {
  name: 'Categories',
  components: {
    Micro,
    Brewpub,
    Contract,
  }, 
  data() {
    return {
      brewerys: [],
    }
  },
  mounted() {
    axios
        .get('https://api.openbrewerydb.org/breweries?page=1&per_page=100')
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
        
    },
    brewpubList: function () {
        const brewpub = [];
        this.brewerys.forEach((item) => {
            if (item.brewery_type === "brewpub") {
                brewpub.push(item.name);
            } 
        });
        return brewpub;
    },
    contractList: function () {
        const contract = [];
        this.brewerys.forEach((item) => {
            if (item.brewery_type === "contract") {
                contract.push(item.name);
            } 
        });
        return contract;
    }
  },
}

</script>

<style>

.organized {
  display: inline-flex;
}

#categories {
  margin-top: 100px;
}

</style>