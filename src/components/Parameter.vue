<template>
    <div v-if="parameter.ControlType == 'MultiDropdown'">
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>

         <el-select v-model="value" multiple placeholder="Please select">
            <el-option
                v-for="item in parameter.Values"
                :label="item.Label"
                :value="item.Value">
            </el-option>
         </el-select>
    </div>
    <div v-else-if="parameter.ControlType == 'Dropdown'">
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>
         <el-select v-model="value" placeholder="Please select">
            <el-option
                v-for="item in parameter.Values"
                :label="item.Label"
                :value="item.Value">
            </el-option>
         </el-select>
    </div>
    <div v-else>
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>
          <el-date-picker
            v-model="parameter.Values[0].Value"
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
            },
            value:""
        }
    },
    props: ["parameter","index"],
    methods: {
        encode: function(str){
            return html.encode(str)
        }
    },
    created: function(){

    }
}

</script>
