<template>
    <div>
        <h1>Negocie e consulte suas ações</h1>
        <v-sheet color="primary">
            <v-icon>info</v-icon>
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
