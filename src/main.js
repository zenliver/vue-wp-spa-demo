// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router/router.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress全局配置
NProgress.configure({minimum: 0.3,ease:'ease',speed:200,trickleSpeed: 200});

// router.beforeEach((to, from, next) => {
// 	if(to.path == '/') {
// 		sessionStorage.clear();
// 	}
// 	NProgress.start();
// 	next()
// });
// router.afterEach(transition => {
// 	NProgress.done();
// });

Vue.prototype.$nprogress = NProgress;

// axios全局配置
axios.defaults.baseURL = 'https://www.gdszip.com';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        NProgress.start();
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        NProgress.done();
        return response;
    }, function (error) {
        // 对响应错误做点什么
        NProgress.done();
        return Promise.reject(error);
});

Vue.prototype.$axios = axios;



/* 自定义全局Vue实例方法 */

Vue.prototype.$nameAlert = function (firstName,lastName) {
    alert(firstName+lastName);
};




Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
