<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua: </strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
    </div>
</template>

<script>
    export default {
        name: "UsuarioEditar",
        props: ['id'],
        data() {
            return {
                confirmou: false
            }
        },
        beforeRouteLeave(to, from, next) {
            if(this.confirmou){
                next();
            }
            if(confirm("Tem certeza?")) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>

<style scoped>

</style>
