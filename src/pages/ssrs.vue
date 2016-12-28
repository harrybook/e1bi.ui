<template>
  <div>
    <main-layout>
        <div class="reportContainer">
            <div class="parameterContainer">
                <div style="width:200px">
                    <parameter-control v-for="(parameter, index) in Parameters" :index="index" :parameter ="parameter">
                    </parameter-control>
                </div>
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
    mounted: function(){
        if (this.$store.state.accessToken !== '') {
            let path = this.$store.state.route.query.path
            api.getReport(path).then((response) => {
               this.Parameters = response.body
               console.log(JSON.stringify(this.Parameters))
               for(let i=0;i<this.Parameters.length;i++){
                   if(i%2===0){
                       this.Rows.push(0)
                   }
               }
               window.Params = this.Parameters
               console.log(this.Parameters)
            }, (response) => {
                console.log('failed')
                console.log(response)
            })
       }

    },
    components:{
        MainLayout,
        ParameterControl
    }
}
</script>