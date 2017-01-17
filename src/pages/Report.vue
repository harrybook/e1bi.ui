<template>
  <div>
    <main-layout>
        <div class="reportContainer">
            <iframe id="report_iframe"  :src="url" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no"  style="width:1200px; height:850px"></iframe>
        </div>
    </main-layout>
  </div>
</template>
<style scoped>
.reportContainer{
    margin-left:auto;
    margin-right:auto;
    width:1200px
}
</style>
<script>
import MainLayout from '../components/MainLayout.vue'
import config from '../../config'

export default {
    data() {
        return {
            url: ''
        }
    },
    created: function(){
        let urlTemplate = config.get('SSRSServer') + "/Reports/report@@?rs:embed=true"
        this.url = urlTemplate.replace('@@', this.$store.state.route.query.path)
    },
    components:{
        MainLayout
    }
}
</script>