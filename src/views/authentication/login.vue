<template>
    <v-layout id="login-form"
              row wrap>
        <v-flex md12>
            <v-text-field name="email" type="email"
                          color="secondary" prepend-icon="fa-envelope-o" :placeholder="$t('email')"
                          v-model="email">
            </v-text-field>
            <v-text-field name="password" type="password"
                          color="secondary" prepend-icon="fa-unlock-alt" :placeholder="$t('password')"
                          v-model="password">
            </v-text-field>
        </v-flex>
    </v-layout>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'login-form',
        data() {
            return {
                guard: 'web',
                email: '',
                password: ''
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
            return this.$i18n.locale = this.locale;
        }
    }
</script>

<i18n>
{
    "id": {
        "email": "Alamat E-mail",
        "password": "Kata kunci",
        "login": "masuk",
        "login_with_facebook": "masuk dengan facebook"
    },
    "en": {
        "email": "E-mail Address",
        "password": "Password",
        "login": "login",
        "login_with_facebook": "login with facebook"
    }
}
</i18n>
