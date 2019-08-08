<template>
  <div id="planning">
    <ul class="planning-list"> 
        <h3>Planning</h3>
        <li v-bind:key="item.id" v-for="item in planningList"> 
            <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "planning",
    props: [
        "brewerys",
        "planningList"
    ],
}


</script>

<style>

#planning {
    width: 45%;
    padding-left: 30px;
}

.planning-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>