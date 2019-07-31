<template>
    <div class="componente">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList" @click="selectedUser(user)" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import barramento from "@/barramento";

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
        },
        methods: {
            selectedUser(user) {
                barramento.selectedUser(user);
            }
        }
    };
</script>

<style scoped>
    .componente {
        display: flex;
        flex: 1;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }

    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
