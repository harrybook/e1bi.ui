import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync';
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import config from '../config'
import App from './App.vue'

Vue.use(VueResource)
Vue.use(ElementUI, { locale })
Vue.http.options.root = config.get('ApiBase')
sync(store, router)

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
