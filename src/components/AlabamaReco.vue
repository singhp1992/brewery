<template>
    <div id="alabama"> 
        <h3 class="transform">Recommended Breweries in Alabama</h3>
        <!-- only looping through the last three items to avoid repetition -->
        <ul :key="item.id"  v-for="item in alabama.slice(7)"> 
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
      alabama: []
    };
  },
  mounted() {
    axios
      // recommended breweries are based off the state - only fetching other alabama api results
      .get(
        "https://api.openbrewerydb.org/breweries?by_state=alabama&page=1&per_page=10"
      )
      .then(response => {
        this.alabama = response.data;
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