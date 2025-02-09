<template>
    <h2>Dynamic components Name</h2>
    <button @click="tab='LoginC'">Load Login</button>&nbsp;
    <button @click="tab='RefC'">Load Ref</button>&nbsp;
    <button @click="tab='BindingC'">Load Binding</button>
    <component :is="tab" />   
</template>

<script>
import LoginC from './Login.vue';
import RefC from './Ref.vue';
import BindingC from './Binding.vue';
export default {
    name: 'DynamicC',
    components:{
        LoginC, RefC, BindingC
    },
    data(){
        return {
            tab: 'LoginC'
        }
    }
}
</script>
<style scoped>
h2 {
    color: #42b0d5;
}
</style>

