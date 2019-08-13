<template>
    <div id="recommended-page"> 
        <h1 class="transform">Recommended Breweries</h1>
        <p class="transform">{{ alabama[15].name }}</p>
        <p class="transform">{{ alabama[16].name }}</p>
        <p class="transform">{{ alabama[17].name }}</p>
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
      .get("https://api.openbrewerydb.org/breweries?by_state=alabama")
      .then(response => {
        this.alabama = response.data;
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