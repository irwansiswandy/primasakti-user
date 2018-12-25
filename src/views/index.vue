<template>
    <div id="index">
        <v-app light>
            <v-toolbar class="primary white--text">
                <v-toolbar-title class="text-xs-left">
                    <h4>PRIMASAKTI</h4>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat dark>
                        {{ $t('register') }}
                    </v-btn>
                    <v-menu left offset-y :close-on-content-click="false">
                        <v-btn flat dark slot="activator">
                            {{ $t('login') }}
                        </v-btn>
                        <v-card width="350">
                            <v-card-text class="pa-4">
                                <login-form></login-form>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <section>
                    <v-parallax :src="images[0]" height="600">
                        <v-layout column align-center justify-center class="white--text">
                            <img src="../assets/logo_primasakti.svg" alt="Vuetify.js" height="250">
                            <!--
                            <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
                            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                            -->
                            <v-btn class="secondary mt-5" dark large href="/pre-made-themes">
                                Get Started
                            </v-btn>
                        </v-layout>
                    </v-parallax>
                </section>
                <section>
                    <v-layout column wrap class="my-5" align-center>
                        <v-flex xs12 sm4 class="my-3">
                            <div class="text-xs-center">
                                <h2 class="headline">The best way to start developing</h2>
                                <span class="subheading">Cras facilisis mi vitae nunc</span>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap align-center>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Material Design</div>
                                            </v-card-title>
                                            <v-card-text>
                                                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline">Fast development</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Completely Open Sourced</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </section>
                <section>
                    <v-parallax :src="images[1]" height="380">
                        <v-layout column align-center justify-center>
                            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                            <em>Kick-start your application today</em>
                            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
                                Get Started
                            </v-btn>
                        </v-layout>
                    </v-parallax>
                </section>
                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Company info</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm4 offset-sm1>
                                <view-contact-us></view-contact-us>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>
                
                <!-- Start: language toggle button -->
                <section>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex md6 align-self-center class="text-xs-left">
                                <v-btn small fab outline color="tertiary"
                                       v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                    <v-icon>fa-google</v-icon>
                                </v-btn>
                                <v-btn small fab outline color="tertiary"
                                       v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                    <v-icon>fa-facebook</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex md6 align-self-center class="text-xs-right">
                                <v-btn-toggle dark mandatory class="tertiary"
                                              v-model="locale_toggle_button_value">
                                    <v-btn small flat>
                                        <span class="caption">Indonesia</span>
                                    </v-btn>
                                    <v-btn small flat>
                                        <span class="caption">English</span>
                                    </v-btn>
                                </v-btn-toggle>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>
                <!-- End: language toggle button -->

            </v-content>
        </v-app>
    </div>
</template>

<style>
    /* */
</style>

<script>
    import ImageHero from '../assets/hero.jpeg';
    import ImageSection from '../assets/section.jpg';
    import logoPrimasakti from '../assets/logo_primasakti.svg';
    import { ServerURL } from '../_variables.js';
    import { mapGetters } from 'vuex';
    import LoginForm from './authentication/login.vue';
    import ViewContactUs from './partials/contact_us.vue';

    export default {
        name: 'index',
        components: {
            'login-form': LoginForm,
            'view-contact-us': ViewContactUs
        },
        data() {
            return {
                images: [
                    ImageHero,
                    ImageSection,
                    logoPrimasakti
                ],
                locale_toggle_button_value: 0
            };
        },
        computed: {
            ...mapGetters([
                'locale'
            ]),
            selected_locale() {
                if (this.locale_toggle_button_value == 0) {
                    return 'id';
                }
                else if (this.locale_toggle_button_value == 1) {
                    return 'en';
                }
            }
        },
        watch: {
            'selected_locale'(value) {
                return this.$store.dispatch('set_locale', value);
            },
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            openLink(link) {
                // This opens new tab that points to link.
                return window.open(link, 'new window');
            }
        },
        mounted() {
            return this.$store.dispatch('set_locale', this.selected_locale);
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
