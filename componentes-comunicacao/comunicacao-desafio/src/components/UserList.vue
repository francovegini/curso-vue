<template>
    <div class="componente">
        <table class="table">
            <tr>
                <th>#ID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Smith</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jackson</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "UserList"
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
