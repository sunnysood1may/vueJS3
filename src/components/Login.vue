<template>
    <h2 ref="user">Login Component</h2> 
</template>

<script>
export default {
    name: 'LoginC',
    beforeUnmount(){
        console.log("beforeUnmount",this.$refs['user']);
    },
    unmounted(){
        console.log("unmounted",this.$refs['user']);
    }
}
</script>
<style scoped>
h2 {
    color: orange;
}
</style>

