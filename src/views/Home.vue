<template>
  <div id="home">
    <h1>All Breweries</h1>
    <!-- Sort filters through breweries based off of the state -->
    <Sort :filterList="filterList" 
    :uniqueItemsList="uniqueItemsList" />
    <!-- Brewerys component fetches data -->
    <Brewerys :brewerys="brewerys"
    :state="state" />
  </div>
</template>

<script>
import Brewerys from "../components/Brewerys";
import Sort from "../components/Sort";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Brewerys,
    Sort
  },
  data() {
    return {
      state: "",
      brewerys: []
    };
  },
  methods: {
    // filters through brewerys that match the corresponded selected state
    filterList: function() {
      this.state = event.target.value;
    }
  },
  mounted() {
    // fetching 10 objects from api 
    axios
      .get("https://api.openbrewerydb.org/breweries?page=1&per_page=10")
      .then(response => {
        this.brewerys = response.data;
      });
  },
  computed: {
    // Revision: Changed the forEach to a map function
    // creating a new array of the states of each brewery
    // if statement avoids any repeating states in the sort list
    uniqueItemsList: function() {
      const states = [];
      this.brewerys.map(item => {
        if (!states.includes(item.state)) {
          states.push(item.state);
        }
      });
      return states;
    }
  }
};
</script>

<style>
#home {
  margin-top: 150px;
  margin-bottom: 150px;
}

h1 {
  color: white;
}
</style>

   