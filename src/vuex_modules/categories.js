import MyAxios from '../plugins/axios.js';
import Vue from 'vue';

const VuexModuleProductCategories = {
    state: {
        api_url: '/categories',
        loading: true,
        categories: []
    },
    getters: {
        categories(state) {
            return state.categories;
        }
    },
    mutations: {
        //
    },
    actions: {
        'init_categories'(context) {
            return MyAxios
            .get(context.state.api_url)
            .then((response) => {
                let categories = response.data;
                Vue.set(context.state, 'categories', categories);
                return Vue.set(context.state, 'loading', false);
            })
            .catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleProductCategories;