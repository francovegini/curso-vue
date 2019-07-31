import Vue from "vue";

export default new Vue({
    methods: {
        selectedUser(element) {
            this.$emit("selectedUser", element);
        },
        listenEvent(callback) {
            this.$on("selectedUser", callback);
        }
    }
});
