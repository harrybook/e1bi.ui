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
    import Vue from 'vue'
    import MainLayout from '../components/Main.vue'

    export default{
      data () {
      this.$http.get(Vue.http.options.root + '/api/auth').then((response)=> {
      console.log('success')
      console.log(response)
      }, (response)=>{
        console.log('failed')
        console.log(response)
      })
        return {
          msg: this.$store.state.email
        }
      },
      mounted: function(){
      },
      components: {
        MainLayout
      }
    }

</script>