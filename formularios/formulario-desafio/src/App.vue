<template>
    <div id="app">
        <h1>Formulário Desafio</h1>
        <div class="conteudo">
            <form class="painel" v-if="!enviado">
                <div class="cabecalho"> Formulário</div>
                <NomeCompleto v-model="dados.nomeCompleto"/>
                <Rotulo nome="E-mail">
                    <input type="text" v-model.trim="dados.email">
                </Rotulo>
                <Rotulo nome="Senha">
                    <input type="password" v-model="dados.senha">
                </Rotulo>
                <Rotulo nome="Armazenar dados?">
                    <span class="mr-4">
                        <input type="checkbox" v-model="dados.armazenarDados">
                    </span>
                </Rotulo>
                <hr>
                <button @click.prevent="enviar">Enviar</button>
            </form>
            <div class="painel" v-else>
                <div class="cabecalho">Resultado</div>
                <Rotulo nome="Nome completo">
                    <span>{{ dados.nomeCompleto.nome }} {{ dados.nomeCompleto.sobrenome }}</span>
                </Rotulo>
                <Rotulo nome="E-mail">
                    <span>{{ dados.email }}</span>
                </Rotulo>
                <Rotulo nome="Senha">
                    <span>{{ dados.senha }}</span>
                </Rotulo>
                <Rotulo nome="Armazenar dados?">
                    <span>{{ dados.armazenarDados }}</span>
                </Rotulo>
            </div>
        </div>
    </div>
</template>

<script>
    import Rotulo from './components/Rotulo.vue';
    import NomeCompleto from './components/NomeCompleto';

    export default {
        name: 'app',
        components: { Rotulo, NomeCompleto },
        data() {
            return {
                dados: {
                    nomeCompleto: {
                        nome: '',
                        sobrenome: ''
                    },
                    email: '',
                    senha: '',
                    armazenarDados: true
                },
                enviado: false
            }
        },
        methods: {
            enviar() {
                this.enviado = true;
            }
        }
    }
</script>

<style>

    body {
        background-color: #ECECEC;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        display: flex;
        flex-direction: column;
    }

    .conteudo {
        display: flex;
    }

    .painel {
        flex: 1;
        background: #FFF;
        margin: 0px 10px;
        padding: 20px;
        border: 1px solid #AAA;
        border-radius: 5px;
    }

    .painel .cabecalho {
        width: 100%;
        background-color: #DDD;
        padding: 10px 0px;
        border-radius: 5px;
        font-size: 1.4rem;
    }

    #app form button {
        float: right;
        margin: 10px 0px;
        padding: 10px 20px;
        font-size: 1.4rem;
        border-radius: 5px;
        color: #FFF;
        background-color: #2196F3;
    }

    #app h1 {
        font-weight: 200;
        margin: 20px;
        padding: 0;
    }

    .mr-4 {
        margin-right: 40px;
    }
</style>
