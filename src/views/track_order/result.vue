<template>
    <div id="view-order">
        <v-card :flat="borderless"
                :tile="!borderless">
            <v-list dense>
                <v-list-tile class="secondary--text">
                    <v-list-tile-content class="font-weight-bold">
                        {{ $t('order_no') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end font-weight-bold">
                        {{ order.order_no }}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('datetime_added') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        {{ order.created_at }}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-content>
                        {{ formatUserType(order.user_type) }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        {{ order.user.first_name + ' ' + order.user.last_name }}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('handler') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        {{ order.admin.first_name + ' ' + order.admin.last_name }}
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile class="secondary--text">
                    <v-list-tile-content class="font-weight-bold">
                        Status
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end font-weight-bold">
                        <v-chip small label :color="getChipColor(order.status)">
                            <span class="caption">{{ order.status }}</span>
                        </v-chip>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
        <v-layout row wrap class="mt-2"
                  v-if="order.status == 'FINISHED'">
            <v-flex sm12>
                <a class="caption secondary--text">
                    {{ $t('view_invoice') }}
                </a>
            </v-flex>
        </v-layout>
    </div>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'view-order',
        props: {
            order: {
                type: Object,
                required: true
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
            ])
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            formatUserType(value) {
                return _.split(value, '\\')[1];
            },
            getChipColor(status) {
                if (status == 'PENDING/QUEUING') {
                    return 'error white--text';
                }
                else if (status == 'PROCESSING') {
                    return 'info white--text';
                }
                else if (status == 'FINISHED') {
                    return 'success white--text';
                }
                else {
                    return '';
                }
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
        "order_no": "No. Order",
        "datetime_added": "Tgl / Waktu Masuk",
        "handler": "Yang Mengerjakan",
        "view_invoice": "Lihat Nota"
    },
    "en": {
        "order_no": "Order No.",
        "datetime_added": "Date / Time Added",
        "handler": "Handled By",
        "view_invoice": "View Invoice"
    }
}
</i18n>


