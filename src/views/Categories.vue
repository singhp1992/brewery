<template>
  <div id="categories">
    <h1>Categories</h1>
    <div class="organized">
      <Micro :brewerys="brewerys" 
      :microList="microList"/>
      <Brewpub :brewerys="brewerys" 
      :brewpubList="brewpubList"/>
       <Planning :brewerys="brewerys" 
      :planningList="planningList"/>
    </div>
  </div>
</template>

<script>
import Micro from '../components/Micro'
import Brewpub from '../components/Brewpub'
import Planning from '../components/Planning'
import axios from 'axios'


export default {
  name: 'Categories',
  components: {
    Micro,
    Brewpub,
    Planning
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
    planningList: function () {
        const planning = [];
        this.brewerys.forEach((item) => {
            if (item.brewery_type === "planning") {
                planning.push(item.name);
            } 
        });
        return planning;
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