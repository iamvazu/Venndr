import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import home from '@/components/home/home'
import matches from '@/components/matches/matches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/match',
      name: 'Match',
      component: matches
    }
  ]
})
