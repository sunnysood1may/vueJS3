<template>
  <div class="cart">
    <header>
      <slot name="header">Default Data</slot>
    </header>
    <content>
      <slot name="main">Default Data</slot>
    </content>
    <footer>
      <slot name="footer">Default Data</slot>
    </footer>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChildS",
  props: {
    data: String,
  },
};
</script>
<style scoped>
h2 {
  color: orange;
}
.cart {
  border: 1px solid;
  width: 250px;
  padding: 5px;
  margin: 5px;
  text-align: center;
}
</style>
