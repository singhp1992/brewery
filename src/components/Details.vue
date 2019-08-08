<template>
    <div id="details-page"> 
        <h1></h1>
        <p> </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            brewerys: []
        }
    },
    mounted() {
        axios
        .get('https://api.openbrewerydb.org/breweries?page=1&per_page=10')
        .then(response => {
            this.brewerys = response.data
        })
  },
}
</script>

<style>
</style>