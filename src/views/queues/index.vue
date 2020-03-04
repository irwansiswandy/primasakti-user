<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap align-center>
            <v-flex sm6 class="text-xs-left">
                <v-btn small color="tertiary" dark
                       @click="$router.push('/')">
                    <v-icon left>fa-chevron-left</v-icon>{{ $t('to_mainpage') }}
                </v-btn>
                <v-btn small color="secondary"
                       :disabled="!buttons.add_queue"
                       @click="showDialog('new_queue')">
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
        <dialog-template></dialog-template>
    </v-container>
</template>

<style scoped>
    /* */
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import QueuesTable from './table.vue';
    import DialogTemplate from '../../components/dialog';

    export default {
        name: 'queues-index',
        components: {
            QueuesTable,
            DialogTemplate
        },
        computed: {
            ...mapGetters([
                'locale',
                'queues',
                'buttons',
                'dialog'
            ])
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            ...mapActions([
                'set_dialog'
            ])
        },
        mounted() {
            this.$i18n.locale = this.locale;
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