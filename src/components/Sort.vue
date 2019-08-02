<template>
    <div class="sort">
        Sort by State:  
        <select v-on:change="filterList"> 
            <option value="">All</option>
            <option v-bind:key="item.id" v-for="item in uniqueItemsList">{{ item }}</option>
        </select>
    </div>
</template>

<script> 

export default {
    name: "Sort",
    props: [
    "uniqueItemsList",
    "filterList"
    ]
}

</script>

<style>
</style>