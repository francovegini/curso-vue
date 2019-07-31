<template>
    <div class="componente">
        <h1 v-if="!hasUser">Usuário não selecionado!</h1>
        <span v-else>
            <p>ID: {{ user.id }}</p>
            <p>Nome: {{ user.name }}</p>
            <p>Idade: {{ user.age }}</p>
        </span>
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
        background-color: #63B8FF;
        color: #fff;
    }
</style>
