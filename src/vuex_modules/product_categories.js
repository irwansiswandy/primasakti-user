import MyAxios from '../plugins/axios.js';

const VuexModuleProductCategories = {
    state: {
        api_url: '/categories',
        loading: true,
        categories: []
    },
    getters: {
        product_categories(state) {
            return state.categories;
        }
    },
    mutations: {

    },
    actions: {
        'init_product_categories'(context) {
            return MyAxios.get(context.state.api_url)
                          .then((response) => {
                              context.commit('setState', ['product_categories', 'categories', response.data]);
                              return context.commit('setState', ['product_categories', 'loading', false]);
                          })
                          .catch((error) => {
                              //
                          });
        }
    }
};

export default VuexModuleProductCategories;