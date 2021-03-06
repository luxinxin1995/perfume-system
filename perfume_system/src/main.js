// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import KindEditor from 'vue-kindeditor'
import Moment from 'moment'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'
Vue.use(ElementUI)
Vue.use($)
Vue.use(Moment)
Vue.use(KindEditor)
Vue.config.productionTip = false

// 访问服务器接口
global.ApiUrl = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
