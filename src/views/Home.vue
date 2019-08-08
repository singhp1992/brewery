<template>
  <div id="home">
    <h1> All Breweries </h1>
    <Sort :filterList="filterList" 
    :uniqueItemsList="uniqueItemsList" />
    <Brewerys :brewerys="brewerys"
    :state="state"
    :moreInfo="moreInfo" />
  </div>
</template>

<script>

import Brewerys from '../components/Brewerys'; 
import Sort from '../components/Sort'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Brewerys,
    Sort
  },
  data() {
    return {
      state: '',
      brewerys: [],
      showDetail: false
    }
  },
  methods: {
    // moreInfo: function () {
    //   document.getElementById("toggle").style.display="inline"
    // },
    toggleDetails: function (brewery) {
      brewery.showDetail = !brewery.showDetail
    },
    filterList: function () {
      this.state = event.target.value;
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
    uniqueItemsList: function () {
        const states = [];
        this.brewerys.forEach((item) => {
            if (!states.includes(item.state)) {
                states.push(item.state);
            }
        });
        return states;
    }
  },
}

</script>

<style>

#home {
  margin-top: 100px;
}

</style>

   