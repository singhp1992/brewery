<template>
  <div id="categories">
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
      // empty array to push api data
      brewerys: []
    };
  },
  mounted() {
    // fetching api data
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
.organized {
  width: 100%;
}

.title {
  color: white;
}

.organized > div {
  margin: 10px;
}

#categories {
  height: fit-content;
  margin-top: 150px;
  margin-bottom: 100px;
}

/* css used in Micro,Brewpub,Contract component */
.category-list {
  /* design css */
  list-style-type: none;
  margin: 0 120px;
  font-size: large;

  /* grid css layout */
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  justify-content: center;
}

.category-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 100px;
  padding-top: 50px;
  background-color: white;
  border-radius: 25px;
}

.category-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.item {
  font-size: 20px;
}

.organized a {
  padding-top: 50px;
  padding-bottom: 75px;
}

/* individually colored links */
.category-list li:nth-child(1) a {
  color: #f96714;
}

.category-list li:nth-child(2) a {
  color: #c62168;
}

.category-list li:nth-child(3) a {
  color: #1ac373;
}

.category-list li:nth-child(4) a {
  color: #8699f6;
}

.category-list li:nth-child(5) a {
  color: #006e6d;
}

.category-list li:nth-child(6) a {
  color: #ad4d10;
}

.category-list li:nth-child(7) a {
  color: #c64363;
}

.category-list li:nth-child(8) a {
  color: #89b64d;
}

.brewpub li:nth-child(1) a {
  color: #2f20c5;
}

.contract li:nth-child(1) a {
  color: #b57cc7;
}
</style>