import ResourcesPlugin from '../resources.js';

const ResourcesVuePlugin = {};

ResourcesVuePlugin.install = (Vue) => {
    Vue.prototype.$resources = ResourcesPlugin;
};

export default ResourcesVuePlugin;