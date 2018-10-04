import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Core from './vuex_modules/core.js';

export default new Vuex.Store({
    mutations: {
        setState(state, [module_name, key, value]) {
            return state[module_name][key] = value;
        }
    },
    modules: {
        'core': Core
    }
});
