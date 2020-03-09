<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id },
                                                  query: { completo: true, lingua: 'pt'} }">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioDetalhe",
        props: ['id'],
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     $route(to, from){
        //         this.id = to.params.id;
        //     }
        // },
    }
</script>

<style scoped>

</style>
