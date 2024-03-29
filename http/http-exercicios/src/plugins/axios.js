import Vue from "vue";
import Axios from "axios";

// axios.defaults.baseURL = "https://curso-vue-312f1.firebaseio.com/";
// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = Axios.create({
            baseURL: "https://curso-vue-312f1.firebaseio.com/",
            headers: {
                Authorization: "abc123",
                // get: {
                //     Authorization: "def456"
                // }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log("Interceptando requisições: " + config.method);
            return config;
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = [];
            // for (let key in res.data) {
            //     array.push({ id: key, ...res.data[key] });
            // }
            //
            // res.data = array;
            return res;
        }, error => Promise.reject(error))
    }
})
