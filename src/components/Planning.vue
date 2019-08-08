<template>
  <div id="brewpub">
    <ul class="brewpub-list"> 
        <h3>Brewpub</h3>
        <li v-bind:key="item.id" v-for="item in brewpubList"> 
            <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "Brewpub",
    props: [
        "brewerys",
        "brewpubList"
    ],
}


</script>

<style>

#brewpub {
    width: 45%;
    padding-left: 30px;
}

.brewpub-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>