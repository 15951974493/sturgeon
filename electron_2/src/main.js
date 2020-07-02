// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'

import {get, post} from "./assets/js/axios.js";  // 引入axios 的 get，post 方法
Vue.prototype.$get = get;
Vue.prototype.$post = post;


import  "./assets/css/general.css"  // 引入全局通用样式
import "./assets/css/global.css"  // 引入全局公共样式

import global from "./assets/js/global.js"  // 引入全局公共方法
Vue.prototype.$global = global;

import cookie from "./assets/js/cookie.js"
Vue.prototype.$cookie = cookie;

import "@/assets/js/mock"  // 引入mock.js

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8080/';
Vue.prototype.$http = axios;

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
