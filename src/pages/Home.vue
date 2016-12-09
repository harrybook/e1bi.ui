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
    import * as api from '../api'
    import MainLayout from '../components/Main.vue'


    export default {
        data() {
            if (this.$store.state.accessToken === '') {
              return {}
            }
            api.getAuth().then((response) => {
                console.log('success')
                console.log(response)
            }, (response) => {
                console.log('failed')
                console.log(response)
            })
            return {
                msg: this.$store.state.email
            }
        },
        mounted: function () {
        },
        components: {
            MainLayout
        }
    }


</script>