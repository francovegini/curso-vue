<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua: </strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario>Confirmar</button>
    </div>
</template>

<script>
    export default {
        name: "UsuarioEditar",
        props: ['id'],
    }
</script>

<style scoped>

</style>
