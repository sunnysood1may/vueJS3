<template>
  <h2>Non-Props Data</h2>
  <ChindN item="some Data" xyz="user-cmp" />
</template>

<script>
import ChindN from './Child.vue';
export default {
  name: "NonProp",
  components:{
    ChindN
  }
};
</script>
<style scoped>
h2 {
  color: orange;
}
</style>

