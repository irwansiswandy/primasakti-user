import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Locale from './vuex_modules/locale.js';

export default new Vuex.Store({
    mutations: {
        setState(state, [key, value]) {
            return state[key] = value;
        }
    },
    modules: {
        Locale
    }
});
