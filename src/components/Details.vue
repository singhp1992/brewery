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
        .get('https://api.openbrewerydb.org/breweries/' + this.id)
        .then(response => {
            console.log(response.data)
            this.brewerys = response.data
        })
  },
}
</script>

<style>
</style>