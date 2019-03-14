const VuexModuleDialog = {
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
    mutations: {

    },
    actions: {
        'set_dialog'(context, [key, value]) {
            return context.commit('setState', ['dialog', key, value]);
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

export default VuexModuleDialog;