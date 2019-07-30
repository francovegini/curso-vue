<template>
    <div class="container">
        <div class="componentes">
            <user-list/>
            <user-detail/>
        </div>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail";
    import UserList from "./UserList";

    export default {
        name: "Container",
        components: {UserDetail, UserList}
    };
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .componentes {
        display: flex;
    }
</style>
