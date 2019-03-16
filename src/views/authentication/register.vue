<template>
    <v-layout id="register"
              row wrap>
        <v-flex md12>
            <v-text-field type="text" color="secondary" :label="$t('first_name')"
                          v-model="first_name">
            </v-text-field>
            <v-text-field type="text" color="secondary" :label="$t('last_name')"
                          v-model="last_name">
            </v-text-field>
            <select-date type="date" :label="$t('birthday')"
                         v-model="birthday">
            </select-date>
            <v-text-field type="text" color="secondary" :label="$t('email_address')"
                          v-model="email">
            </v-text-field>
            <v-text-field type="text" color="secondary" :label="$t('password')"
                          v-model="password">
            </v-text-field>
            <v-text-field type="text" color="secondary" :placeholder="$t('password_confirmation')"
                          v-model="password_confirmation">
            </v-text-field>
        </v-flex>
    </v-layout>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';
    import SelectDate from '../../../../primasakti-admin/src/components/selects/date.vue';

    export default {
        name: 'register',
        components: {
            'select-date': SelectDate
        },
        data() {
            return {
                first_name: '',
                last_name: '',
                birthday: '',
                email: '',
                password: '',
                password_confirmation: ''
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
                this.$set(this, 'submitting', true);
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
            "first_name": "Nama Depan",
            "last_name": "Nama Belakang",
            "birthday": "Tanggal lahir",
            "email_address": "Alamat E-mail",
            "password": "Kata kunci",
            "password_confirmation": "Ulangi kata kunci",
            "message": "Silahkan isi form di bawah ini untuk mendaftar.",
            "submit_button_title": "daftar"
        },
        "en": {
            "first_name": "First Name",
            "last_name": "Last Name",
            "birthday": "Birthday",
            "email_address": "E-mail Address",
            "password": "Password",
            "password_confirmation": "Re-type password",
            "message": "Please fill the form below to register.",
            "submit_button_title": "register"
        }
    }
</i18n>