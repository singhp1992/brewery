<template>
    <div class="sort">
        <!-- Revision: Added a label element to correspond with the select element -->
        <label for="sort-by-state"> Sort by State: </label>
        <select id="sort-by-state" v-on:change="filterList"> 
            <option value="">All</option>
            <option v-bind:key="item" v-for="item in uniqueItemsList">{{ item }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: "Sort",
  props: ["uniqueItemsList", "filterList"]
};
</script>

<style>
select,
option {
  font-family: "Livvic", sans-serif;
}
</style>