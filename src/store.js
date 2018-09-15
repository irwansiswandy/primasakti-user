import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Core from './vuex_modules/core.js';

export default new Vuex.Store({
    mutations: {
        setState(state, [key, value]) {
            return state[key] = value;
        }
    },
    modules: {
        Core
    }
});
