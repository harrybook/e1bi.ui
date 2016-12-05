import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = '/api'
Vue.http.headers.common["Authorization"] =  'Bearer ' + localStorage.accessToken

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

