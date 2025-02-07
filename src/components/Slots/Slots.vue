<template>
  <h1>Slots in Vue JS 3</h1>
  <ChildS>
    <template v-slot:header>
      <h1>Sunny</h1>
    </template>
    <template v-slot:main> </template>
    <template v-slot:footer>
      <button>Buy Now</button>
    </template>
  </ChildS>
  <ChildS>
    <template v-slot:header>
      <h1>Shilpa</h1>
    </template>
    <template v-slot:main>
      <p>Code Step By Step</p>
    </template>
    <template v-slot:footer>
      <button>Buy Now</button>
    </template>
  </ChildS>
  <ChildS>
    <template v-slot:header>
      <h1>Bhasker</h1>
    </template>
    <template v-slot:main>
      <p>Code Step By Step</p>
    </template>
    <template v-slot:footer> </template>
  </ChildS>

  <ChildS><a href="#">Code step by step</a></ChildS>
  <ChildS
    ><img
      src="https://media.wired.com/photos/65e883889e8eb21ffe2b387c/master/w_200,c_limit/moon-full.jpg"
  /></ChildS>
  <ChildS></ChildS>
</template>

<script>
import ChildS from "./Child.vue";
export default {
  name: "SlotS",
  components: {
    ChildS,
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
