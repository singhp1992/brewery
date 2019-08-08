<template>
  <div id="categories">
    <h1>Categories</h1>
    <div class="organized">
      <Micro :brewerys="brewerys" 
      :microList="microList"/>
      <Brewpub :brewerys="brewerys" 
      :brewpubList="brewpubList"/>
      <Contract :brewerys="brewerys" 
      :contractList="contractList"/>
      <Bar :brewerys="brewerys" 
      :barList="barList"/>
    </div>
  </div>
</template>

<script>
import Micro from '../components/Micro'
import Brewpub from '../components/Brewpub'
import Contract from '../components/Contract'
import Bar from '../components/Bar'
import axios from 'axios'


export default {
  name: 'Categories',
  components: {
    Micro,
    Brewpub,
    Contract,
    Bar
  }, 
  data() {
    return {
      brewerys: [],
    }
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
    },
    barList: function () {
        const bar = [];
        this.brewerys.forEach((item) => {
            if (item.brewery_type === "bar") {
                bar.push(item.name);
            } 
        });
        return bar;
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