<template>
    <v-data-table :locale="locale"
                  :loading="loading"
                  :headers="table_headers"
                  :items="table_items"
                  :class="table_class"
                  hide-actions>
        <template tag="tr" slot="items" slot-scope="props">
            <td class="text-xs-left">
                {{ props.item.number }}
            </td>
            <td class="text-xs-left">
                {{ props.item.name }}
            </td>
            <td class="text-xs-center">
                <v-chip label small dark color="error"
                        v-if="props.item.waiting && !props.item.handled && !props.item.finished">
                    {{ formatChipText($t('queuing')) }}
                </v-chip>
                <v-chip label small dark color="info"
                        v-else-if="props.item.waiting && props.item.handled && !props.item.finished">
                    {{ formatChipText($t('handled')) }}
                </v-chip>
                <v-chip label small dark color="success"
                        v-else-if="props.item.waiting && props.item.handled && props.item.finished">
                    {{ formatChipText($t('finished')) }}
                </v-chip>
            </td>
            <td class="text-xs-right">
                {{ formatDateTime(props.item.created_at) }}
                <br>
                <span class="caption tertiary--text">
                    {{ getFromNow(props.item.created_at) }}
                </span>
            </td>
        </template>
    </v-data-table>
</template>

<style scoped>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import moment from 'moment';

    export default {
        name: 'queues-table',
        props: {
            queues: {
                type: Array | Object,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: () => {
                    return false;
                }
            },
            borderless: {
                type: Boolean,
                required: false,
                default: () => {
                    return false;
                }
            }
        },
        computed: {
            ...mapGetters([
                'locale'
            ]),
            table_class() {
                if (!this.borderless) {
                    return 'elevation-2';
                }
                else {
                    return undefined;
                }
            },
            table_headers() {
                return [
                    { text: 'NO', value: 'number', align: 'left', sortable: true },
                    { text: 'NAMA', value: 'name', align: 'left', sortable: true },
                    { text: 'STATUS', value: 'status', align: 'center' },
                    { text: 'WAKTU MULAI', align: 'right' }
                ];
            },
            table_items() {
                let _items = [];
                for (let i=0; i<Object.keys(this.queues).length; i++) {
                    let key = Object.keys(this.queues)[i];
                    for (let j=0; j<this.queues[key].length; j++) {
                        _items.push(this.queues[key][j]);
                    }
                }
                return _items;
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            formatDateTime(date_time) {
                return moment(date_time, 'YYYY-MM-DD HH:mm:ss').locale(this.locale).format('DD/MM/YYYY HH:mm:ss');
            },
            formatChipText(text) {
                return _.upperCase(text);
            },
            getFromNow(date_time) {
                return moment(date_time, 'YYYY-MM-DD HH:mm:ss').locale(this.locale).fromNow();
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
            "queuing": "antri",
            "handled": "dilayani",
            "finished": "selesai"
        },
        "en": {
            "queuing": "queuing",
            "handled": "handled",
            "finished": "finished"
        }
    }
</i18n>