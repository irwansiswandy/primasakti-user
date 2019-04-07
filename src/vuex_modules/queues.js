import ResourcesPlugin from '../plugins/resources.js';
import MyAxios from '../plugins/axios.js'; 

const VuexModuleQueues = {
    state: {
        loading: true,
        queues: []
    },
    getters: {
        queues(state) {
            return state.queues;
        }
    },
    mutations: {
        //
    },
    actions: {
        init_queues(context) {
            let api = {
                url: ResourcesPlugin.queues.api.url,
                params: ResourcesPlugin.queues.api.params
            };
            api.params.finished = false;
        
            return MyAxios.get(api.url, {
                params: api.params
            }).then((response) => {
                context.commit('setState', ['queues', 'queues', response.data]);
                return context.commit('setState', ['queues', 'loading', false]);
            }).catch((error) => {
                return context.dispatch('set_server_response', error.response);
            });
        }
    }
};

export default VuexModuleQueues;