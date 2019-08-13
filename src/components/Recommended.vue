<template>
    <div id="recommended-page"> 
        <h1 class="transform">Recommended Breweries</h1>
        <p class="transform">{{ reco1.name }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      reco1: []
    };
  },
  mounted() {
    axios
      .get("https://api.openbrewerydb.org/breweries/" + this.id*1+1)
      .then(response => {
        console.log(response.data);
        console.log(this.id*1+1)
        this.reco1 = response.data;
      });
  }
};
</script>

<style>
#recommended-page {
  margin-bottom: 200px;
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