<template>
    <h2>Child Component</h2>
    <h2>{{name}}</h2>
    <h2>{{user}}</h2>
    <button v-on:click="setData()">Call Function</button>
</template>

<script>
export default {
    name: 'ChildC',
    props: {
        name: String,
        user: Object,
        setData: Function
    }
}
</script>
<style scoped>
h2 {
    color: #42b0d5;
}
</style>

