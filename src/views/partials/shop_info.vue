<template>
    <v-card id="shop-info"
            flat class="transparent">
        <v-card-title class="headline justify-center">
            {{ $t('title') }}
        </v-card-title>
        <v-list dense class="transparent">
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('queuing') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{ queuing.length + ' ' + $t('person') }}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('being_handled') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{ being_handled.length + ' ' + $t('person') }}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('just_finished') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{ just_finished.length + ' ' + $t('person') }}
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
        name: 'shop-info',
        computed: {
            ...mapGetters([
                'locale',
                'queues'
            ]),
            queuing() {
                return this.queues.filter((queue) => {
                    return queue.waiting && !queue.handled && !queue.finished;
                });
            },
            being_handled() {
                return this.queues.filter((queue) => {
                    return queue.waiting && queue.handled && !queue.finished;
                });
            },
            just_finished() {
                return this.queues.filter((queue) => {
                    return queue.waiting && queue.handled && queue.finished;
                });
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
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
            "title": "Informasi Toko",
            "queuing": "Sedang Antri",
            "being_handled": "Sedang Dilayani",
            "just_finished": "Baru Selesai",
            "person": "orang"
        },
        "en": {
            "title": "Shop Information",
            "queuing": "Queuing",
            "being_handled": "Being Handled",
            "just_finished": "Just Finished",
            "person": "person"
        }
    }
</i18n>
