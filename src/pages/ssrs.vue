<template>
  <div>
    <main-layout>
        <el-row v-loading.body="loading">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <table cellpadding="0" cellspacing="0" width="100%" class="ParametersFrame ParamsGrid MenuBarBkGnd">
                        <tbody>
                            <tr>
                                <td width="100%" height="100%">
                                    <table>
                                        <tbody>
                                            <tr isparameterrow="true" v-for="chunk in this.chunkedParameters">
                                                <template  v-for="param in chunk">
                                                    <td class="ParamLabelCell">
                                                        <label>
                                                        <span>{{param.Label}}</span>
                                                        </label>
                                                    </td>
                                                                
                                                    <td class="ParamEntryCell" style="padding-right:0px;">
                                                        <parameter-control :parameter ="param">
                                                        </parameter-control>
                                                    </td>
                                                    <td class="InterParamPadding"></td>
                                                </template>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="6px"></td>
                                <td class="SubmitButtonCell">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <el-button @click="getParameter(true)">Generate Report</el-button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <el-button @click="getParameter(true)">Send to me</el-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                    <div ref="report" class="reportContainer">
            </el-col>
        </el-row>
    </main-layout>
  </div>
</template>
<style scoped>
    .ParametersFrame {
        background-color: rgba(250, 250, 250, 1);
        border: 1px solid #868686;
    }


    .ParamLabelCell {
        padding: 5px;
        padding-right: 0px;
    }

    .ParamEntryCell {
        padding: 5px;
    }

    .ParamsGrid {
        margin: 0px;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 10px;
    }

    .InterParamPadding {
        padding-left: 22px;
    }

    .EmptyDropDown {
    width: 15ex;
    }

    .SubmitButtonCell {
        border-left: 1px solid #868686;
        align: center;
        text-align: center;
        padding: 10px;
        /*vertical-align: top;*/
    }

    .reportContainer{
    margin-left:auto;
    margin-right:auto;
    width:1200px
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
          Rows: [],
          loading: false
      }
    },
    computed: {
        chunkedParameters () {
            let chunked = []
            let i,j, tempArray, chunk = 2
            for(let i=0,j=this.Parameters.length;i<j;i+=chunk){
                tempArray = this.Parameters.slice(i, i + chunk)
                chunked.push(tempArray)
            }
            return chunked
        }
    },
    created: function(){
  
    },
     methods: {
      getParameter: function(genReport){
        if (this.$store.state.accessToken !== '') {
        let path = this.$store.state.route.query.path
        this.loading = true
        api.getReport(path, this.Parameters, genReport).then((response) => {
            if(genReport){
                this.$refs.report.innerHTML = response.body.htmlString
            }
            else{
                this.Parameters = response.body
            }
            this.loading = false

        }, (response) => {
            this.loading = false
            this.$notify.error({
                title: 'Error',
                message: response.statusText
            });
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