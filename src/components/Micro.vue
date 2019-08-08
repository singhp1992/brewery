<template>
  <div id="micro">
    <h1>Micro</h1>
    <ul v-bind:key="item.id" v-for="item in microList"> 
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

</style>