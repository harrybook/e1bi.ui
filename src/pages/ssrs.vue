<template>
  <div>
    <main-layout>
        <div class="reportContainer">
            <div class="parameterContainer">
                <div style="width:200px">
                    <parameter-control v-for="(parameter, index) in Parameters" :index="index" :parameter ="parameter">
                    </parameter-control>
                    <button @click="getParameter(true)">Generate Report</button>
                </div>
                <div ref="report"></div>
            </div>
        </div>
    </main-layout>
  </div>
</template>
<style scoped>
.reportContainer{
    margin-left:auto;
    margin-right:auto;
    width:1100px
}


</style>
<script>
import * as api from '../api'
import MainLayout from '../components/MainLayout.vue'
import ParameterControl from '../components/Parameter.vue'

export default {
    data() {
      return {
          Parameters: [],
          Rows: []
      }
    },
    created: function(){
  
    },
     methods: {
      getParameter: function(genReport){
        if (this.$store.state.accessToken !== '') {
        let path = this.$store.state.route.query.path
        api.getReport(path, this.Parameters, genReport).then((response) => {
            if(genReport){
                this.$refs.report.innerHTML = response.body.htmlString
            }
            else{
                this.Parameters = response.body
            }

        }, (response) => {
            console.log('failed')
            console.log(response)
        })
       }
      }
    },
    mounted: function(){
        this.getParameter(false)
    },
    components:{
        MainLayout,
        ParameterControl
    }
}
</script>