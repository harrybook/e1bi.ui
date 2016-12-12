import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: '',
        accessToken: '',
        isLoaded: false,
        authData: [
            {
                Name: 'STANDARD REPORTS',
                IsActive: true,
                Categories: []
            },
            {
                Name: 'STANDARD DASHBOARDS',
                IsActive: false,
                Categories: []
            },
            {
                Name: 'CUSTOMIZATION',
                IsActive: false,
                Categories: []
            }]
    },
    mutations: {
        login(state, sso) {
            state.email = sso.profile.email
            state.accessToken = sso.access_token
        },
        load(state, data){
            state.isLoaded = true
            let index = 0
            for(let item in data){
                state.authData[index].Categories = data[item]
                index++
            }
        },
        swithTab(state, index){
          state.authData.map(function(item,i){
            index === i ? item.IsActive = true: item.IsActive = false
          })
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})
