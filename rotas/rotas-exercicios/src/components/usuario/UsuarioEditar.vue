<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
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
