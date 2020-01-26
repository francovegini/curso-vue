import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vue-312f1.firebaseio.com/';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios;
    }
})
