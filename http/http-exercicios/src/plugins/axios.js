import Vue from "vue";
import Axios from "axios";

// axios.defaults.baseURL = "https://curso-vue-312f1.firebaseio.com/";

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = Axios.create({
            baseURL: "https://curso-vue-312f1.firebaseio.com/"
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log("Interceptando requisições: " + config.method);
            return config;
        }, error => Promise.reject(error))
    }
})
