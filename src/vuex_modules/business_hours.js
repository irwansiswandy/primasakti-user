import MyAxios from '../plugins/axios.js';
import moment from 'moment';

const VuexModuleBusinessHours = {
    state: {
        api_url: '/business_hours',
        loading: true,
        business_hours: []
    },
    getters: {
        business_hours(state) {
            return state.business_hours;
        }
    },
    mutations: {

    },
    actions: {
        init_business_hours(context) {
            return MyAxios.get(context.state.api_url)
                          .then((response) => {
                              context.commit('setState', ['business_hours', 'business_hours', response.data]);
                              return context.commit('setState', ['business_hours', 'loading', false]);
                          })
                          .catch((error) => {
                              //
                          });
        }
    }
};

export default VuexModuleBusinessHours;