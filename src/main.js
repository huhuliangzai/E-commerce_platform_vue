import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, { ElMessage } from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

//工具类引用
import axios from './utils/axios'
import Astrict from './utils/astrict'

//引入jquery
import $ from 'jquery'
// 引入bootstrap
// 引入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
//引入bootstrap图标库
import '../node_modules/bootstrap/bootstrap-icons-1.10.5/font/bootstrap-icons.css'


import './assets/css/main.css'

const app = createApp(App)
app.use(router, ElementPlus, $, Astrict)


const whiteList = ['/home', '/login'];

router.beforeEach((to, from, next) => {
    const getToken = JSON.parse(sessionStorage.getItem('token'));
    // console.log(getToken);
    if (whiteList.includes(to.path) || getToken != null) {
        next();
    } else {
        next('/login')
    }
});






app.mount('#app')
app.config.globalProperties.$axios = axios;
