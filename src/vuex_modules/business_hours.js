import ResourcesPlugin from '../plugins/resources.js';

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
            return ResourcesPlugin.business_hours.get().then((response) => {
                context.commit('setState', ['business_hours', 'data', response.data]);
                return context.commit('setState', ['business_hours', 'loading', false]);
            }).catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleBusinessHours;
