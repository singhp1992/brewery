<template>
  <div id="home">
    <h1> All Breweries </h1>
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from '../components/Todos'; 

export default {
  name: 'Home',
  components: {
    Todos
  },
  data() {
    return {
      todos: [
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