<template>
    <h2>Student Name is : {{name}}</h2>
    <button v-on:click="getUser(userName)">Send User Name</button>
</template>

<script>
export default {
    name: 'StudentC',
    data(){
        return {
            userName: 'Shilpa Sood'
        }
    },
    props: {
        name: String,
        getUser: Function
    }
}
</script>
<style scoped>
h2 {
    color: orange;
}
</style>

