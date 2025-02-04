<template>
    <h1>Get Checkbox and Radio</h1>
    <h3>Technology</h3>
    <label for="vue">Vue</label>
    <input type="checkbox" value="vue" v-model="technology" id="vue" />

    <label for="angular">Angular</label>
    <input type="checkbox" value="angular" v-model="technology" id="angular" />

    <label for="react">React</label>
    <input type="checkbox" value="react" v-model="technology" id="react" /> <br /><br />
    <h4>Selected Technology : {{technology}} </h4>

    <h3>Who I am</h3>
    <label for="student">Student</label>
    <input type="radio" value="student" name="who" v-model="who" id="student" />

    <label for="developer">Developer</label>
    <input type="radio" value="developer" name="who" v-model="who" id="developer" />

    <h4>I am : {{who}} </h4>

    <h1 v-if="show">If Condition</h1>
    <h1 v-else>Else Condition</h1>
    <button v-on:click="show=!show">Toggle</button>
</template>

<script>
export default {
    name: 'CheckC',
    data() {
        return{
            technology: [],
            who: null,
            show: true
        }
    }
}
</script>
<style scoped>
h1 {
    color: gold;
}
</style>
