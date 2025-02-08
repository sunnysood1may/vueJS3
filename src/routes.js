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
import SlotS from './components/Slots/Slots';
import ComputedProperty from './components/ComputedProperty.vue';
import WatcherS from './components/Watchers.vue';
import DynamicC from './components/Dynamic.vue';
import TelePort from './components/Teleport.vue';
import BeforeCreate from './components/BeforeCreate';

const routes = [
    {
        name: 'BeforeCreate',
        path: '/BeforeCreate',
        component: BeforeCreate
    },
    {
        name: 'TelePort',
        path: '/Teleport',
        component: TelePort
    },
    {
        name: 'DynamicC',
        path: '/DynamicComponent',
        component: DynamicC
    },
    {
        name: 'SlotS',
        path: '/Slots',
        component: SlotS
    },
    {
        name: 'NonProp',
        path: '/NonProp',
        component: NonProp
    },
    {
        name: 'WatcherS',
        path: '/Watchers',
        component: WatcherS
    },
    {
        name: 'ComputedProperty',
        path: '/ComputedProperty',
        component: ComputedProperty
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