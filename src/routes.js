import { createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import PageNotFound from './components/PageNotFound.vue';
import BindingC from './components/Binding.vue';
import RefC from './components/Ref.vue';
import SimpleForm from './components/SimpleForm.vue';
import FormModifier from './components/FormModifier.vue';
import NonProp from './components/NonProps/NonProp';

const routes = [
    {
        name: 'NonProp',
        path: '/NonProp',
        component: NonProp
    },
    {
        name: 'FormModifier',
        path: '/FormModifier',
        component: FormModifier
    },
    {
        name: 'SimpleForm',
        path: '/SimpleForm',
        component: SimpleForm
    },
    {
        name: 'Binding',
        path: '/binding',
        component: BindingC
    },
    {
        name: 'Ref',
        path: '/ref',
        component: RefC
    },
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;