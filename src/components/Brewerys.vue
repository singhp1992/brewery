<template>
    <div class="brewerys">
        <ul>
            <li v-bind:key="brewery.id" v-for="brewery in brewerys">
                <p>{{ brewery.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script> 

export default {
    name: "Brewerys",
    props: [
    "brewerys",
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

</style>