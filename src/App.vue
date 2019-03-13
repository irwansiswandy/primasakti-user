<template>
    <v-app>
        <v-content>

            <v-sheet tile color="primary lighten-1 white--text" class="pt-1 pb-1 pl-3 pr-3">
                <v-layout row wrap>
                    <v-flex md6 class="text-xs-left">
                        <span class="caption">
                            {{ displayed_date + ' / ' + server_time }}
                        </span>
                        <span v-if="shop_is_open"
                              class="caption font-weight-black secondary--text ml-2">
                            {{ $t('open') }}
                        </span>
                        <span v-else
                              class="caption font-weight-black red--text ml-2">
                            {{ $t('closed') }}
                        </span>
                    </v-flex>
                    <v-flex md6 class="text-xs-right">
                        <span class="ml-2">
                            <span class="flag-icon flag-icon-id"
                                  style="cursor: pointer"
                                  v-on:click="$store.dispatch('set_locale', 'id')">
                            </span>
                        </span>
                        <span class="ml-2">
                            <span class="flag-icon flag-icon-gb"
                                  style="cursor: pointer"
                                  v-on:click="$store.dispatch('set_locale', 'en')">
                            </span>
                        </span>
                    </v-flex>
                </v-layout>
            </v-sheet>

            <v-toolbar flat color="primary white--text">
                <v-toolbar-title>
                    <h4 style="cursor: pointer"
                        v-on:click="$router.replace('/')">
                        Primasakti
                    </h4>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items v-if="!user_is_authenticated">
                    <v-menu offset-y :close-on-content-click="false">
                        <v-btn slot="activator" dark icon>
                            <v-icon>fa-user</v-icon>
                        </v-btn>
                        <v-card flat width="300">
                            <v-card-text>
                                <login-form></login-form>
                                <v-btn block outline color="secondary"
                                       v-on:click="$router.replace('/register')">
                                    {{ $t('register') }}
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-toolbar-items>
            </v-toolbar>

            <router-view></router-view>

        </v-content>

        <v-footer class="tertiary white--text justify-center">
            <span class="caption">
                &copy {{ footer_year }} - All Rights Reserved - UD. Primasakti - by irwansiswandy
            </span>
        </v-footer>

    </v-app>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import LoginForm from './views/authentication/login.vue';

    export default {
        name: 'app',
        components: {
            'login-form': LoginForm
        },
        data() {
            return {
                user_is_authenticated: false
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'server_date',
                'server_time',
                'business_hours'
            ]),
            footer_year() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).year();
            },
            displayed_date() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).format('dddd, DD MMMM YYYY');
            },
            current_day_number() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).day();
            },
            current_business_hour() {
                let _current_business_hour = this.business_hours.filter((business_hour) => {
                    return business_hour.day === this.current_day_number;
                });
                return _current_business_hour[0];
            },
            shop_is_open() {
                let current_datetime = this.server_date + ' ' + this.server_time;
                return moment(current_datetime, 'YYYY-MM-DD HH:mm:ss').isBetween(this.server_date + ' ' + this.current_business_hour.open, this.server_date + ' ' + this.current_business_hour.close);
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            getLanguageClass(value) {
                if (value == this.locale) {
                    return ' font-weight-black';
                }
                else {
                    return ' ';
                }
            }
        },
        mounted() {
            this.$store.dispatch('set_locale', 'id');
            this.$store.dispatch('init_server_datetime');
            this.$store.dispatch('init_admins');
            this.$store.dispatch('init_queues');
            this.$store.dispatch('init_business_hours');
            this.$store.dispatch('init_product_categories');
        }
    }
</script>

<i18n>
{
    "id": {
        "login": "masuk",
        "register": "daftar",
        "open": "BUKA",
        "closed": "TUTUP"
    },
    "en": {
        "login": "login",
        "register": "register",
        "open": "OPEN",
        "closed": "CLOSED"
    }
}
</i18n>
