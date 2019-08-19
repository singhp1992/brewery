<template>
    <div id="details-page">
        <div id="deets" class="details-card">
            <h3 class="transform">{{ brewerys.name }}</h3>
            <p class="transform">Type of Brewery: {{ brewerys.brewery_type }}</p>
            <p class="transform">Address: {{ brewerys.street }} </p>
            <p> {{ brewerys.state }} </p>
            <p>Contact: +1 {{ brewerys.phone }}</p>
            <p class="web">Website: <a class="details-p" v-bind:href="brewerys.website_url" target="_blank">{{ brewerys.website_url }}</a></p>
            <div class="back-button">
                <!-- on click will go back to previous page (either home or categories page) -->
                <button @click="$router.go(-1)">Back</button>
            </div>
        </div> 
        <AllRecos />
    </div>
</template>

<script>
import axios from "axios";
import AllRecos from "./AllRecos.vue";

export default {
  name: "Details",
  components: {
    AllRecos
  },
  data() {
    return {
      id: this.$route.params.id,
      brewerys: []
    };
  },
  mounted() {
    axios
      // fetching data based on the id of the clicked brewery
      .get("https://api.openbrewerydb.org/breweries/" + this.id)
      .then(response => {
        this.brewerys = response.data;
      });
  }
};
</script>

<style>
#details-page {
  /* design css */
  margin-top: 130px;
  height: 100%;

  /* grid css */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  justify-content: center;
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

.back-button {
  text-align: center;
  margin-top: 50px;
}

button {
  background-color: #0e0e0e;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 16px;
  -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  font-family: "Livvic", sans-serif;
}

/* card design  */
.details-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 400px;
  padding-top: 50px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 25px;
}

.details-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>