<template>
    <div>
        <ul>
            <li v-bind:key="place.id" v-for="place in places">
                <p>{{ place.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script> 
export default {
    name: "Places",
    props: ["places"]
}
</script>

<style scoped>

ul {
  list-style-type: none;
}

</style>