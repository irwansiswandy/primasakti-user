<template>
    <v-card id="contact-us" class="elevation-0 transparent">
        <v-card-title primary-title class="layout justify-center">
            <div class="headline">
                {{ $t('contact_us') }}
            </div>
        </v-card-title>
        <v-card-text>
            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
        </v-card-text>
        <v-list class="transparent">
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="secondary" class="blue--text text--lighten-2">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>+62 31 8484808</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="secondary" class="blue--text text--lighten-2">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>primasakti_copycenter@yahoo.com</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'contact-us',
        computed: {
            ...mapGetters([
                'locale'
            ])
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        mounted() {
            return this.$i18n.locale = this.locale;
        }
    }
</script>

<i18n>
    {
        "id": {
            "contact_us": "Hubungi Kami"
        },
        "en": {
            "contact_us": "Contact Us"
        }   
    }
</i18n>

