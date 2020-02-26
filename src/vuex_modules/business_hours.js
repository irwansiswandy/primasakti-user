import ResourcesPlugin from '../plugins/resources.js';
import Vue from 'vue';

const VuexModuleBusinessHours = {
    state: {
        loading: true,
        data: []
    },
    getters: {
        business_hours(state) {
            return state;
        }
    },
    actions: {
        init_business_hours(context) {
            return ResourcesPlugin.business_hours
            .get()
            .then((response) => {
                Vue.set(context.state, 'data', response.data);
                return Vue.set(context.state, 'loading', false);
            })
            .catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleBusinessHours;
