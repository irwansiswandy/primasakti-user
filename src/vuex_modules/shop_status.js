import MyAxios from '../plugins/axios.js';

const VuexModuleShopStatus = {
    state: {
        api_url: '/business_hours',
        day: '',
        open_time: '',
        close_time: ''
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        init_shop_status(context, day_number) {
            return MyAxios.get(context.state.api_url, {
                params: {
                    day: day_number
                }
            }).then((response) => {
                return console.log(response.data);
            }).catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleShopStatus;