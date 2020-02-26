import ResourcesPlugin from '../plugins/resources.js';
import Vue from 'vue';

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
    actions: {
        init_public_holidays(context, date) {
            ResourcesPlugin.public_holidays.api.params = {
                date: date
            };
            return ResourcesPlugin.public_holidays
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

export default VuexModulePublicHoliday;