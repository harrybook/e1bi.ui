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
          msg: 'This is homepage, developed by harry.ning'
        }
      },
      components: {
        MainLayout
      }
    }

</script>