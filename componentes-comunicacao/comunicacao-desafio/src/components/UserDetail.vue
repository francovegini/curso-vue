<template>
    <div class="componente">
        <h2 v-if="!hasUser">Usuário não selecionado!</h2>
        <div v-else>
            <p>ID: {{ user.id }}</p>
            <p>Nome: {{ user.name }}</p>
            <p>Idade: {{ user.age }}</p>
        </div>
    </div>
</template>

<script>
    import barramento from "@/barramento";

    export default {
        name: "UserDetail",
        data() {
            return {
                hasUser: false,
                user: {}
            };
        },
        created() {
            barramento.listenEvent(user => {
                this.user = user;
                this.hasUser = true;
            });

        }
    };
</script>

<style scoped>
    .componente {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
