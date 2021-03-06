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

// This initializes vue's plugin for Pusher.
import PusherVuePlugin from './plugins/vue/pusher.js';
Vue.use(PusherVuePlugin);

// This initializes vue's plugin for Resources.
import ResourcesVuePlugin from './plugins/vue/resources.js';
Vue.use(ResourcesVuePlugin);

Vue.config.productionTip = false

// Import app.css
import './assets/app.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
