<template>
    <h2>Profile Component {{profile}}</h2>
    <h3>Props Example</h3>
    <StudentC :name="sname" :getUser="getUserName" />
    <TeacherC name="Shilpa" />

    <h3>send child to parent data component</h3>
    <h1>Child User: {{childUser}}</h1>
</template>

<script>
import {useRoute} from 'vue-router';
import StudentC from './Student.vue';
import TeacherC from './Teacher.vue';
export default {
    name: 'ProfileC',
    components: {
        StudentC,
        TeacherC
    },
    data(){
        return {
            profile: '',
            sname: 'Sunny',
            childUser: ''
        }
    },
    mounted(){
        const route = useRoute();
        console.warn("route",route.params.name);
        this.profile = route.params.name;
    },
    methods: {
        getUserName(name){
            alert(name);
            this.childUser = name;
        }
    }
}
</script>
<style scoped>
h2 {
    color: #42b0d5;
}
</style>

