import MyAxios from '../plugins/axios.js';

const VuexModuleQueues = {
    state: {
        api_url: '/customer_queues',
        loading: true,
        queues: []
    },
    getters: {
        queues(state) {
            return state.queues;
        }
    },
    mutations: {

    },
    actions: {
        init_queues(context) {
            return MyAxios.get(context.state.api_url, {
                params: {
                    // finished: false
                }
            }).then((response) => {
                context.commit('setState', ['queues', 'queues', response.data]);
                return context.commit('setState', ['queues', 'loading', false]);
            }).catch((error) => {
                //
            });
        }
    }
};

export default VuexModuleQueues;