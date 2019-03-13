<template>
    <v-card id="business-hours-info"
            flat class="transparent">
        <v-card-title class="headline justify-center">
            {{ $t('title') }}
        </v-card-title>
        <v-list dense class="transparent">
            <v-list-tile v-for="business_hour in business_hours">
                <v-list-tile-content :class="getTextClass(business_hour.day)">
                    {{ getDayText(business_hour.day) }}
                </v-list-tile-content>
                <v-list-tile-content :class="'align-end' + getTextClass(business_hour.day)">
                    {{ formatTime(business_hour.open) + ' - ' + formatTime(business_hour.close) }}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-card-text class="caption red--text">
            * {{ $t('message') }}
        </v-card-text>
    </v-card>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import moment from 'moment';

    export default {
        name: 'business-hours-info',
        computed: {
            ...mapGetters([
                'locale',
                'business_hours',
                'server_date'
            ]),
            current_day_number() {
                return moment(this.server_date, 'YYYY-MM-DD').locale(this.locale).day();
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            getDayText(day_number) {
                return moment().locale(this.locale).weekday(day_number - 1).format('dddd');
            },
            getTextClass(day_number) {
                if (day_number == this.current_day_number) {
                    return ' font-weight-black secondary--text';
                }
                else {
                    return '';
                }
            },
            formatTime(time) {
                return moment(time, 'HH:mm:ss').locale(this.locale).format('hh:mm A');
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
        "title": "Hari / Jam Kerja",
        "message": "Hari raya / libur nasional kami tutup"
    },
    "en": {
        "title": "Business Hours",
        "message": "We are closed on public holiday"
    }
}
</i18n>

