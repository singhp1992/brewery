<template>
  <div id="home">
    <h1> All Breweries </h1>
    <HelloWorld msg="work"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: 'home',
  components: {
    HelloWorld,
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