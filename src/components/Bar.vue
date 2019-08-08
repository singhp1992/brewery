<template>
  <div id="bar">
    <ul class="bar-list"> 
        <h3>Bar</h3>
        <li v-bind:key="item.id" v-for="item in barList"> 
            <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "bar",
    props: [
        "brewerys",
        "barList"
    ],
}


</script>

<style>

#bar {
    width: 45%;
    padding-left: 30px;
}

.bar-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>