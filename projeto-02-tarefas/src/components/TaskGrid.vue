<template>
    <div class="task-grid">
        <template>
            <Task v-for="task in tasks" :key="task.name"
                  :task="task"></Task>
        </template>
    </div>
</template>

<script>
    import Task from "./Task";

    export default {
        name: "TaskGrid",
        components: {Task},
        props: {
            tasks: {type: Array, required: true}
        }
    };
</script>

<style scoped>

</style>
