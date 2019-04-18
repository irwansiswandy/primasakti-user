import ResourcesPlugin from '../plugins/resources.js';

const VuexModulePublicHoliday = {
    state: {
        loading: true,
        data: []
    },
    getters: {
        today_is_holiday(state) {
            if (state.data.length > 0) {
                return true;
            }
            else {
                return false;
            }
        },
        holidays(state) {
            return state.data;
        }
    },
    mutations: {},
    actions: {
        init_public_holidays(context, date) {
            ResourcesPlugin.public_holidays.api.params = {
                date: date
            };
            return ResourcesPlugin.public_holidays.get().then((response) => {
                context.commit('setState', ['public_holidays', 'data', response.data]);
                return context.commit('setState', ['public_holidays', 'loading', false]);
            }).catch((error) => {
                //
            });
        }
    }
};

export default VuexModulePublicHoliday;