<template>
    <div id="queues-info">
        Total Waiting : -
    </div>
</template>

<style>
    /* */
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'queues-info',
        computed: {
            ...mapGetters([
                'queues'
            ])
        }   
    }
</script>


