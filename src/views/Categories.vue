<template>
  <div id="categories">
    <p>Types of Breweries</p>
    <div class="organized">
      <Micro :microList="microList"/>
      <!-- <Brewpub :brewpubList="brewpubList"/>
      <Contract :contractList="contractList"/> -->
    </div>
  </div>
</template>

<script>
import Micro from "@/components/Micro.vue";
import Brewpub from "@/components/Brewpub.vue";
import Contract from "@/components/Contract.vue";
import axios from "axios";

export default {
  name: "Categories",
  components: {
    Micro,
    Brewpub,
    Contract
  },
  data() {
    return {
      brewerys: []
    };
  },
  mounted() {
    axios
      .get("https://api.openbrewerydb.org/breweries?page=1&per_page=10")
      .then(response => {
        this.brewerys = response.data;
      });
  },
  // Revision: changed all the foreach functions to map
  // each list function creates an array of brewerys based on their type
  computed: {
    microList: function() {
      const micro = [];
      this.brewerys.map(item => {
        if (item.brewery_type === "micro") {
          micro.push(item);
        }
      });
      return micro;
    },
    brewpubList: function() {
      const brewpub = [];
      this.brewerys.map(item => {
        if (item.brewery_type === "brewpub") {
          brewpub.push(item);
        }
      });
      return brewpub;
    },
    contractList: function() {
      const contract = [];
      this.brewerys.map(item => {
        if (item.brewery_type === "contract") {
          contract.push(item);
        }
      });
      return contract;
    }
  }
};
</script>

<style>
.item {
  color: black;
}

.item:hover {
  color: darkgray;
}

.organized {
  width: 100%;
}

.organized > div {
  margin: 10px;
}

#categories {
  margin-top: 130px;
  margin-bottom: 100px;
}

#brewpub {
  height: fit-content;
}
</style>