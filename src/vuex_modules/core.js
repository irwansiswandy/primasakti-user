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
        set_locale(context, value) {
            return context.commit('setState', ['core', 'locale', value]);
        }
    }
};

export default VuexModuleCore;
