<template>
    <div class="brewerys">
        <ul>
            <li :key="brewery.id" 
            v-for="brewery in brewerys"
            v-show="state === '' || state === brewery.state" 
            v-bind:class="[brewerys.showDetail ? 'less': 'more', brewery.state]" >
                <h4 v-on:click="fetchAnother()">{{ brewery.name }}</h4>
            </li>
        </ul>
    </div>
</template>

<script> 

export default {
    name: "Brewerys",
    props: [
        "brewerys",
        "state",
    ]
}

</script>

<style scoped>

.brewerys {
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
}

ul {
  list-style-type: none;
  width: 45%;
}

h4 {
    cursor: pointer;
}

</style>