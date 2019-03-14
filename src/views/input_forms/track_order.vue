<template>
    <v-text-field id="input-form-track-order"
                  :color="color"
                  :prepend-icon="icon"
                  :label="$t('label')"
                  :hint="$t('hint')"
                  clearable
                  v-model="order_no">
    </v-text-field>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import MyAxios from '../../plugins/axios.js';

    export default {
        name: 'input-form-track-order',
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
            }
        },
        data() {
            return {
                order_no: ''
            };
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
            submit() {
                return MyAxios.get('/orders', {
                    params: {
                        order_no: this.order_no,
                        includes: 'user'
                    }
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
        "hint": "Ketikkan nomor order anda"
    },
    "en": {
        "label": "Order number",
        "hint": "Input your order number"
    }
}
</i18n>


