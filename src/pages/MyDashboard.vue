<template>
  <div>
    <main-layout>
      {{ msg}}
    </main-layout>
  </div>
</template>
<style>
</style>
<script>
    import MainLayout from '../components/Main.vue'
    export default{
      data () {
        return {
          msg: 'This is My Dashboard.'
        }
      },
      components: {
        MainLayout
      }
    }

</script>
