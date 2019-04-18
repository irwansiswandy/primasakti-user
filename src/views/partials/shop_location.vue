<template>
    <v-card id="shop-location"
            flat class="transparent">
        <v-card-title class="headline justify-center">
            {{ $t('title') }}
        </v-card-title>
        <v-card-text>
            Jl. Raya Tenggilis No. 34-34A
            <br>Surabaya 60292
            <br>Jawa Timur, Indonesia
            <br>
            <br><v-icon color="secondary" class="mr-1">fa-phone</v-icon> +62 31 8484808
            <br><v-icon color="secondary" class="mr-1">fa-envelope-o</v-icon> primasakti_copycenter@yahoo.com
        </v-card-text>
    </v-card>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'shop-location',
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
            this.$nextTick(() => {
                this.$i18n.locale = this.locale;
            })
        }
    }
</script>

<i18n>
{
    "id": {
        "title": "Lokasi Toko"
    },
    "en": {
        "title": "Shop Location"
    }
}
</i18n>
