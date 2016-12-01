import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App.vue'

Vue.use(VueResource)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

