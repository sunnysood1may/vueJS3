<template>
<div class="footer">
    <h2>beforeCreated and created {{name}}</h2>
    <h1 ref="count">Counter: {{counter}}</h1>
    <button v-on:click="counter=counter+1">Update Count</button>

<button v-on:click="show=!show">Toggle</button>
    <LoginC v-if="show" />
</div>
</template>

<script>
import LoginC from './Login.vue';
export default {
    name: 'BeforeCreate',
    components:{
        LoginC
    },
    data(){
        console.warn("data");
        alert("data");
        return {
            name: 'sunny',
            counter: 0,
            show: true
        }
    },
    beforeCreate(){
        alert("beforeCreate");
        console.log("beforeCreate",this.$el);
    },
    created(){
        alert("created");
        console.log("created",this.$el);
        this.name = "sood";
    },
    beforeMount(){
        alert("beforeMount");
        console.log("beforeMount",this.$el);
    },
    mounted(){
        alert("mounted");
        console.log("mounted",this.$el);
    },
    beforeUpdate(){
        console.log("beforeUpdate",this.counter);
        console.log("beforeUpdateRef",this.$refs['count'].textContent);
    },
    updated(){
        console.log("updated",this.counter);
        console.log("updatedRef",this.$refs['count'].textContent);
    }
}
</script>
<style scoped>
.footer {
    background-color: gray;
    color: #fff;
}
</style>
