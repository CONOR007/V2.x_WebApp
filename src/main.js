import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import Long from 'long';
import './plugins/fastclick';
import './plugins/flexible';
import * as filters from './filters';
import Vant from 'vant';
import 'vant/lib/index.css';
import loading from '@/components/loading/loading.js'

Vue.use(Vant);
Vue.use(loading)
window.Long = Long;
Vue.prototype.$http = axios;
import "@assets/iconfont/iconfont.css";
//api即vue.config.js中配置的地址
//axios.defaults.baseURL='/api/'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

