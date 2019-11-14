<template>
    <v-card id="business-hours-info"
            flat class="transparent"
            v-if="!business_hours.loading">
        <v-card-title class="headline justify-center">
            {{ $t('title') }}
            <v-chip small label outline color="error" class="caption">
                {{ $t('message') }}
            </v-chip>
        </v-card-title>
        <v-list dense class="transparent">
            <v-list-tile v-for="(business_hour, index) in business_hours.data" :key="index">
                <v-list-tile-content :class="getActiveBusinessHourClass(business_hour.day)">
                    {{ getDayText(business_hour.day) }}
                </v-list-tile-content>
                <v-list-tile-content :class="'align-end ' + getActiveBusinessHourClass(business_hour.day)">
                    {{ formatTime(business_hour.open) + ' - ' + formatTime(business_hour.close) }}
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
            getActiveBusinessHourClass(day_number) {
                if (day_number == this.current_day_number) {
                    return 'secondary white--text pa-2';
                }
                else {
                    return 'pa-2';
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
        "message": "Hari libur nasional kami tutup"
    },
    "en": {
        "title": "Business Hours",
        "message": "We are closed on public holiday"
    }
}
</i18n>
