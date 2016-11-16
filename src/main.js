import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import MyDashboard from './pages/MyDashboard.vue'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Home/>',
  components: { Home, MyDashboard }
})
