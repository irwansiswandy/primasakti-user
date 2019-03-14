import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Locale from './vuex_modules/locale.js';
import ServerDateTime from './vuex_modules/server_datetime.js';
import Admins from './vuex_modules/admins.js';
import ServerResponse from './vuex_modules/server_response.js';
import Queues from './vuex_modules/queues';
import BusinessHours from './vuex_modules/business_hours.js';
import ProductCategories from './vuex_modules/product_categories.js';
import Dialog from './vuex_modules/dialog.js';

export default new Vuex.Store({
    modules: {
        'locale': Locale,
        'server_datetime': ServerDateTime,
        'admins': Admins,
        'server_response': ServerResponse,
        'queues': Queues,
        'business_hours': BusinessHours,
        'product_categories': ProductCategories,
        'dialog': Dialog
    },
    mutations: {
        setState(state, [module_name, key, value]) {
            return state[module_name][key] = value;
        }
    }
});
