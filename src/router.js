import Vue from 'vue'
import VueRouter from 'vue-router'
import UserMgr from './sso'
import Home from './pages/Home'
import Callback from './pages/Callback.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    base: __dirname,
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/callback', component: Callback },
        { path: '*', redirect: '/' }
    ]
})

export default router
