<template>
    <div class="brewerys">
        <ul>
            <li :key="brewery.id" 
            v-for="brewery in brewerys"
            v-show="state === '' || state === brewery.state" >
                <h4 v-on:click="moreInfo()">{{ brewery.name }}</h4>
                <div id="toggle">
                    <p>Type: {{ brewery.brewery_type }}</p>
                    <p class="transform">Location: {{ brewery.street }},  {{ brewery.state }} </p>
                    <p>Contact: +1 {{ brewery.phone }}</p>
                </div>
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
        "moreInfo"
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

#toggle {
    display: none;
    text-transform: capitalize;
}

ul {
  list-style-type: none;
  width: 45%;
}

h4 {
    cursor: pointer;
}

</style>