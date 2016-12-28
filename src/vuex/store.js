import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: '',
        accessToken: '',
        idToken: '',
        isLoaded: false,
        authData: [
            {
                Name: 'STANDARD REPORT',
                IsActive: true,
                Categories: []
            },
            {
                Name: 'CUSTOMIZATION',
                IsActive: false,
                Categories: []
            }],
        dwUpdateDate: []
    },
    mutations: {
        login(state, sso) {
            state.email = sso.profile.email
            state.accessToken = sso.access_token
            state.idToken = sso.id_token
        },
        load(state, data) {
            state.isLoaded = true
            state.authData[0].Categories = data.Standard
            // Customization
            // state.authData[1].Categories = data.Custom 
            state.dwUpdateDate = data.DWUpdateDate
        },
        switchTab(state, index) {
            state.authData.map(function (item, i) {
                index === i ? item.IsActive = true : item.IsActive = false
            })
        },
        switchTag(state, category) {
            category.IsHidden = !category.IsHidden
        },
    },
    strict: process.env.NODE_ENV !== 'production'
})
