<template>
    <div id="reco"> 
        <h3 class="transform">Recommended Breweries</h3>
        <ul :key="item.id"  v-for="item in arizona.slice(7)"> 
          <!-- replaced p & h4 elements with li elements -->
          <li class="transform">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      reco: []
    };
  },
  mounted() {
    axios
      // recommended breweries are based off the state - only fetching other arizona api results
       axios
      // fetching data based on the id of the clicked brewery
      .get("https://api.openbrewerydb.org/breweries/" + (this.id*1+1))
      .then(response => {
          console.log(this.id)
          console.log(response.data)
        this.reco = response.data;
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
