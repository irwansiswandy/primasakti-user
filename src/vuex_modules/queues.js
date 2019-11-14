import ResourcesPlugin from '../plugins/resources.js';
import PusherPlugin from '../plugins/pusher.js';
import MyAxios from '../plugins//axios.js';
import Vue from 'vue';

const VuexModuleQueues = {
    state: {
        loading: true,
        data: {
            waiting: [],
            handled: [],
            finished: []
        }
    },
    getters: {
        queues(state) {
            return state;
        }
    },
    mutations: {
        setQueuesData(state, [key, queue, index]) {
           if (!index) {
                return state.data[key].push(queue);
           }
           else {
               return state.data[key].splice(index, 1, queue);
           }
        },
        unsetQueuesData(state, [key, index]) {
            return state.data[key].splice(index, 1);
        }
    },
    actions: {
        init_queues(context) {
            return MyAxios
            .get('customer_queues', {
                params: {
                    finished: false
                }
            })
            .then((response) => {
                let queues = response.data;
                // This sets waiting queues.
                Vue.set(context.state.data, 'waiting', queues.filter((queue) => {
                    return !queue.handled && !queue.finished;
                }));
                // This sets handled queues.
                Vue.set(context.state.data, 'handled', queues.filter((queue) => {
                    return queue.handled && !queue.finished;
                }));
                // This sets finished queues.
                Vue.set(context.state.data, 'finished', queues.filter((queue) => {
                    return queue.handled && queue.finished;
                }));
                Vue.set(context.state, 'loading', false);
                return context.dispatch('init_pusher');
            })
            .catch((error) => {
                //
            });
        },
        init_pusher(context) {
            return PusherPlugin.bind('activity-log', (activity) => {
                if (activity.subject_type == 'App\\CustomerQueue') {
                    let queue = activity.properties.subject;
                    // This handles 'customer-queue-created'.
                    if (activity.log_name == 'customer-queue-created') {
                        return context.commit('setQueuesData', ['waiting', queue]);
                    }
                    // This handles 'customer-queue-updated'.
                    else if (activity.log_name == 'customer-queue-updated') {
                        if (queue.handled == 1 && queue.finished == 1) {
                            for (let i=0; i<context.state.data.handled.length; i++) {
                                if (context.state.data.handled[i].id == queue.id) {
                                    context.commit('unsetQueuesData', ['handled', i]);
                                }
                                else {
                                    continue;
                                }
                            }
                            context.commit('setQueuesData', ['finished', queue]);
                            // This deletes finished queue after 10 seconds.
                            return setTimeout(() => {
                                for (let i=0; i<context.state.data.finished.length; i++) {
                                    if (context.state.data.finished[i].id == queue.id) {
                                        return context.commit('unsetQueuesData', ['finished', i]);
                                    }
                                    else {
                                        continue;
                                    }
                                }
                            }, 10000);
                        }
                        else {
                            for (let i=0; i<context.state.data.waiting.length; i++) {
                                if (context.state.data.waiting[i].id == queue.id) {
                                    context.commit('unsetQueuesData', ['waiting', i]);
                                }
                                else {
                                    continue;
                                }
                            }
                            return context.commit('setQueuesData', ['handled', queue]);
                        }
                    }
                    // This handles 'customer-queue-deleted'.
                    else if (activity.log_name == 'customer-queue-deleted') {
                        for (let i=0; i<context.state.data.waiting.length; i++) {
                            if (context.state.data.waiting[i].id == queue.id) {
                                return context.commit('unsetQueuesData', ['waiting', i]);
                            }
                            else {
                                continue;
                            }
                        }
                    }
                }
            });
        }
    }
};

export default VuexModuleQueues;
