<template>
    <h2>TelePort component</h2>  
    <teleport to="#footer">
        <FooTer />
    </teleport>
</template>

<script>
import FooTer from './Footer.vue';
export default {
    name: 'TelePort',
    components: {
        FooTer
    }
}
</script>
<style scoped>
h2 {
    color: orange;
}
</style>

