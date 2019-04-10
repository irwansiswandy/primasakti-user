<template>
    <v-dialog id="my-dialog"
              persistent
              :fullscreen="fullscreen"
              :width="width"
              :value="dialog.show">
        <v-card flat tile>
            <span v-if="!fullscreen">
                <!-- Normal dialog view -->
                <v-card-title v-if="dialog.title"
                          class="title primary--text">
                    {{ dialog.title }}
                </v-card-title>
                <span v-show="!dialog.loading">
                    <v-card-text>
                        <slot name="default"></slot>
                    </v-card-text>
                    <v-card-actions v-if="dialog.actions.length > 0">
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
                <!-- / Normal dialog view -->
            </span>
            <span v-else>
                <!-- Fullscreen dialog view -->
                <v-toolbar dark color="secondary">
                    <v-toolbar-title>
                        {{ $t('track_order') }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <template v-for="action in dialog.actions">
                            <v-btn flat
                                   v-on:click="$emit('action', action.name)">
                                {{ action.text }}
                            </v-btn>
                        </template>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <slot name="default"></slot>
                </v-card-text>
                <!-- / Fullscreen dialog view -->
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
            },
            fullscreen: {
                type: Boolean,
                required: false,
                default: () => {
                    return false;
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


