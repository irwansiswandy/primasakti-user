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
                    <span v-if="queuing.length > 0">
                        {{ queuing.length + ' ' + $t('person') }}
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
                    <span v-if="being_handled.length > 0">
                        {{ being_handled.length + ' ' + $t('person') }}
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
                    <span v-if="just_finished.length > 0">
                        {{ just_finished.length + ' ' + $t('person') }}
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
            queuing() {
                let value = [];
                for (let i=0; i<this.queues.data.length; i++) {
                    if (this.queues.data[i].waiting && !this.queues.data[i].handled && !this.queues.data[i].finished) {
                        value.push(this.queues.data[i]);
                    }
                    else {
                        continue;
                    }
                }
                return value;
            },
            being_handled() {
                let value = [];
                for (let i=0; i<this.queues.data.length; i++) {
                    if (this.queues.data[i].waiting && this.queues.data[i].handled && !this.queues.data[i].finished) {
                        value.push(this.queues.data[i]);
                    }
                    else {
                        continue;
                    }
                }
                return value;
            },
            just_finished() {
                let value = [];
                for (let i=0; i<this.queues.data.length; i++) {
                    if (this.queues.data[i].waiting && this.queues.data[i].handled && this.queues.data[i].finished) {
                        value.push(this.queues.data[i]);
                    }
                    else {
                        continue;
                    }
                }
                return value;
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
