<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e consulte suas ações</h1>
        <v-sheet :elevation="6" class="pa-2" color="primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span>Você pode salvar & carregar os dados</span>
        </v-sheet>
        <v-divider class="my-4"/>
        <p><strong>Seu saldo:</strong> {{ funds }}</p>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>

</style>
