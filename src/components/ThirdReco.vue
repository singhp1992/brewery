<template>
    <div id="reco"> 
        <!-- replaced p & h4 elements with li elements -->
        <p class="transform">3. {{ reco3.name }}</p>
        <p> {{ reco3.street }}</p>
        <p> {{ reco3.city }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      reco3: []
    };
  },
  mounted() {
    axios
      // Third recommendation
      // fetching recommended breweries based off of id number close to this.id
      .get("https://api.openbrewerydb.org/breweries/" + (this.id * 1 + 3))
      .then(response => {
        console.log(this.id);
        console.log(response.data);
        this.reco3 = response.data;
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
