import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Callback from './pages/Callback.vue'
import Report from './pages/Report.vue'
import Tableau from './pages/Tableau.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    base: __dirname,
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/callback', component: Callback },
        { path: '/report', component: Report },
        { path: '/tableau', component: Tableau },
        { path: '*', redirect: '/' }
    ]
})

export default router
