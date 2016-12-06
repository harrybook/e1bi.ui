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

    export default{
      data () {
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