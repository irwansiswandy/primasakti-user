<template>
    <div id="input-form-track-order">
        <v-text-field :color="color"
                      :prepend-icon="icon"
                      :label="$t('label')"
                      :hint="$t('hint')"
                      clearable
                      v-model="order_no">
        </v-text-field>
    </div>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

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
                    return 'fa-search';
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
        }
    }
</script>

<i18n>
{
    "id": {
        "label": "Lacak order saya",
        "hint": "Ketikkan nomor order anda"
    },
    "en": {
        "label": "Track my order",
        "hint": "Input your order number"
    }
}
</i18n>


