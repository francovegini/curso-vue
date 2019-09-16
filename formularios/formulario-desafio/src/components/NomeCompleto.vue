<template>
    <div class="nome-completo">
        <Rotulo nome="Nome">
            <input type="text" v-model.trim="nome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" v-model.trim="sobrenome">
        </Rotulo>
    </div>
</template>

<script>
    import Rotulo from './Rotulo';

    export default {
        name: "NomeCompleto",
        components: { Rotulo },
        data() {
            return {
                nome: '',
                sobrenome: ''
            }
        }
    }
</script>

<style scoped>
</style>
