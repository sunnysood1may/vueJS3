<template>
    <h2>Profile Component {{profile}}</h2>
    
</template>

<script>
import {useRoute} from 'vue-router';
export default {
    name: 'ProfileC',
    data(){
        return {
            profile: ''
        }
    },
    mounted(){
        const route = useRoute();
        console.warn("route",route.params.name);
        this.profile = route.params.name;
    }
}
</script>
<style scoped>
h2 {
    color: orange;
}
</style>

