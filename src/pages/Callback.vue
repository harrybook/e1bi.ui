<template>
  <div class="callback">
    Redirecting ...
  </div>
</template>

<style>
.callback{
  background: white
}
</style>

<script>
/* eslint-disable */
import UserMgr from '../sso'

export default {
  created () {
    let vue = this;
    UserMgr.signinRedirectCallback().then(function (user) {
      vue.$store.commit('login', user)
      vue.$http.headers.common["Authorization"] =  'Bearer ' + user.access_token
      vue.$router.push(localStorage.lastPathUrl)
    })
  }
}

</script>

