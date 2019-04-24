import ResourcesPlugin from '../plugins/resources.js';
import PusherPlugin from '../plugins/pusher.js';

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
            ResourcesPlugin.queues.api.params.finished = false;
            return ResourcesPlugin.queues.get().then((response) => {
                context.state.data.waiting = response.data.filter((queue) => {
                    return queue.handled === 0 && queue.finished === 0;
                });
                context.state.data.handled = response.data.filter((queue) => {
                    return queue.handled === 1 && queue.finished === 0;
                });
                context.state.data.finished = response.data.filter((queue) => {
                    return queue.handled === 1 && queue.finished === 1;
                });
                context.commit('setState', ['queues', 'loading', false]);
                return context.dispatch('init_pusher');
            }).catch((error) => {
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