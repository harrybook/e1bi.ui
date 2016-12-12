<template>
  <div>
    <main-layout>
    </main-layout>
  </div>
</template>
<style>
</style>
<script>
import store from '../vuex/store'
import * as api from '../api'
import MainLayout from '../components/MainLayout.vue'

export default {
    data() {
      return {
      }
    },
    components:{
        MainLayout
    }
}
</script>