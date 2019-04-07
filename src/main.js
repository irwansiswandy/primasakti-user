import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// This initializes Vuetify.
import Vuetify from 'vuetify';
import '../node_modules/vuetify/dist/vuetify.min.css';
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuetify, {
    theme: {
        primary: '#35495D',
        secondary: '#42B682',
        tertiary: '#939597'
    }
});

// This initializes I18n for Vue.
import I18n from 'vue-i18n';
Vue.use(I18n);

// This initializes font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';

// This initializes flag-icon-css
import '../node_modules/flag-icon-css/css/flag-icon.min.css';

// This initializes vue's plugin for Axios.
import AxiosVuePlugin from './plugins/vue/axios.js';
Vue.use(AxiosVuePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
