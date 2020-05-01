<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id"/>
    </v-layout>
</template>

<script>
import Stock from './Stock'

export default {
    name: "Stocks",
    components: { Stock },
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 70 },
                { id: 2, name: 'Google', price: 250 },
                { id: 3, name: 'Apple', price: 190 },
                { id: 4, name: 'Twitter', price: 170 },
            ]
        }
    }
}
</script>

<style>

</style>
