<template>
    <v-container id="login-form" fluid grid-list-md class="pa-0">
        <v-text-field name="email" type="email" prepend-icon="fa-envelope-o" :placeholder="$t('email')"
                      v-model="email">
        </v-text-field>
        <v-text-field name="password" type="password" prepend-icon="fa-key" :placeholder="$t('password')"
                      v-model="password">
        </v-text-field>
        {{ $t("email") }}
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
        }
    }
</script>

<i18n>
{
    "id": {
        "email": "Alamat E-mail",
        "password": "Kata kunci"
    },
    "en": {
        "email": "E-mail Address",
        "password": "Password"
    }
}
</i18n>


