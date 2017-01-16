<template>
  <span>Redirecting...</span>
</template>

<style>
.callback{
  background: white
}
</style>

<script>
/* eslint-disable */
import Vue from 'vue'
import userMgr,{refresh_ssrs} from '../sso'

export default {
  created () {
    let _self = this
    userMgr.signinRedirectCallback().then(function (user) {
      Vue.http.headers.common["Authorization"] =  'Bearer ' + user.access_token
      _self.$store.commit('login', user)
      _self.$router.push(localStorage.lastPathUrl)
      refresh_ssrs(user.id_token)
    })
  }
}

</script>

