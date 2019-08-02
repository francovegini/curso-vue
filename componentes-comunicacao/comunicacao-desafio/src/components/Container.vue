<template>
    <div class="container">
            <user-list/>
            <user-detail/>
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
        font-size: 2rem;
        display: flex;
        margin: 20px;
    }
    .h1 {
        margin: 20px;
    }
</style>
