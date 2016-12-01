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

export default {
  created () {
    UserMgr.signinRedirectCallback().then(function (user) {
      localStorage.setItem('sso', '')
      var userString = JSON.stringify(user)
      console.log(userString)
    })
    console.log('calling back')
  }
}

</script>

