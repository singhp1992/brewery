<template>
    <div id="details-page"> 
        <h1>{{ brewerys.name }}</h1>
        <p>Type of Brewery: {{ brewerys.brewery_type }}</p>
        <p>Location: {{ brewerys.street }},  {{ brewerys.state }} </p>
        <p>Contact: +1 {{ brewerys.phone }}</p>
        <p>Website: <a class="random-url" v-bind:href="brewerys.website_url" target="_blank">{{ brewerys.website_url }}</a></p>
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

#details-page {
    margin-top: 100px;
    text-transform: capitalize;
}

</style>