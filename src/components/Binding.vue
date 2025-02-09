<template>
    <h2>Binding Component</h2>
    <h1 :class="applyStyle">{{name}}</h1>
    <button v-on:click="colorfull=!colorfull">Apply style</button>
    <h2 v-html="tag"></h2>
</template>

<script>
export default {
    name: 'BindingC',
    data(){
        return{
            name: "sunny shilpa",
            tag: "<h1>Sunny S</h1>",
            colorfull:true
        }
    },
    computed:{
        applyStyle(){
            return {
                green:this.colorfull,
                err:true,
                other:true
            }
        }
    }
}
</script>
<style scoped>
h2 {
    color: #42b0d5;
}
.green{
    background-color: green;
}
.err {
    color: red;
}
</style>

