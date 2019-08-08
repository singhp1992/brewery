<template>
  <div id="micro">
    <ul class="micro-list"> 
        <h3>Micro</h3>
        <li v-bind:key="item.id" 
        v-for="item in microList" > 
            <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "Micro",
    props: [
        "microList"
    ],
}


</script>

<style>

#micro {
    width: 45%;
    padding-left: 30px;
}

.micro-list {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

</style>