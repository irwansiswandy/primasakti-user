<template>
    <v-layout row wrap>
        <v-flex sm12>
            <v-text-field :color="color"
                          :prepend-icon="icon"
                          :label="$t('label')"
                          :hint="$t('hint')"
                          clearable
                          @click:clear="$emit('clear')"
                          :error="text_field_error"
                          :error-messages="text_field_error_messages"
                          v-model="order_no">
            </v-text-field>
            <v-alert type="error"
                     v-model="order_not_found">
                <span class="caption">
                    {{ $t('not_found_message') }}
                </span>
            </v-alert>
            <track-order-result v-if="order_found"
                                :order="server_response.data">
            </track-order-result>
        </v-flex>
    </v-layout>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import TrackOrderResult from './result.vue';

    export default {
        name: 'track-order-input-form',
        props: {
            color: {
                type: String,
                required: false,
                default: () => {
                    return 'secondary';
                }
            },
            icon: {
                type: String,
                required: false,
                default: () => {
                    return 'fa-barcode';
                }
            },
            errorMessages: {
                type: String | Array,
                required: false,
                default: () => {
                    return '';
                }
            }
        },
        components: {
            TrackOrderResult
        },
        data() {
            return {
                order_no: ''
            };
        },
        computed: {
            ...mapGetters([
                'locale',
                'server_response'
            ]),
            text_field_error() {
                if (this.server_response.status == 422) {
                    return true;
                }
                else {
                    return false;
                }
            },
            text_field_error_messages() {
                if (this.text_field_error) {
                    return this.server_response.data.errors.order_no[0];
                }
                else {
                    return '';
                }
            },
            order_found() {
                if (this.server_response.status == 200) {
                    return true;
                }
                else {
                    return false;
                }
            },
            order_not_found() {
                if (this.server_response.status == 404) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        watch: {
            'locale'(value) {
                return this.$i18n.locale = value;
            }
        },
        methods: {
            ...mapActions([
                'set_dialog',
                'reset_dialog',
                'set_server_response',
                'reset_server_response'
            ]),
            submit() {
                return this.$axios.post('/track_order', {
                    order_no: this.order_no,
                }).then((response) => {
                    this.set_server_response(response);
                    return this.set_dialog(['loading', false]);
                }).catch((error) => {
                    this.set_server_response(error.response);
                    return this.set_dialog(['loading', false]);
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                return this.$i18n.locale = this.locale;
            });
        }
    }
</script>

<i18n>
{
    "id": {
        "label": "Nomor order",
        "hint": "Masukkan nomor order anda",
        "not_found_message": "Order tidak ditemukan. Pastikan nomor order yang anda masukkan sudah benar. Contoh nomor order : PS-ORD-XXXXXXX-XX"
    },
    "en": {
        "label": "Order number",
        "hint": "Input your order number",
        "required": "Required",
        "not_found_message": "Order not found. Please make sure your order number is correct. Example : PS-ORD-XXXXXXX-XX"
    }
}
</i18n>
