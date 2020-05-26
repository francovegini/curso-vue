<template>
    <h1>Portfolio</h1>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock'

export default {
    name: "Portfolio",
    components: { Stock },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}
</script>

<style>

</style>
