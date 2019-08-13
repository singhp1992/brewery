<template>
  <div id="categories">
    <h1>Categories</h1>
    <p>Types of Breweries</p>
    <div class="organized">
      <Micro :microList="microList"/>
      <Brewpub :brewpubList="brewpubList"/>
      <Contract :contractList="contractList"/>
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
  computed: {
    microList: function() {
      const micro = [];
      this.brewerys.forEach(item => {
        if (item.brewery_type === "micro") {
          micro.push(item);
        }
      });
      return micro;
    },
    brewpubList: function() {
      const brewpub = [];
      this.brewerys.forEach(item => {
        if (item.brewery_type === "brewpub") {
          brewpub.push(item);
        }
      });
      return brewpub;
    },
    contractList: function() {
      const contract = [];
      this.brewerys.forEach(item => {
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
h2 {
  text-decoration: underline;
}

.item {
  color: black;
}

.item:hover {
  color: darkgray;
}

.organized {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.organized > div {
  margin: 10px;
}

#categories {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>