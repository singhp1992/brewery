<template>
    <div>
        <ul>
            <li v-bind:key="todo.id" v-for="todo in todos">
                <p>{{ todo.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script> 
export default {
    name: "Todos",
    props: ["todos"]
}
</script>

<style>
</style>