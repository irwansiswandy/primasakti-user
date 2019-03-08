<template>
    <div id="index">
        <v-app light>

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
                                    <v-flex xs12 md3>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Money friendly</div>
                                            </v-card-title>
                                            <v-card-text>
                                                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md3>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Professional</div>
                                            </v-card-title>
                                            <v-card-text>
                                                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md3>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline">High quality work</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md3>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Out of the box</div>
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

                <v-divider class="ml-5 mr-5"></v-divider>

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex md3 v-for="n in 10">
                                <v-card>
                                    <v-card-title>
                                        Admin #{{ n }}
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <section>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex md12 align-self-center class="text-xs-left">
                                <v-btn small fab outline color="tertiary"
                                       v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                    <v-icon>fa-google</v-icon>
                                </v-btn>
                                <v-btn small fab outline color="tertiary"
                                       v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                    <v-icon>fa-facebook</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

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
    import ViewContactUs from './partials/contact_us.vue';

    export default {
        name: 'index',
        components: {
            'view-contact-us': ViewContactUs
        },
        data() {
            return {
                images: [
                    ImageHero,
                    ImageSection,
                    logoPrimasakti
                ]
            };
        },
        computed: {
            ...mapGetters([
                'locale'
            ]),
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            openLink(link) {
                // This opens new tab that points to link.
                return window.open(link, 'new window');
            }
        }
    }
</script>

<i18n>
{
    "id": {
        "login": "masuk",
        "register": "daftar",
        "server_date": "tanggal server",
        "server_time": "waktu server"
    },
    "en": {
        "login": "login",
        "register": "register",
        "server_date": "server date",
        "server_time": "server time"
    }
}
</i18n>
