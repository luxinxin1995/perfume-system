// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(ElementUI)
Vue.use($)
Vue.config.productionTip = false

// 访问服务器接口
global.ApiUrl = 'http://localhost:3000'
// 时间
global.getDate = function (date) {
  date = new Date(date)
  return date.getFullYear() + '年' + initDate((date.getMonth() + 1)) + '月' + initDate(date.getDate()) + '日  ' + initDate(date.getHours()) + '时' + initDate(date.getMinutes()) + '分' + initDate(date.getSeconds()) + '秒'
}
function initDate (data) {
  if (data < 10) {
    data = '0' + data
  }
  return data
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
