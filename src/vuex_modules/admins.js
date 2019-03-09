import MyAxios from '../plugins/axios.js';

const VuexModuleAdmins = {
    state: {
        api_url: '/admins',
        loading: true,
        admins: []
    },
    getters: {
        admins(state) {
            return state.admins;
        }
    },
    mutations: {},
    actions: {
        init_admins(context) {
            return MyAxios.get(context.state.api_url, {
                params: {
                    active: 1,
                    includes: 'role,contacts'
                }
            }).then((response) => {
                context.commit('setState', ['admins', 'admins', response.data]);
                return context.commit('setState', ['admins', 'loading', false]);
            }).catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleAdmins;