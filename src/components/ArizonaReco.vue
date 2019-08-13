<template>
    <div id="arizona"> 
        <h3 class="transform">Recommended Breweries in Arizona</h3>
        <!-- only looping through the last three items to avoid repetition -->
        <ul :key="item.id"  v-for="item in arizona.slice(7)"> 
          <h4 class="transform">{{ item.name }}</h4>
          <p class="transform">{{ item.street }}, {{ item.city }}</p>
          <p><a class="details-p" v-bind:href="item.website_url" target="_blank">{{ item.website_url }}</a></p>
        </ul>
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
      .get(
        "https://api.openbrewerydb.org/breweries?by_state=arizona&page=1&per_page=10"
      )
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

ul {
  padding-left: 0;
}
</style>

