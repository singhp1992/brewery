<template>
    <div id="details-page">
        <div id="deets">
            <h3 class="transform">{{ brewerys.name }}</h3>
            <p class="transform">Type of Brewery: {{ brewerys.brewery_type }}</p>
            <p class="transform">Address: {{ brewerys.street }} </p>
            <p> {{ brewerys.state }} </p>
            <p>Contact: +1 {{ brewerys.phone }}</p>
            <p>Website: <a class="details-p" v-bind:href="brewerys.website_url" target="_blank">{{ brewerys.website_url }}</a></p>
                <div class="back-button">
                    <!-- on click will go back to previous page (either home or categories page) -->
                    <button @click="$router.go(-1)">Back</button>
                </div>
        </div> 
        <!-- recommendations will only appear based off the state of the brewery selected on the details page -->
        <ArizonaReco v-if="brewerys.state === 'Arizona'"/>
        <AlabamaReco :alabamaList="alabamaList"  v-if="brewerys.state === 'Alabama'"/>
        <AlaskaReco v-if="brewerys.state === 'Alaska'"/>
    </div>
</template>

<script>
import axios from "axios";
import ArizonaReco from "./ArizonaReco.vue";
import AlabamaReco from "./AlabamaReco.vue";
import AlaskaReco from "./AlaskaReco.vue";

export default {
  name: "Details",
  components: {
    ArizonaReco,
    AlabamaReco,
    AlaskaReco
  },
  data() {
    return {
      id: this.$route.params.id,
      brewerys: [],
      alabama: []
    };
  },
  mounted() {
    axios
      // fetching data based on the id of the clicked brewery
      .get("https://api.openbrewerydb.org/breweries/" + this.id)
      .then(response => {
        this.brewerys = response.data;
      });
    axios
      // fetching all brewerys in alabama for recommendations
      .get("https://api.openbrewerydb.org/breweries?by_state=alabama")
      .then(response => {
        this.alabama = response.data;
      });
  },
  // add computed parts here - from categories view
  // pass through function as props to alabama reco
  computed: {
    alabamaList: function() {
      const newList = [];
      this.alabama.map(item => {
        if (
          item.name !== "Avondale Brewing Co" &&
          item.name !== "Band of Brothers Brewing Company" &&
          item.name !== "Trim Tab Brewing" &&
          item.name !== "Yellowhammer Brewery"
        ) {
          newList.push(item);
        }
      });
      return newList;
    },
    randomAlabama: function() {}
  }
};
</script>

<style>
#details-page {
  margin-top: 150px;
  display: inline-flex;
}

#deets,
#arizona,
#alabama,
#alaska {
  margin: 0 75px;
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
  font-family: "Roboto Mono", monospace, sans-serif;
}

@media (max-width: 1024px) {
  #details-page {
    display: inline-block;
  }

  #arizona,
  #alabama,
  #alaska {
    margin: 100px 0;
  }
}
</style>