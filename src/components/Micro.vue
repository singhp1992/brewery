<template>
  <div id="micro">
    <ul class="micro-list" v-bind:key="item.id" v-for="item in microList"> 
        <li> {{ item  }}</li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "Micro",
    props: [
        "brewerys",
        "microList"
    ],
}


</script>

<style>

#micro {
  margin-top: 100px;
}

.micro-list {
  list-style-type: none;
}

</style>