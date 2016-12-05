<template>
  <div>
    Redirecting ...
  </div>
</template>

<style>
</style>

<script>
/* eslint-disable */
import UserMgr from '../sso'
import router from '../router'

export default {
  created () {
    let vue = this;
    UserMgr.signinRedirectCallback().then(function (user) {
      var userString = JSON.stringify(user)
      localStorage.setItem('sso', userString)
      router.push(localStorage.lastUrlPath)
    })
  }
}

</script>

