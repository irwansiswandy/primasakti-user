<template>
    <div id="view-order">
        <v-card :flat="borderless"
                :tile="!borderless">
            <v-list dense>
                <v-list-tile>
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
                        <div class="caption">
                            {{ order.user.email }}
                        </div>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-content class="font-weight-bold">
                        Status
                    </v-list-tile-content>
                    <v-list-tile-content class="align-end font-weight-bold">
                        {{ order.status }}
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-card-actions v-if="order.status == 'FINISHED'">
                <v-spacer></v-spacer>
                <span class="caption secondary--text">
                    Lihat Nota
                </span>
            </v-card-actions>
        </v-card>
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
        "datetime_added": "Tgl / Waktu Masuk"
    },
    "en": {
        "order_no": "Order No.",
        "datetime_added": "Date / Time Added"
    }
}
</i18n>


