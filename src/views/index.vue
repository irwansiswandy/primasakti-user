<template>
    <div id="index">
        <v-app light>
            <v-content>

                <section>
                    <v-parallax :src="images[0]" height="570">
                        <v-layout column align-center justify-center class="white--text">
                            <img src="../assets/images/logo.svg" alt="Vuetify.js" height="250">
                        </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-sheet tile class="secondary white--text pt-2 pb-2">
                        <vue-marquee-text :duration="45">
                            <span v-for="(category, index) in categories" :key="index"
                                  class="subheading ml-3 mr-3">
                                {{ category.name }}
                            </span>
                        </vue-marquee-text>
                    </v-sheet>
                </section>

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <shop-info></shop-info>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <shop-location></shop-location>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <business-hours-info></business-hours-info>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <section>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs-12>
                                <v-card flat class="transparent">
                                    <v-card-title>
                                        <v-divider></v-divider>
                                        <div class="headline ml-3 mr-3">
                                            {{ $t('bosses') }}
                                        </div>
                                        <v-divider></v-divider>
                                    </v-card-title>
                                    <v-container fluid class="pl-0 pr-0">
                                        <v-layout row wrap>
                                            <v-flex md6 v-for="(admin, index) in bosses" :key="index">
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
                                                            <span v-for="(contact, index) in admin.contacts" :key="index" class="caption">
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
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs-12>
                                <v-card flat class="transparent">
                                    <v-card-title>
                                        <v-divider></v-divider>
                                        <div class="headline ml-3 mr-3">
                                            {{ $t('our_team') }}
                                        </div>
                                        <v-divider></v-divider>
                                    </v-card-title>
                                    <v-container fluid class="pl-0 pr-0">
                                        <v-layout row wrap>
                                            <v-flex md3 v-for="(admin, index) in officers" :key="index">
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
                                                        <!--
                                                        <div v-if="admin.contacts.length > 0">
                                                            <span v-for="(contact, index) in admin.contacts" :key="index" class="caption">
                                                                <v-icon small color="secondary" class="mr-1">fa-mobile</v-icon>
                                                                <v-icon small color="secondary" class="mr-1 ">fa-whatsapp</v-icon>
                                                                {{ contact.number }}
                                                            </span>
                                                        </div>
                                                        -->
                                                    </v-card-text>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <!-- Footer -->
                <section>
                    <v-container fluid class="pa-2">
                        <v-layout row>
                            <v-flex md12 align-self-center class="text-xs-left">
                                <v-tooltip bottom>
                                    <v-btn slot="activator"
                                           dark small fab color="blue"
                                           v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                        <v-icon>fa-google</v-icon>
                                    </v-btn>
                                    <span>{{ $t('primasakti_google_site') }}</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <v-btn slot="activator"
                                           dark small fab color="green"
                                           v-on:click="openLink('https://primasakti-print-shop.business.site/')">
                                        <v-icon>
                                            <!-- -->
                                        </v-icon>
                                    </v-btn>
                                    <span>{{ $t('primasakti_google_site') }}</span>
                                </v-tooltip>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>
                <!-- / Footer -->

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
    import Logo from '../assets/images/logo.svg';
    import { ServerURL } from '../_variables.js';
    import { mapGetters } from 'vuex';
    import QueuesInfo from '../views/partials/queues_info.vue';
    import ShopLocation from '../views/partials/shop_location.vue';
    import ShopInfo from '../views//partials//shop_info.vue';
    import BusinessHoursInfo from '../views/partials/business_hours_info.vue';
    import VueMarqueeText from 'vue-marquee-text-component';

    export default {
        name: 'index',
        components: {
            'queues-info': QueuesInfo,
            'shop-location': ShopLocation,
            'shop-info': ShopInfo,
            'business-hours-info': BusinessHoursInfo,
            'vue-marquee-text': VueMarqueeText
        },
        data() {
            return {
                images: [
                    Collage01,
                    Logo
                ]
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'admins',
                'categories'
            ]),
            bosses() {
                return this.admins.filter((admin) => {
                    return admin.role.name === 'MASTER-ADMIN';
                });
            },
            officers() {
                return this.admins.filter((admin) => {
                    return admin.role.name === 'STAFF';
                });
            }
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
        "bosses": "Pimpinan",
        "our_team": "Staff Kami",
        "primasakti_google_site": "Primasakti di Google"
    },
    "en": {
        "login": "login",
        "register": "register",
        "server_date": "server date",
        "server_time": "server time",
        "bosses": "Chief Officers",
        "our_team": "Officers",
        "primasakti_google_site": "Primasakti on Google"
    }
}
</i18n>
