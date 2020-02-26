<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap align-center>
            <v-flex sm6 class="text-xs-left">
                <v-btn small color="tertiary" dark
                       @click="$router.push('/')">
                    <v-icon left>fa-chevron-left</v-icon>{{ $t('to_mainpage') }}
                </v-btn>
                <v-btn small color="secondary"
                       :disabled="!buttons.add">
                    <v-icon left>fa-plus</v-icon>{{ $t('add_queue') }}
                </v-btn>
            </v-flex>
            <v-flex sm6 class="text-xs-right">
                <h2 class="secondary--text">DAFTAR ANTRIAN</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex sm12>
                <queues-table :loading="queues.loading"
                              :queues="queues.data">
                </queues-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import QueuesTable from './table.vue';

    export default {
        name: 'queues-index',
        components: {
            QueuesTable
        },
        data() {
            return {
                buttons: {
                    add: false
                }
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'queues'
            ])
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        }
    }
</script>

<i18n>
    {
        "id": {
            "to_mainpage": "halaman depan",
            "add_queue": "daftar"
        },
        "en": {
            "to_mainpage": "mainpage",
            "add_queue": "add"
        }
    }
</i18n>