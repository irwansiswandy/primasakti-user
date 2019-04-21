import ResourcesPlugin from '../plugins/resources.js';
import PusherPlugin from '../plugins/pusher.js';

const VuexModuleQueues = {
    state: {
        loading: true,
        data: []
    },
    getters: {
        queues(state) {
            return state;
        }
    },
    mutations: {
        setQueuesData(state, [queue, index]) {
           if (!index) {
                return state.data.push(queue);
           }
           else {
               return state.data.splice(index, 1, queue);
           }
        },
        unsetQueuesData(state, index) {
            return state.data.splice(index, 1);
        }
    },
    actions: {
        init_queues(context) {
            ResourcesPlugin.queues.api.params.finished = false;
            return ResourcesPlugin.queues.get().then((response) => {
                context.commit('setState', ['queues', 'data', response.data]);
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
                    if (activity.log_name == 'customer-queue-created') {
                        return context.commit('setQueuesData', [queue]);
                    }
                    else if (activity.log_name == 'customer-queue-updated') {
                        for (let i=0; i<context.state.data.length; i++) {
                            if (context.state.data[i].id == queue.id) {
                                return context.commit('setQueuesData', [queue, i]);
                            }
                            else {
                                continue;
                            }
                        }
                    }
                    else if (activity.log_name == 'customer-queue-deleted') {
                        for (let i=0; i<context.state.data.length; i++) {
                            if (context.state.data[i].id == queue.id) {
                                return context.commit('unsetQueuesData', i);
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