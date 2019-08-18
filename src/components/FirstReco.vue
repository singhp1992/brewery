<template>
    <div id="reco"> 
      <h3 class="transform">Recommended Breweries</h3>
        <!-- replaced p & h4 elements with li elements -->
        <p class="transform">1. {{ reco1.name }}</p>
        <p> {{ reco1.street }}</p>
        <p> {{ reco1.city }}</p>
        <SecondReco />
    </div>
</template>

<script>
import axios from "axios";
import SecondReco from './SecondReco.vue'

export default {
  components: {
    SecondReco,
  },
  data() {
    return {
      id: this.$route.params.id,
      reco1: []
    };
  },
  mounted() {
    axios
      // fetching recommended breweries based off of id number close to this.id
      .get("https://api.openbrewerydb.org/breweries/" + (this.id * 1 + 1))
      .then(response => {
        console.log(this.id);
        console.log(response.data);
        this.reco1 = response.data;
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
