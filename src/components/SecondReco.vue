<template>
    <div id="reco"> 
        <!-- replaced p & h4 elements with li elements -->
        <p class="transform">2. {{ reco2.name }}</p>
        <p> {{ reco2.street }}</p>
        <p> {{ reco2.city }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      reco2: []
    };
  },
  mounted() {
    axios
      // Second Recommendation
      // fetching recommended breweries based off of id number close to this.id
      // api data is organized by state
      .get("https://api.openbrewerydb.org/breweries/" + (this.id * 1 + 2))
      .then(response => {
        console.log(this.id);
        console.log(response.data);
        this.reco2 = response.data;
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
