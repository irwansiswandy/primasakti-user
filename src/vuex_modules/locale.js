const VuexModuleLocale = {
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
            return context.commit('setState', ['locale', 'locale', value]);
        }
    }
};

export default VuexModuleLocale;
