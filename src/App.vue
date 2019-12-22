<template>
    <v-app v-resize="handleViewportResize">
        <v-content>

            <v-card tile class="primary lighten-1 white--text pl-3 pr-3 pt-1 pb-1">
                <v-layout row>
                    <v-flex d-block align-self-center class="text-xs-left">
                        <span class="caption mr-1">
                            {{ displayed_date + ' | ' + server_time }}
                        </span>
                        <v-chip small label class="secondary white--text caption"
                                v-if="shop_is_open">
                            {{ $t('open') }}
                        </v-chip>
                        <v-chip small label class="error white--text caption"
                                v-else>
                            {{ $t('closed') }}
                        </v-chip>
                    </v-flex>
                    <v-flex d-block align-self-center class="text-xs-right">
                        <v-tooltip bottom class="ml-2">
                            <span slot="activator" class="flag-icon flag-icon-id"
                                    style="cursor: pointer"
                                    v-on:click="$store.dispatch('set_locale', 'id')">
                            </span>
                            <span>Bahasa Indonesia</span>
                        </v-tooltip>
                        <v-tooltip bottom class="ml-2">
                            <span slot="activator" class="flag-icon flag-icon-gb"
                                    style="cursor: pointer"
                                    v-on:click="$store.dispatch('set_locale', 'en')">
                            </span>
                            <span>English</span>
                        </v-tooltip>
                    </v-flex>
                </v-layout>
            </v-card>

            <v-toolbar flat dark color="primary">
                <v-toolbar-title>
                    <h2 class="font-logo" style="cursor: pointer"
                        v-on:click="$router.replace('/')">
                        primasakti
                    </h2>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn small color="secondary white--text"
                       v-on:click="showMyDialog('track-order')">
                    <span class="caption">{{ $t('track_order') }}</span>
                </v-btn>
                <!--
                <v-toolbar-items v-if="!user_is_authenticated">
                    <v-menu offset-y>
                        <v-btn slot="activator" dark icon>
                            <v-icon>fa-user</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile v-on:click="showMyDialog('login')">
                                <v-list-tile-title>
                                    {{ $t('login') }}
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile v-on:click="showMyDialog('register')">
                                <v-list-tile-title>
                                    {{ $t('register') }}
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar-items>
                -->
            </v-toolbar>

            <my-dialog width="500" :fullscreen="mobile_view"
                       v-on:action="handleMyDialogAction">
                <div v-if="dialog.content">
                    <span v-if="dialog.content == 'track-order'">
                        <track-order ref="trackOrder"></track-order>
                    </span>
                    <span v-else-if="dialog.content == 'login'">
                        <login-form></login-form>
                    </span>
                    <span v-else-if="dialog.content == 'register'">
                        <register-form></register-form>
                    </span>
                </div>
            </my-dialog>

            <router-view></router-view>

        </v-content>

        <v-footer class="tertiary white--text justify-center">
            <span class="caption">
                &copy {{ footer_year }} - All Rights Reserved - UD. Primasakti - developed by irwansiswandymks@gmail.com
            </span>
        </v-footer>

    </v-app>
</template>

<style>
    #app {
        /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
        font-family: 'GlacialIndifference';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

<script>
    import { ServerHostname } from './_variables';
    import moment from 'moment';
    import { mapGetters, mapActions } from 'vuex';
    import TrackOrder from './views/track_order/input_form.vue';
    import LoginForm from './views/authentication/login.vue';
    import RegisterForm from './views/authentication/register.vue';
    import MyDialog from './components/dialog.vue';
    import VueMarqueeText from 'vue-marquee-text-component';

    export default {
        name: 'app',
        components: {
            'track-order': TrackOrder,
            'login-form': LoginForm,
            'register-form': RegisterForm,
            'my-dialog': MyDialog,
            'vue-marquee-text': VueMarqueeText
        },
        data() {
            return {
                viewport: {
                    width: 0,
                    height: 0
                },
                user_is_authenticated: false
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'server_date',
                'server_time',
                'business_hours',
                'dialog',
                'server_response',
                'today_is_holiday',
                'holidays'
            ]),
            footer_year() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).year();
            },
            displayed_date() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).format('dddd, DD/MM/YYYY');
            },
            current_day_number() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).day();
            },
            current_business_hour() {
                let business_hour = {};
                for (let i=0; i<this.business_hours.data.length; i++) {
                    if (this.business_hours.data[i].day == this.current_day_number) {
                        business_hour = this.business_hours.data[i];
                    }
                    else {
                        continue;
                    }
                }
                return business_hour;
            },
            shop_is_open() {
                if (this.today_is_holiday) {
                    return false;
                }
                else {
                    let current_datetime = this.server_date + ' ' + this.server_time;
                    return moment(current_datetime, 'YYYY-MM-DD HH:mm:ss').isBetween(this.server_date + ' ' + this.current_business_hour.open, this.server_date + ' ' + this.current_business_hour.close);
                }
            },
            mobile_view() {
                if (this.viewport.width < 600) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            },
            'server_date'(value) {
                return this.$store.dispatch('init_public_holidays', value);
            }
        },
        methods: {
            ...mapActions([
                'set_locale',
                'init_server_datetime',
                'init_admins',
                'init_queues',
                'init_business_hours',
                'init_categories'
            ]),
            initServerDateTime() {
                return this.$axios
                .request({
                    url: ServerHostname,
                    method: 'get'
                })
                .then((response) => {
                    let server_date = response.data.date;
                    let server_time = response.data.time;
                    let server_datetime = server_date + ' ' + server_time;
                    return this.init_server_datetime(server_datetime);
                })
                .catch((error) => {
                    //
                });
            },
            sendVisitLog() {
                return this.$axios.get('/');
            },
            getLanguageClass(value) {
                if (value == this.locale) {
                    return ' font-weight-black';
                }
                else {
                    return ' ';
                }
            },
            showMyDialog(content) {
                this.$store.dispatch('set_dialog', ['content', content]);
                let title = '';
                let actions = [];
                // This handles dialog for 'track-order'
                if (content == 'track-order') {
                    if (this.locale == 'id') {
                        title = 'Lacak Order';
                        actions.push(
                            { name: 'close', text: 'tutup', color: 'tertiary' },
                            { name: 'track_order', text: 'lacak', color: 'secondary' }
                        );
                    }
                    else if (this.locale == 'en') {
                        title = 'Track Order';
                        actions.push(
                            { name: 'close', text: 'close', color: 'tertiary' },
                            { name: 'track_order', text: 'track', color: 'secondary' }
                        );
                    }
                }
                // This handles dialog for 'login'
                else if (content == 'login') {
                    if (this.locale == 'id') {
                        title = 'Akun Saya';
                        actions.push(
                            { name: 'close', text: 'tutup' },
                            { name: 'login', text: 'masuk' }
                        );
                    }
                    else if (this.locale == 'en') {
                        title = 'My Account';
                        actions.push(
                            { name: 'close', text: 'close' },
                            { name: 'login', text: 'login' }
                        );
                    }
                }
                // This handles dialog for 'register'
                else if (content == 'register') {
                    if (this.locale == 'id') {
                        title = 'Daftar';
                        actions.push(
                            { name: 'close', text: 'tutup' },
                            { name: 'register', text: 'daftar' }
                        );
                    }
                    else if (this.locale == 'en') {
                        title = 'Register';
                        actions.push(
                            { name: 'close', text: 'close' },
                            { name: 'register', text: 'register' }
                        );
                    }
                }
                this.$store.dispatch('set_dialog', ['title', title]);
                this.$store.dispatch('set_dialog', ['actions', actions]);
                return this.$store.dispatch('set_dialog', ['show', true]);
            },
            handleMyDialogAction(name) {
                if (name == 'close') {
                    this.$store.dispatch('set_dialog', ['show', false]);
                    return setTimeout(() => {
                        this.$store.dispatch('reset_dialog');
                        this.$store.dispatch('reset_server_response');
                    }, 250);
                }
                else if (name == 'track_order') {
                    this.$store.dispatch('set_dialog', ['loading', true]);
                    return this.$refs.trackOrder.submit();
                }
                else if (name == 'login') {
                    this.$store.dispatch('set_dialog', ['loading', true]);
                }
                else if (name == 'register') {
                    this.$store.dispatch('set_dialog', ['loading', true]);
                }
            },
            handleViewportResize() {
                return [
                    this.$set(this.viewport, 'width', window.innerWidth),
                    this.$set(this.viewport, 'height', window.innerHeight)
                ];
            }
        },
        mounted() {
            this.set_locale('id');
            this.initServerDateTime();
            this.init_admins();
            this.init_queues();
            this.init_business_hours();
            this.init_categories();
            this.sendVisitLog();
        }
    }
</script>

<i18n>
{
    "id": {
        "login": "masuk",
        "register": "daftar",
        "open": "BUKA",
        "closed": "TUTUP",
        "track_order": "Lacak order",
        "login": "Masuk",
        "register": "Daftar"
    },
    "en": {
        "login": "login",
        "register": "register",
        "open": "OPEN",
        "closed": "CLOSED",
        "track_order": "Track order",
        "login": "Login",
        "register": "Register"
    }
}
</i18n>
