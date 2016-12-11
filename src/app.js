import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync';
import router from './router'
import store from './vuex/store'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = process.env.ApiBase
sync(store, router)

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
