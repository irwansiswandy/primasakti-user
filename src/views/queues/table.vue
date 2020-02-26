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
            <td>
                -
            </td>
            <td>
                -
            </td>
            <td class="text-xs-right">
                {{ props.item.created_at }}
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
                    { text: 'NO', name: 'number', value: 'number', sortable: true },
                    { text: 'NAMA' },
                    { text: 'STATUS' },
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
        }
    }
</script>