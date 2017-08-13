
import Vue from 'vue';
// import App from './App.vue';
import Home from './app/Home.vue';
// import Nav from './app/Nav.vue';

import './index.less';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
