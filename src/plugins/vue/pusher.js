import MyPusher from '../pusher.js';

const PusherVuePlugin = {};

PusherVuePlugin.install = (Vue) => {
    Vue.prototype.$pusher = MyPusher;
}

export default PusherVuePlugin;