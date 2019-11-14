<template>
    <v-card id="shop-info"
            flat class="transparent">
        <v-card-title class="headline justify-center">
            {{ $t('title') }}
            <v-chip small label dark outline color="secondary caption" class="ml-2">
                LIVE
            </v-chip>
        </v-card-title>
        <v-list dense class="transparent">
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('queuing') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    <span v-if="waiting.length > 0">
                        {{ waiting.length + ' ' + $t('person') }}
                    </span>
                    <span v-else>
                        -
                    </span>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('being_handled') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    <span v-if="handled.length > 0">
                        {{ handled.length + ' ' + $t('person') }}
                    </span>
                    <span v-else>
                        -
                    </span>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    {{ $t('just_finished') }}
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    <span v-if="finished.length > 0">
                        {{ finished.length + ' ' + $t('person') }}
                    </span>
                    <span v-else>
                        -
                    </span>
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
            waiting() {
                return this.queues.data.waiting;
            },
            handled() {
                return this.queues.data.handled;
            },
            finished() {
                return this.queues.data.finished;
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
            "queuing": "Sedang antri",
            "being_handled": "Sedang dilayani",
            "just_finished": "Baru selesai",
            "person": "orang"
        },
        "en": {
            "title": "Shop Information",
            "queuing": "Queuing",
            "being_handled": "Being handled",
            "just_finished": "Just finished",
            "person": "person"
        }
    }
</i18n>
