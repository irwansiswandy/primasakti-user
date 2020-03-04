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
        <dialog-template @action="handleDialogAction">
            ... ... ...
        </dialog-template>
    </v-container>
</template>

<style scoped>
    /* */
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import QueuesTable from './table.vue';
    import DialogTemplate from '../../components/dialog';
    import InputFormQueue from './input_form';

    export default {
        name: 'queues-index',
        components: {
            QueuesTable,
            DialogTemplate,
            InputFormQueue
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
                'set_dialog',
                'reset_dialog'
            ]),
            showDialog(content) {
                this.set_dialog(['content', content]);
                let dialog_title = _.capitalize(this.$i18n.messages[this.locale]['add_queue_dialog_title']);
                this.set_dialog(['title', dialog_title]);
                let dialog_actions = [
                    {  name: 'cancel', text: this.$i18n.messages[this.locale]['cancel'], color: 'tertiary' },
                    { name: 'add', text: this.$i18n.messages[this.locale]['add'], color: 'secondary' }
                ];
                this.set_dialog(['actions', dialog_actions]);
                return this.set_dialog(['show', true]);
            },
            handleDialogAction(action_name) {
                switch (action_name) {
                    case 'cancel':
                        this.set_dialog(['show', false]);
                        setTimeout(() => {
                            return this.reset_dialog();
                        }, 500);
                        break;
                }
            }
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
            "add_queue": "daftar",
            "add_queue_dialog_title": "tambah antrian",
            "cancel": "batal",
            "add": "tambah"
        },
        "en": {
            "to_mainpage": "mainpage",
            "add_queue": "add",
            "add_queue_dialog_title": "add queue",
            "cancel": "cancel",
            "add": "add"
        }
    }
</i18n>