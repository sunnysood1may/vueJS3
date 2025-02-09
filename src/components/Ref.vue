<template>
    <h2>Ref Tutotial</h2>
    <input type="text" ref="input" />
    <button v-on:click="getData">Click Me</button>
</template>

<script>
export default {
    name: 'RefC',
    methods: {
        getData(){
            //alert("123");
            this.$refs.input.style.color = "red";
            this.$refs.input.focus();
            this.$refs.input.value = 123;
            //alert(this.$refs.input.value);
        }
    }
}
</script>
<style scoped>
h2 {
    color: #42b0d5;
}
</style>

