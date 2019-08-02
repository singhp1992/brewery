<template>
  <div id="home">
    <h1> All Breweries </h1>
    <AllBrews msg="work"></AllBrews>
  </div>
</template>

<script>
import AllBrews from '@/components/AllBrews.vue'; // @ is an alias to /src

export default {
  name: 'home',
  components: {
    AllBrews,
  }
  // data () {
  //   return {
  //     li: [
  //     { id: 1, 
  //       title: 'Free State Brewery'
  //     },
  //     { id: 2, 
  //       title: 'Avondale Brewing Co' 
  //     },
  //     { id: 3, 
  //       title: 'DogFish'
  //     }
  //   ]
  //   }
  // }
}


</script>

<style>

#home {
  margin-top: 100px;
}

</style>