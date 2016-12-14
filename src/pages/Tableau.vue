<template>
  <div>
    <main-layout>
        <div class="tabContainer">
            <div id="vizContainer" ref="vizContainer"></div>
        </div>
    </main-layout>
  </div>
</template>
<style scoped>
.tabContainer{
    margin-left:auto;
    margin-right:auto;
    width:1100px
}
</style>
<script>
import tableau from 'tableau-api'
import * as api from '../api'
import MainLayout from '../components/MainLayout.vue'

export default {
    data() {
      return {
      }
    },
    created: function(){
  
    },
    mounted: function(){
        if (this.$store.state.accessToken !== '') {
            let path = this.$store.state.route.query.path
            api.getViz(path).then((response) => {
                console.log(response)
                let trustedUrl = response.body.TrustedUrl
                var options = {
                    usePublishedSize: true,
                    toolbarPosition: 'top',
                    hideToolbar: false
                }
                let viz = new tableau.Viz(this.$refs.vizContainer, trustedUrl, options)
                viz.addEventListener("customviewload", function () {
                    // document.domain = 'ef.com'
                    // viz._impl.$iframe.contentWindow.document.getElementsByClassName('tabToolbarButton tab-widget share')[0].style.display="none" 
                })
            }, (response) => {
                console.log('failed')
                console.log(response)
            })
       }

    },
    components:{
        MainLayout
    }
}
</script>