<template>
    <div id="index">
        <v-app light>
            <v-content>

                <section>
                    <v-parallax :src="images[0]" height="570">
                        <v-layout column align-center justify-center class="white--text">
                            <img src="../assets/logo_primasakti.svg" alt="Vuetify.js" height="250">
                            <div class="white--text mt-2 mb-2 title text-xs-center">
                                Digital Copy & Print Shop
                            </div>
                            <!--
                            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                            <v-btn class="secondary mt-5" dark large href="/pre-made-themes">
                                Get Started
                            </v-btn>
                            -->
                        </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-sheet class="secondary white--text pt-2 pb-2">
                        <vue-marquee-text :duration="45">
                            <span v-for="(product_category, index) in product_categories" :key="index"
                                  class="subheading ml-3 mr-3">
                                {{ product_category.name }}
                            </span>
                        </vue-marquee-text>
                    </v-sheet>
                </section>

                <!--
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
                    <v-parallax :src="images[0]" height="380">
                        <v-layout column align-center justify-center>
                            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                            <em>Kick-start your application today</em>
                            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
                                Get Started
                            </v-btn>
                        </v-layout>
                    </v-parallax>
                </section>
                -->

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <shop-info></shop-info>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <business-hours-info></business-hours-info>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex md12 class="headline">
                                {{ $t('our_team') }}
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex md3 v-for="admin in admins">
                                <v-card flat class="transparent">
                                    <v-card-text>
                                        <!--
                                        <v-avatar size="175" color="secondary" class="mb-3">
                                            <v-icon large>fa-user</v-icon>
                                        </v-avatar>
                                        -->
                                        <v-icon size="150" color="secondary" class="mb-3">
                                            fa-user-circle
                                        </v-icon>
                                        <div class="font-weight-bold">
                                            {{ admin.full_name }}
                                        </div>
                                        <div class="caption tertiary--text">
                                            {{ admin.age + ', ' + admin.role.name }}
                                        </div>
                                        <div v-if="admin.contacts.length > 0">
                                            <span v-for="contact in admin.contacts" class="caption">
                                                <v-icon small color="secondary" class="mr-1">fa-mobile</v-icon>
                                                <v-icon small color="secondary" class="mr-1 ">fa-whatsapp</v-icon>
                                                {{ contact.number }}
                                            </span>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <section>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex md12 align-self-center class="text-xs-left">
                                <v-tooltip bottom>
                                    <v-btn slot="activator" small fab outline color="tertiary"
                                           v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                        <v-icon>fa-google</v-icon>
                                    </v-btn>
                                    <span>{{ $t('primasakti_google_site') }}</span>
                                </v-tooltip>
                                <!--
                                <v-btn small fab outline color="tertiary"
                                       v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                    <v-icon>fa-facebook</v-icon>
                                </v-btn>
                                -->
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

            </v-content>
        </v-app>
    </div>
</template>

<style>
    #parallax-1 {
        background-image: url('../assets/triangle_background_tertiary.svg');
        background-repeat: repeat;
    }
</style>

<script>
    import Collage01 from '../assets/collage_01.jpg'; 
    // import ImageHero from '../assets/hero.jpeg';
    // import ImageSection from '../assets/section.jpg';
    import logoPrimasakti from '../assets/logo_primasakti.svg';
    import { ServerURL } from '../_variables.js';
    import { mapGetters } from 'vuex';
    import QueuesInfo from '../views/partials/queues_info.vue';
    import ShopInfo from '../views/partials/shop_info.vue';
    import BusinessHoursInfo from '../views/partials/business_hours_info.vue';
    import VueMarqueeText from 'vue-marquee-text-component';

    export default {
        name: 'index',
        components: {
            'queues-info': QueuesInfo,
            'shop-info': ShopInfo,
            'business-hours-info': BusinessHoursInfo,
            'vue-marquee-text': VueMarqueeText
        },
        data() {
            return {
                images: [
                    Collage01,
                    // ImageHero,
                    // ImageSection,
                    logoPrimasakti
                ]
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'admins',
                'product_categories'
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
        },
        mounted() {
            this.$nextTick(() => {
                this.$i18n.locale = this.locale;
            });
        }
    }
</script>

<i18n>
{
    "id": {
        "login": "masuk",
        "register": "daftar",
        "server_date": "tanggal server",
        "server_time": "waktu server",
        "our_team": "Tim Kami",
        "primasakti_google_site": "Primasakti di Google"
    },
    "en": {
        "login": "login",
        "register": "register",
        "server_date": "server date",
        "server_time": "server time",
        "our_team": "Our Team",
        "primasakti_google_site": "Primasakti on Google"
    }
}
</i18n>
