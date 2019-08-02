<template>
  <div id="home">
    <h1> All Breweries </h1>
    <Sort />
    <Brewerys v-bind:brewerys="brewerys" />
  </div>
</template>

<script>
import Brewerys from '../components/Brewerys'; 
import Sort from '../components/Sort'

export default {
  name: 'Home',
  components: {
    Brewerys,
    Sort
  },
  methods: {
    filterList: function () {
        this.state = event.target.value;
    }
  },
  computed: {
    uniqueItemsList: function () {
        const states = [];
        this.breweryList.forEach((item) => {
            if (!states.includes(item.state)) {
                states.push(item.state);
            }
        });
        return states;
    }
  },
  data() {
    return {
      brewerys: [
       {
        title: 'Free State Brewery',
        type: 'Micro',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Kansas',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'Avondale Brewing Co',
        type: 'Planning',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Missouri',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'DogFish',
        type: 'Regional',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Oklahoma',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false
    },
    {
        title: 'Coors',
        type: 'Micro',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Texas',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'Heineken',
        type: 'Planning',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'California',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    }
      ]
    }
  }
}

</script>

<style>

#home {
  margin-top: 100px;
}

</style>