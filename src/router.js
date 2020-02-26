import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import MainIndex from './views/index.vue';
import Register from './views/authentication/register.vue';
import Login from './views/authentication/login.vue';
import QueuesIndex from './views/queues/index.vue';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/',
            name: 'index',
            component: MainIndex
        },
        { 
            path: '/register', 
            name: 'register', 
            component: Register 
        },
        { 
            path: '/login', 
            name: 'login', 
            component: Login 
        },
        { 
            path: '/queues', 
            name: 'queues', 
            component: QueuesIndex 
        }
    ]
});
