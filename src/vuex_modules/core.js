const VuexModuleCore = {
    state: {
        locale: ''
    },
    getters: {
        locale(state) {
            return state.locale;
        }
    },
    actions: {
        set_core(context, [key, value]) {
            return context.commit('setState', ['core', key, value]);
        }
    }
};

export default VuexModuleCore;
