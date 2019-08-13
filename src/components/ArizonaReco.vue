<template>
    <div id="arizona"> 
        <h3 class="transform">Recommended Breweries in Arizona</h3>
        <div> 
          <h4 class="transform">1. {{ arizona[14].name }}</h4>
          <p class="transform">{{ arizona[14].street }}</p>
          <p><a class="details-p" v-bind:href="arizona[14].website_url" target="_blank">{{ arizona[14].website_url }}</a></p>
        </div>
        <div> 
          <h4 class="transform">2. {{ arizona[16].name }}</h4>
          <p class="transform">{{ arizona[16].street }}</p>
          <p>{{ arizona[16].website_url }}</p>
        </div>
        <div> 
          <h4 class="transform">3. {{ arizona[17].name }}</h4>
          <p class="transform">{{ arizona[17].street }}</p>
          <p>{{ arizona[17].website_url }}</p>
        </div>
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