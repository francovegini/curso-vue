<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador :key="c" v-for="c in 5"/>
    </div>
</template>

<script>
    import Contador from "./Contador";

    export default {
        components: {
            "app-contador": Contador
        }
    };
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
