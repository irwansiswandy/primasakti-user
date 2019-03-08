<template>
    <v-container id="login-form" fluid class="pa-0">
        <v-text-field name="email" type="email" prepend-icon="fa-envelope-o" :placeholder="$t('email')"
                      v-model="email">
        </v-text-field>
        <v-text-field name="password" type="password" prepend-icon="fa-unlock-alt" :placeholder="$t('password')"
                      v-model="password">
        </v-text-field>
        <v-layout row>
            <v-flex d-flex>
                <v-btn block color="secondary">
                    {{ $t('login') }}
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex d-flex>
                <v-btn block outline color="secondary">
                    {{ $t('login_with_facebook') }}
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
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
