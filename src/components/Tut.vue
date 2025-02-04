<template>
    <h1 v-on:mousemove="getConsole()">Vue Tutorial</h1><br />
    <button v-on:click="getData('Button Clicked')">Click me</button><br />
    <button v-on:dblclick="getData('Button Dbl Click')">Dbl Click</button><br />
    <input type="text" v-model="count" /><br />
    <h2>{{count}}</h2>

    <input type="text" placeholder="enter email" v-model="email" /><br />
    <input type="password" placeholder="enter password" v-model="password" /><br />
    <button v-on:click="getData2()" type="button">Get values</button>
    
</template>
<script>
export default {
    name: "TutC",
    data(){
        return {
            count: 0,
            email: null,
            password: null
        }
    },
    methods:{
        getData2(){
            console.log("Values : ",this.email, this.password);
        },
        getData(data){
            this.count = this.count+2;
            console.log(data + this.count);
        },
        getConsole(){
            //alert("console called");
        }
    }
}
</script>
<style scoped>
h1 {
    columns: yellow;
}
</style>
