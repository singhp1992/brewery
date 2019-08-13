<template>
    <div id="arizona"> 
        <h3 class="transform">Recommended Breweries in Arizona</h3>
        <p class="transform">{{ arizona[15].name }}</p>
        <p class="transform">{{ arizona[16].name }}</p>
        <p class="transform">{{ arizona[17].name }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      arizona: []
    };
  },
  mounted() {
    axios
    // recommended breweries are based off the state - only fetching other arizona api results
      .get("https://api.openbrewerydb.org/breweries?by_state=arizona")
      .then(response => {
        this.arizona = response.data;
      });
  }
};
</script>

<style>
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