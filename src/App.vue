<template>
    <v-app>
        <v-content>

            <v-sheet tile color="primary lighten-1 white--text" class="pt-1 pb-1 pl-4 pr-4">
                <v-layout row wrap>
                    <v-flex md6 class="text-xs-left">
                        <span class="caption">
                            {{ displayed_date + ' / ' + server_time }}
                        </span>
                    </v-flex>
                    <v-flex md6 class="text-xs-right">
                        <span style="cursor: pointer" :class="'caption' + getLanguageClass('en')"
                              v-on:click="$store.dispatch('set_locale', 'en')">
                            English
                        </span>
                        <span class="caption ml-2 mr-2">|</span>
                        <span style="cursor: pointer" :class="'caption' + getLanguageClass('id')"
                              v-on:click="$store.dispatch('set_locale', 'id')">
                            Indonesia
                        </span>
                    </v-flex>
                </v-layout>
            </v-sheet>

            <v-toolbar flat dense color="primary white--text">
                <v-toolbar-title>
                    <h4 style="cursor: pointer"
                        v-on:click="$router.replace('/')">
                        Primasakti
                    </h4>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items v-if="!user_is_authenticated">
                    <v-btn dark flat
                           v-on:click="$router.replace('/register')">
                        {{ $t('register') }}
                    </v-btn>
                    <v-menu bottom offset-y :close-on-content-click="false">
                        <v-btn dark flat slot="activator">
                            {{ $t('login') }}
                        </v-btn>
                        <v-card tile width="350">
                            <v-card-text class="pa-4">
                                <login-form></login-form>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-toolbar-items>
            </v-toolbar>

            <router-view></router-view>

        </v-content>

        <v-footer class="tertiary white--text justify-center">
            <span class="caption">
                &copy {{ footer_year }} - UD. Primasakti - All Rights Reserved
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
                'server_time'
            ]),
            footer_year() {
                return moment(this.server_date, 'YYYY-MM-DD').year();
            },
            displayed_date() {
                return moment(this.server_date, 'YYYY-MM-DD').format('dddd, DD MMMM YYYY');
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            },
            'server_date'(date) {
                return this.$store.dispatch('init_shop_status');
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
        }
    }
</script>

<i18n>
{
    "id": {
        "login": "masuk",
        "register": "daftar"
    },
    "en": {
        "login": "login",
        "register": "register"
    }
}
</i18n>
