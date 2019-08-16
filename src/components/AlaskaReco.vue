<template>
    <div id="alaska"> 
        <h3 class="transform">Recommended Breweries in Alaska</h3>
        <!-- only looping through the last three items to avoid repetition -->
        <ul :key="item.id"  v-for="item in alaska.slice(7)"> 
          <!-- replaced p & h4 elements with li elements -->
          <li class="transform">{{ item.name }}</li>
          <li class="transform">{{ item.street }}, {{ item.city }}</li>
          <li><a class="details-p" v-bind:href="item.website_url" target="_blank">{{ item.website_url }}</a></li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      alaska: []
    };
  },
  mounted() {
    axios
      // recommended breweries are based off the state - only fetching other alaska api results
      .get(
        "https://api.openbrewerydb.org/breweries?by_state=alaska&page=1&per_page=10"
      )
      .then(response => {
        this.alaska = response.data;
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

li {
  list-style-type: none;
}
</style>