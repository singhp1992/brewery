<template>
  <div id="home">
    <h1> All Breweries </h1>
    <ul>
      <li
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:title="post.title"
      ></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      li: [
      { id: 1, 
        title: 'Free State Brewery'
      },
      { id: 2, 
        title: 'Avondale Brewing Co' 
      },
      { id: 3, 
        title: 'DogFish'
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