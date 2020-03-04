import Vue from 'vue';

export default {
    state: {
        locale: '',
        buttons: {
            add_queue: false
        }
    },
    getters: {
        locale(state) {
            return state.locale;
        },
        buttons(state) {
            return state.buttons;
        }
    },
    actions: {
        set_locale(context, value) {
            return Vue.set(context.state, 'locale', value);            
        },
        set_button(context, [button_name, value]) {
            return Vue.set(context.state.buttons, button_name, value);
        }
    }
}