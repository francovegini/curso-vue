<template>
    <div id="app">
        <app-usuario/>
    </div>
</template>

<script>
    import AppUsuario from "./components/Usuario.vue";

    export default {
        name: "app",
        components: {AppUsuario}
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 1.7rem;
    }
</style>
