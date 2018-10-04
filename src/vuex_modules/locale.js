const VuexModuleLocale = {
    state: {
        locale: 'en'
    },
    getters: {
        locale(state) {
            return state.locale;
        }
    },
    actions: {
        set_locale(context, [key, value]) {
            return context.commit('setState', [key, value]);
        }
    }
};

export default VuexModuleLocale;
