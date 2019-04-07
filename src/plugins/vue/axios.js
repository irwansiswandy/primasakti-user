import MyAxios from '../axios.js';

const AxiosVuePlugin = {};

AxiosVuePlugin.install = (Vue) => {
	Vue.prototype.$axios = MyAxios;
};

export default AxiosVuePlugin;