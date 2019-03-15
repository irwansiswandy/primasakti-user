<template>
    <div id="track-order-result">
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
        <track-order-result v-if="order_found"
                            :order="server_response.data">
        </track-order-result>
        <v-alert type="error"
                 v-model="order_not_found">
            {{ $t('not_found_message') }}
        </v-alert>
    </div>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import MyAxios from '../../plugins/axios.js';
    import TrackOrderResult from './result.vue';

    export default {
        name: 'track-order-result',
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
            'track-order-result': TrackOrderResult
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
            submit() {
                return MyAxios.post('/track_order', {
                    order_no: this.order_no
                }).then((response) => {
                    return this.$emit('submit-success', response);
                }).catch((error) => {
                    return this.$emit('submit-error', error.response);
                });
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
        "label": "Nomor order",
        "hint": "Ketikkan nomor order anda",
        "not_found_message": "Order tidak ditemukan. Pastikan nomor order yang anda masukkan sudah benar." 
    },
    "en": {
        "label": "Order number",
        "hint": "Input your order number",
        "required": "Required",
        "not_found_message": "Order not found. Please make sure your order number is correct."
    }
}
</i18n>


