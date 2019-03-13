import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import IndexPage from './views/index.vue';
import Register from './views/authentication/register.vue';
import Login from './views/authentication/login.vue';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'index', component: IndexPage },
        { path: '/register', name: 'register', component: Register },
        { path: '/login', name: 'login', component: Login }
    ]
});
