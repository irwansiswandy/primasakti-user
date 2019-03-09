import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Locale from './vuex_modules/locale.js';
import ServerDateTime from './vuex_modules/server_datetime.js';
import Admins from './vuex_modules/admins.js';
import ServerResponse from './vuex_modules/server_response.js';
import ShopStatus from './vuex_modules/shop_status.js';

export default new Vuex.Store({
    modules: {
        'locale': Locale,
        'server_datetime': ServerDateTime,
        'admins': Admins,
        'server_response': ServerResponse,
        'shop_status': ShopStatus
    },
    mutations: {
        setState(state, [module_name, key, value]) {
            return state[module_name][key] = value;
        }
    }
});
