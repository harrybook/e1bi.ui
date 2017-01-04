<template>
    <div v-if="parameter.ControlType == 'MultiDropdown'">
         <el-select v-model="value" multiple placeholder="Please select" 
            v-on:change="valueChange" 
            v-on:visible-change="visibleChange">
            <el-option
                v-for="item in parameter.Values"
                :label="item.Label"
                :value="item.Value">
            </el-option>
         </el-select>
    </div>
    <div v-else-if="parameter.ControlType == 'Dropdown'">
         <el-select v-model="value" placeholder="Please select" 
            v-on:change="valueChange" 
            v-on:visible-change="visibleChange">
            <el-option
                v-for="item in parameter.Values"
                :label="item.Label"
                :value="item.Value">
            </el-option>
         </el-select>
    </div>
    <div v-else>
          <el-date-picker
            v-model="value"
            type="date"
            placeholder="Select date"
            :picker-options="pickerOptions">
          </el-date-picker>
    </div>
</template>
<style scoped>
</style>
<script>
import * as html from '../html/html.js'
export default {
    data() {
        return {
            pickerOptions: {
                firstDayOfWeek: 2
            },
            value: this.parameter.ControlType == 'MultiDropdown' ? [] : {},
            valueChanged: false
        }
    },
    props: ["parameter"],
    methods: {
        encode: function(str){
            return html.encode(str)
        },
        valueChange: function(){
            let _self = this
            this.valueChanged = true
            this.parameter.Values.map(function(item){
                item.Active = _self.parameter.ControlType === 'MultiDropdown'?
                                _self.value.indexOf(item.Value)>-1 : _self.value==item.value
            })
        },
        visibleChange: function(show){
            if(!show && this.valueChanged && this.parameter.HasDependency){
                this.valueChanged = false
                this.$parent.$parent.$parent.$parent.getParameter()
            }
        }
    },
    created: function(){
        let v = this.value
        if(this.parameter.ControlType == 'MultiDropdown'){
            // for(let i=0; i< this.parameter.Values.length; i++){
            //     let pv = this.parameter.Values[i]
            //     if(pv.Active){
            //         v.push(pv.Value)
            //     }
            // }
        }
        else if(this.parameter.ControlType == 'Dropdown'){
            for(let i=0; i< this.parameter.Values.length; i++){
                let pv = this.parameter.Values[i]
                if(pv.Active){
                    v = pv.Value
                    break
                }
            }
        }
        else{
            v = this.parameter.Values[0].Value
        }
        this.value = v
    }
}

</script>
