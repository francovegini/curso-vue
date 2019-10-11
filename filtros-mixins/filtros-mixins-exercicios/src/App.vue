<template>
    <div id="app">
        <h1>Filtros & Mixins</h1>
        <hr>
        <p>{{ cpf | cpf }}</p>
        <p>{{ cpf | cpf | inverter}}</p>
        <p>{{ cpf | inverter}}</p>
        <hr>
        <input type="text" :value="cpf | cpf"/>
    </div>
</template>

<script>
    export default {
        filters: {
            cpf(valor) {
                const arr = valor.split('')
                arr.splice(3, 0, '.');
                arr.splice(7, 0, '.');
                arr.splice(11, 0, '-');
                return arr.join('');
            }
        },
        data() {
            return {
                cpf: '14452414525'
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 2.5rem;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    input {
        font-size: 2.5rem;
    }
</style>
