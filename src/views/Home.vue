<template>
  <div id="home">
    <h1> All Breweries </h1>
    <Places v-bind:places="places" />
  </div>
</template>

<script>
import Places from '../components/Places'; 

export default {
  name: 'Home',
  components: {
    Places
  },
  data() {
    return {
      places: [
        { 
          id: 1, 
          title: 'Free State Brewery',
        },
        { 
          id: 2, 
          title: 'Avondale Brewing Co',
        },
        { 
          id: 3, 
          title: 'DogFish',
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