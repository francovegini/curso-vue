<template>
    <div id="app">
        <h1>Contadores</h1>
        {{ contador }}
        <button @click="contador++">+</button>
        <button @click="contador++">-</button>
    </div>

</template>

<script>
    export default {
        el: "#app",
        data() {
            return {
                contador: 0
            };
        }
    };
</script>