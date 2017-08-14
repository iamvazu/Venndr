// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'jquery'
import axios from 'axios'

import 'mdbootstrap/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'font-awesome/css/font-awesome.css'

import './styles/consol.less'
Vue.config.productionTip = false
console.log('hello!')

const resp = axios.get('http://localhost:9000/api/test', {
  params: {
    resDesc: 'wow'
  }
})
.then(response => {
  console.log(response.data)
})
.catch(e => {
  console.log(e)
})
console.log(resp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
