<template>
  <div id="micro">
    <h1>Micro</h1>
    <ul :key="brewery.id" 
    v-for="brewery in brewerys"> 
        <li> {{ brewery.brewery_type }}</li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "Micro",
    props: [
        "brewerys",
    ],
}


</script>

<style>

#micro {
  margin-top: 100px;
}

</style>