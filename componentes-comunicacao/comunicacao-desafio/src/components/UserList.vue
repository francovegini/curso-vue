<template>
    <div class="componente">
        <table class="table">
            <tr>
                <th>#ID</th>
                <th>Name</th>
            </tr>
            <tr v-for="user in userList">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                userList: [
                    {id: 1, name: "Ana", age: 31},
                    {id: 2, name: "Carlos", age: 22},
                    {id: 3, name: "Daniel", age: 40},
                    {id: 4, name: "Ema", age: 17},
                    {id: 5, name: "Lia", age: 28}
                ]
            };
        }
    };
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
    }

    tr:hover {
        border: 1px solid black;
    }
</style>
