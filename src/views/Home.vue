<template>
  <div id="home">
    <h1> All Breweries </h1>
    <Sort :filterList="filterList" 
    :uniqueItemsList="uniqueItemsList" />
    <Brewerys :brewerys="brewerys"
    :state="state" />
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
      brewerys: []
    }
  },
  methods: {
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

      // brewerys: [
      //       {
      //         title: 'Free State Brewery',
      //         type: 'Micro',
      //         address: '1234 Happy Street',
      //         city: 'Springfield',
      //         state: 'Kansas',
      //         phone: '01234567',
      //         website_url: 'http://www.beer.com',
      //         showDetail: false,
      //     },
      //     {
      //         title: 'Avondale Brewing Co',
      //         type: 'Planning',
      //         address: '1234 Happy Street',
      //         city: 'Springfield',
      //         state: 'Missouri',
      //         phone: '01234567',
      //         website_url: 'http://www.beer.com',
      //         showDetail: false,
      //     },
      //     {
      //         title: 'DogFish',
      //         type: 'Regional',
      //         address: '1234 Happy Street',
      //         city: 'Springfield',
      //         state: 'Oklahoma',
      //         phone: '01234567',
      //         website_url: 'http://www.beer.com',
      //         showDetail: false
      //     },
      //     {
      //         title: 'Coors',
      //         type: 'Micro',
      //         address: '1234 Happy Street',
      //         city: 'Springfield',
      //         state: 'Texas',
      //         phone: '01234567',
      //         website_url: 'http://www.beer.com',
      //         showDetail: false,
      //     },
      //     {
      //         title: 'Heineken',
      //         type: 'Planning',
      //         address: '1234 Happy Street',
      //         city: 'Springfield',
      //         state: 'California',
      //         phone: '01234567',
      //         website_url: 'http://www.beer.com',
      //         showDetail: false,
      //     }
      //]