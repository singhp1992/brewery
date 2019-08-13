<template>
    <div id="recommended-page"> 
        <h1 class="transform">{{ brewerys.name }}</h1>
        <p class="transform">Type of Brewery: {{ brewerys.brewery_type }}</p>
        <p class="transform">Address: {{ brewerys.street }} </p>
        <p> {{ brewerys.state }} </p>
        <p>Contact: +1 {{ brewerys.phone }}</p>
        <p>Website: <a class="details-p" v-bind:href="brewerys.website_url" target="_blank">{{ brewerys.website_url }}</a></p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      brewerys: []
    };
  },
  mounted() {
    axios
      .get("https://api.openbrewerydb.org/breweries/" + this.id)
      .then(response => {
        this.brewerys = response.data;
      });
  }
};
</script>

<style>
#recommended-page {
  margin-top: 200px;
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