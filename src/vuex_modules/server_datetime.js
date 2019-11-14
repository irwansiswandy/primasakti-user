import MyAxios from '../plugins/axios.js';
import moment from 'moment';

function formatDisplayedValue(value) {
    if (value < 10) {
        return '0' + value;
    }
    else {
        return value;
    }
}

const VuexModuleServerDateTime = {
    state: {
        weekday: '',
        day: '',
        month: '',
        year: '',
        hours: '',
        minutes: '',
        seconds: ''
    },
    getters: {
        server_date(state) {
            return state.year + '-' + formatDisplayedValue(state.month) + '-' + formatDisplayedValue(state.day);
        },
        server_time(state) {
            return formatDisplayedValue(state.hours) + ':' + formatDisplayedValue(state.minutes) + ':' + formatDisplayedValue(state.seconds);
        }
    },
    mutations: {
        inc_seconds(state) {
            state.seconds += 1;
        },
        inc_minutes(state) {
            state.minutes += 1;
            state.seconds = 0;
        },
        inc_hours(state) {
            state.hours += 1;
            state.minutes = 0;
            state.seconds = 0;
        },
        inc_day(state) {
            state.day += 1;
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
        },
        inc_weekday(state) {
            if (state.weekday < 7) {
                state.weekday += 1;
            }
            else {
                state.weekday = 0;
            }
        },
        inc_month(state) {
            state.month += 1;
            state.day = 1;
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
        },
        inc_year(state) {
            state.year += 1;
            state.month = 1;
            state.day = 1;
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
        }
    },
    actions: {
        init_server_datetime(context, datetime) {
            let date = _.split(datetime, ' ')[0];
            let time = _.split(datetime, ' ')[1];
            // This sets 'day', 'month', 'year'
            let year = Number(_.split(date, '-')[0]);
            let month = Number(_.split(date, '-')[1]);
            let day = Number(_.split(date, '-')[2]);
            let weekday = moment(year + '-' + month + '-' + day, 'YYYY-MM-DD').weekday();
            context.commit('setState', ['server_datetime', 'year', year]);
            context.commit('setState', ['server_datetime', 'month', month]);
            context.commit('setState', ['server_datetime', 'day', day]);
            context.commit('setState', ['server_datetime', 'weekday', weekday]);
            // This sets 'hours', 'minutes', 'seconds'
            let hours = Number(_.split(time, ':')[0]);
            let minutes = Number(_.split(time, ':')[1]);
            let seconds = Number(_.split(time, ':')[2]);
            context.commit('setState', ['server_datetime', 'hours', hours]);
            context.commit('setState', ['server_datetime', 'minutes', minutes]);
            context.commit('setState', ['server_datetime', 'seconds', seconds]);
            // This starts run time & date
            return setTimeout(() => {
                return context.dispatch('run_server_datetime');
            }, 1000);
        },
        run_server_datetime(context) {
            return setInterval(() => {
                if (context.state.seconds < 59) {
                    context.commit('inc_seconds');
                }
                else {
                    if (context.state.minutes < 59) {
                        context.commit('inc_minutes');
                    }
                    else {
                        if (context.state.hours < 24) {
                            context.commit('inc_hours');
                        }
                        else {
                            let last_day_in_month = moment([context.state.year, context.state.month - 1, context.state.day]).endOf('month').date();
                            if (context.state.day < last_day_in_month) {
                                context.commit('inc_day');
                                context.commit('inc_weekday');
                            }
                            else {
                                if (context.state.month < 12) {
                                    context.commit('inc_month');
                                }
                                else {
                                    context.commit('inc_year');
                                }
                            }
                        }
                    }
                }
            }, 1000);
        }
    }
};

export default VuexModuleServerDateTime;