<template>
    <div id="details-page"> 
        <h1 class="transform">{{ brewerys.name }}</h1>
        <p class="transform">Type of Brewery: {{ brewerys.brewery_type }}</p>
        <p class="transform">Location: {{ brewerys.street }},  {{ brewerys.state }} </p>
        <p>Contact: +1 {{ brewerys.phone }}</p>
        <p>Website: <a class="details-p" v-bind:href="brewerys.website_url" target="_blank">{{ brewerys.website_url }}</a></p>
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
}

.transform {
  text-transform: capitalize;
}

.details-p {
  color: blue;
}

.details-p:visited {
  color: black;
}

</style>