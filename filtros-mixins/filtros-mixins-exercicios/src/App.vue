<template>
    <div id="app">
        <h1>Filtros & Mixins</h1>
        <hr>
        <p>{{ cpf | cpf }}</p>
        <p>{{ cpf | cpf | inverter}}</p>
        <p>{{ cpf | inverter}}</p>
        <hr>
        <input type="text" :value="cpf | cpf"/>
        <hr>
        <Frutas/>
        <hr>
        <div>
            <ul>
                <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
            </ul>
            <input type="text" v-model="fruta" @keydown.enter="add()">
        </div>
        <hr>
        <p>{{ usuarioLogado }}</p>
    </div>
</template>

<script>
    import frutasMixin from './frutasMixin'
    import usuarioMixin from './usuarioMixin'
    import Frutas from './Frutas.vue'

    export default {
        components: { Frutas },
        mixins: [frutasMixin, usuarioMixin],
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
                cpf: '14452414525',
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
