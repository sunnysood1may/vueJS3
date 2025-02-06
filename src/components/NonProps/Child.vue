<template>
  <div>
    <h3>Sunny</h3>
    <h3>Shilpa</h3>
    <h3 v-bind="$attrs">Shobhit</h3>
    <h3>{{item}}</h3>
  </div>
</template>

<script>
export default {
  name: "ChindN",
  inheritAttrs: false,
  props:{
    item: String,
    data: String
  }
};
</script>
<style scoped>
h2 {
  color: orange;
}
</style>

