<template>
  <div id="contract">
    <ul class="contract-list"> 
        <h3>Contract</h3>
        <li v-bind:key="item.id" v-for="item in contractList"> 
            <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "contract",
    props: [
        "contractList"
    ],
}


</script>

<style>

.contract-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>