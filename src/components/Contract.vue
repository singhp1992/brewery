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

/* #contract {
    width: 45%;
    padding-left: 50px;
    padding-right: 50px;
} */

.contract-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>