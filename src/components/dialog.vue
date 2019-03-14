<template>
    <v-dialog id="my-dialog"
              persistent
              :width="width"
              :value="dialog.show">
        <v-card flat tile>
            <v-card-title v-if="dialog.title"
                          class="title primary--text">
                {{ dialog.title }}
            </v-card-title>
            <span v-show="!dialog.loading">
                <v-card-text>
                    <slot name="default"></slot>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <template v-for="action in dialog.actions">
                        <v-btn flat color="secondary" :loading="action.loading"
                            v-on:click="$emit('action', action.name)">
                            <h4>{{ action.text }}</h4>
                        </v-btn>
                    </template>
                </v-card-actions>
            </span>
            <span v-show="dialog.loading">
                <v-card-text>
                    <v-container fluid>
                        <v-progress-circular indeterminate color="secondary"></v-progress-circular>
                    </v-container>
                </v-card-text>
                <v-card-actions></v-card-actions>
            </span>
        </v-card>
    </v-dialog>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'my-dialog',
        props: {
            width: {
                type: String | Number,
                required: false,
                default: () => {
                    return 500;
                }
            }
        },
        computed: {
            ...mapGetters([
                'dialog'
            ])
        }   
    }
</script>


