import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: '',
        accessToken: ''
    },
    mutations: {
        login(state, sso) {
            state.email = sso.profile.email
            state.accessToken = sso.access_token
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})
