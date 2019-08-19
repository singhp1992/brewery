<template>
    <div id="reco" class="card"> 
      <h3 class="transform">Recommended Breweries</h3>
        <!-- adding all the recommendations to this component so they will be in same div -->
        <FirstReco />
        <SecondReco />
        <ThirdReco />
    </div>
</template>

<script>
import axios from "axios";
import FirstReco from "./FirstReco.vue";
import SecondReco from "./SecondReco.vue";
import ThirdReco from "./ThirdReco.vue";

export default {
  components: {
    FirstReco,
    SecondReco,
    ThirdReco
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
