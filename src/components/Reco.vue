<template>
    <div id="recommended-page"> 
        <h1 class="transform">Recommended Breweries</h1>
        <p class="transform">{{ arizona[0].name }}</p>
        <p class="transform">{{ arizona[1].name }}</p>
        <p class="transform">{{ arizona[2].name }}</p>
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
      .get("https://api.openbrewerydb.org/breweries?by_state=arizona")
      .then(response => {
        console.log(response.data)
        this.arizona = response.data;
      });
  },
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