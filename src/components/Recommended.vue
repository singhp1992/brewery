<template>
    <div id="recommended-page"> 
        <h1 class="transform">Recommended Breweries</h1>
        <p class="transform">{{ brewerys.name }}</p>
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
      .get("https://api.openbrewerydb.org/breweries/" + this.id+1)
      .then(response => {
        console.log(response.data)
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