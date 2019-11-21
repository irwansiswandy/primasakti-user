import Vue from 'vue';

export default {
    state: {
        show: false,
        loading: false,
        content: '',
        payload: {},
        title: '',
        actions: []
    },
    getters: {
        dialog(state) {
            return state;
        }
    },
    actions: {
        'set_dialog'(context, [key, value]) {
            return Vue.set(context.state, key, value);
        },
        'reset_dialog'(context) {
            return [
                context.commit('setState', ['dialog', 'content', '']),
                context.commit('setState', ['dialog', 'payload', {}]),
                context.commit('setState', ['dialog', 'title', '']),
                context.commit('setState', ['dialog', 'actions', []])
            ];
        }
    }
};
