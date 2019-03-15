const VuexModuleServerResponse = {
    state: {
        status: '',
        statusText: '',
        data: {}  
    },
    getters: {
        server_response(state) {
            return state;
        }
    },
    mutations: {

    },
    actions: {
        set_server_response(context, response) {
            return [
                context.commit('setState', ['server_response', 'status', response.status]),
                context.commit('setState', ['server_response', 'statusText', response.statusText]),
                context.commit('setState', ['server_response', 'data', response.data])
            ];
        },
        reset_server_response(context) {
            return [
                context.commit('setState', ['server_response', 'status', '']),
                context.commit('setState', ['server_response', 'statusText', '']),
                context.commit('setState', ['server_response', 'data', {}])
            ];
        }
    }
};

export default VuexModuleServerResponse;