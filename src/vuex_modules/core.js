const VuexModuleCore = {
    state: {
        locale: 'en'
    },
    getters: {
        locale(state) {
            return state.locale;
        }
    },
    actions: {
        set_core(context, [key, value]) {
            return context.commit('setState', [key, value]);
        }
    }
};

export default VuexModuleCore;
