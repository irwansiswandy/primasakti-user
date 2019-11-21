import Vue from 'vue';

export default {
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
    actions: {
        set_server_response(context, response) {
            return [
                Vue.set(context.state, 'status', response.status),
                Vue.set(context.state, 'statusText', response.statusText),
                Vue.set(context.state, 'data', response.data)
            ];
        },
        reset_server_response(context) {
            return [
                Vue.set(context.state, 'status', ''),
                Vue.set(context.state, 'statusText', ''),
                Vue.set(context.state, 'data', {})
            ];
        }
    }
};
