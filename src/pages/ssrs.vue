<template>
  <div>
    <main-layout>
        <div class="reportContainer">
            <div class="parameterContainer">
                <div style="width:250px">
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
            let str = '[{"Name":"DateType","Label":"Date Type","ControlType":"Dropdown","HasDependency":true,"Values":[{"Label":"Enquiry Date","Value":"0","Active":true},{"Label":"Created Date","Value":"1","Active":false},{"Label":"Visit Booked Date","Value":"2","Active":false},{"Label":"First Payment Received Date","Value":"3","Active":false}]},{"Name":"From","Label":"From","ControlType":"Textbox","HasDependency":true,"Values":[{"Label":"","Value":"12/19/2016 12:00:00 AM","Active":true}]},{"Name":"To","Label":"To","ControlType":"Textbox","HasDependency":true,"Values":[{"Label":"","Value":"12/25/2016 12:00:00 AM","Active":true}]},{"Name":"MarketingSources","Label":"Marketing Sources","ControlType":"MultiDropdown","HasDependency":true,"Values":[{"Label":"-","Value":"-1","Active":true},{"Label":"Call In","Value":"3360","Active":true},{"Label":"On-Line","Value":"9664","Active":true},{"Label":"Off-Line","Value":"15490","Active":true},{"Label":"Database","Value":"16960","Active":true},{"Label":"WebChat","Value":"23648","Active":true},{"Label":"Walk In","Value":"23840","Active":true}]},{"Name":"BusinessLines","Label":"Business Lines","ControlType":"MultiDropdown","HasDependency":true,"Values":[{"Label":"Own","Value":"16110","Active":false},{"Label":"Franchise","Value":"6721","Active":false},{"Label":"Other","Value":"16008","Active":false}]},{"Name":"Countries","Label":"Countries","ControlType":"MultiDropdown","HasDependency":true,"Values":[]},{"Name":"Schools","Label":"Schools","ControlType":"MultiDropdown","HasDependency":false,"Values":[]}]'

            this.Parameters = JSON.parse(str)
            // api.getReport(path).then((response) => {
            //    this.Parameters = response.body
            //    console.log(JSON.stringify(this.Parameters))
            //    for(let i=0;i<this.Parameters.length;i++){
            //        if(i%2===0){
            //            this.Rows.push(0)
            //        }
            //    }
            //    window.Params = this.Parameters
            //    console.log(this.Parameters)
            // }, (response) => {
            //     console.log('failed')
            //     console.log(response)
            // })

       }

    },
    components:{
        MainLayout,
        ParameterControl
    }
}
</script>