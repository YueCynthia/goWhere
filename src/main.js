// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FastClick from 'fastclick'
import store from 'store/'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'

import 'assets/css/reset.css'//导入reset.css文件
import 'swiper/dist/css/swiper.css'
import 'assets/css/iconfont/iconfont.css'

//解决300延迟问题
FastClick.attach(document.body);


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
