<template>
  <div>
    <main-layout>
      {{msg}}
    </main-layout>
  </div>
</template>
<style>

</style>
<script>
    /* eslint-disable */
    import MainLayout from '../components/Main.vue'
    import UserMgr from '../sso'

    function checkAuth () {
      var ssoString = localStorage["sso"]
      console.log(ssoString)
        if (ssoString === undefined || JSON.parse(ssoString) === undefined) {
            UserMgr.signinRedirect()
        }
    }

    export default{
      data () {
        return {
          msg: 'This is homepage, developed by harry.ning'
        }
      },
      components: {
        MainLayout
      },
      created (){
        checkAuth()
      }
    }

</script>