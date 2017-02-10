<template>
  <div>
    <main-layout>
        <div class="reportContainer">
            <iframe id="report_iframe"  :src="url" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no"></iframe>
        </div>
    </main-layout>
  </div>
</template>
<style scoped>
.reportContainer{
    position: relative;
    margin-left:auto;
    margin-right:auto;
    min-width: 1024px;
    min-height:768px;
}

.reportContainer iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
        document.body.scrollTop = 0
        if(this.$store.state.accessToken !== ''){
            let urlTemplate = config.get('SSRSServer') + "/Reports/report@@?rs:embed=true"
            this.url = urlTemplate.replace('@@', this.$store.state.route.query.path)
        }
    },
    components:{
        MainLayout
    }
}
</script>