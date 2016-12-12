<template>
  <div>
    <main-layout>
        <div class="SubContent">
            <iframe id="report_iframe"  :src="url" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no"  style="width:1200px; height:850px"></iframe>
        </div>
    </main-layout>
  </div>
</template>
<style>
</style>
<script>
import MainLayout from '../components/MainLayout.vue'

export default {
    data() {
        return {
            url: ''
        }
    },
    created: function(){
        let urlTemplate = "http://e1ssrs.ef.com/Reports/report@@?rs:embed=true"
        this.url = urlTemplate.replace('@@', this.$store.state.route.query.path)
    },
    components:{
        MainLayout
    }
}
</script>