<template>
    <div id="view-order">
        <v-card :flat="borderless"
                :tile="!borderless">
            <v-list dense>
                <!-- NO. ORDER -->
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('order_no') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        {{ order.order_no }}
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / NO. ORDER -->
                <v-divider></v-divider>
                <!-- TGL & WAKTU MASUK -->
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('datetime_added') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        {{ order.created_at }}
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / TGL & WAKTU MASUK -->
                <v-divider></v-divider>
                <!-- CUSTOMER -->
                <v-list-tile>
                    <v-list-tile-content>
                        {{ formatUserType(order.user_type) }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        <span v-if="order.admin_id && order.admin">
                            {{ order.user.first_name + ' ' + order.user.last_name }}
                        </span>
                        <span v-else>
                            -
                        </span>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / CUSTOMER -->
                <v-divider></v-divider>
                <!-- YANG MENERIMA -->
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('admin') }}
                    </v-list-tile-content>
                    <v-list-tile-content v-if="order.handler_id && order.handler" class="align-end">
                        {{ order.handler.first_name + ' ' + order.handler.last_name }}
                    </v-list-tile-content>
                    <v-list-tile-content v-else class="align-end">
                        -
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / YANG MENERIMA -->
                <v-divider></v-divider>
                <!-- YANG MENGERJAKAN -->
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('handler') }}
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        <span v-if="order.handler_id && order.handler">
                            {{ order.handler.first_name + ' ' + order.handler.last_name }}
                        </span>
                        <span v-else>
                            -
                        </span>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / YANG MENGERJAKAN -->
                <v-divider></v-divider>
                <!-- STATUS -->
                <v-list-tile>
                    <v-list-tile-content>
                        Status
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        <v-chip small label :color="getChipColor(order.status)">
                            <span class="caption">{{ order.status }}</span>
                        </v-chip>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- / STATUS -->
                <!-- <v-divider></v-divider> -->
                <!-- NOTA
                <v-list-tile>
                    <v-list-tile-content>
                        {{ $t('invoices') }} ({{ order.invoices.length }})
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        <span v-if="order.invoices.length > 0">
                            <a class="ml-2">Lihat</a>
                        </span>
                        <span v-else>
                            {{ $t('invoices_not_exist') }}
                        </span>
                    </v-list-tile-content>
                </v-list-tile>
                / NOTA -->
            </v-list>
        </v-card>
    </div>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';

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
                'locale',
                'server_response'
            ])
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            ...mapActions([
                'set_server_response'
            ]),
            formatUserType(value) {
                return _.split(value, '\\')[1];
            },
            getChipColor(status) {
                if (status == 'PENDING') {
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
            },
            updateOrder(order) {
                return this.$axios
                .get('track_order', {
                    params: {
                        order_no: order.order_no
                    }
                })
                .then((response) => {
                    return this.set_server_response(response);
                });
            },
            initPusher() {
                return this.$pusher.bind('activity-log', (activity) => {
                    // Listens to order's activity
                    if (activity.subject_type == 'App\\Order') {
                        let pushed_order = activity.properties.subject;
                        if (activity.log_name == 'order-updated' && pushed_order.id == this.order.id) {
                            return this.updateOrder(this.order);
                        }
                    }
                    // Listens to invoice's activity
                    else if (activity.log_name == 'App\\Invoice') {
                        let pushed_invoice = activity.properties.subject;
                        if (activity.log_name == 'invoice-created' ||
                            activity.log_name == 'invoice-updated' ||
                            activity.log_name == 'invoice-deleted' &&
                            pushed_invoice.order_id == this.order.id) {
                            return this.updateOrder(this.order);
                        }
                    }
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$i18n.locale = this.locale;
                return this.initPusher();
            });
        }
    }
</script>

<i18n>
{
    "id": {
        "order_no": "No. Order",
        "datetime_added": "Tgl & Waktu Masuk",
        "admin": "Yang Menerima",
        "handler": "Yang Mengerjakan",
        "view_invoice": "Lihat Nota",
        "invoices": "Nota",
        "invoices_not_exist": "Belum ada"
    },
    "en": {
        "order_no": "Order No.",
        "datetime_added": "Date & Time Added",
        "admin": "Added By",
        "handler": "Handled By",
        "view_invoice": "View Invoice",
        "invoices": "Invoices",
        "invoices_not_exist": "N/A"
    }
}
</i18n>
