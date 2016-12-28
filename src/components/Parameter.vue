<template>
    <div v-if="parameter.ControlType == 'MultiDropdown'" v-on:blur='toggleHidden(true)' 
      :tabindex="index" class="ms-options-wrap" style="position: relative;">
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>
        <button @click='toggleHidden()'>{{parameter.SelectedValue()}}</button>
        <div class="ms-options" :class="{hidden:IsHidden}" style="min-height: 200px; overflow: auto; max-height: 200px;">
            <ul v-for="(value, index) in parameter.Values" style="column-count: 1; column-gap: 0px;">
                <li class="selected" style="display: list-item;">
                    <label style="padding-left: 21px;">
                        <input type="checkbox" v-model="value.Active" :title="value.Label"/>
                        <span v-html="encode(value.Label)"></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
    <div v-else-if="parameter.ControlType == 'Dropdown'">
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>
        <select>
            <option v-for="(value, index) in parameter.Values" :value ="value.Value">
                {{value.Label}}
            </option>
        </select>
    </div>
    <div v-else>
        <label>
            <span>
                {{parameter.Label}}
            </span>
        </label>
        <input class="paramClass" type="text" :value="parameter.Values[0].Value" />
    </div>
</template>
<style scoped>
    .hidden{
        display: none
    }

    .paramClass{
        width:198px
    }
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ms-options-wrap,
    .ms-options-wrap * {
        box-sizing: border-box;
    }

    .ms-options-wrap > button:focus,
    .ms-options-wrap > button {
        position: relative;
        width: 100%;
        text-align: left;
        border: 1px solid #aaa;
        background-color: #fff;
        padding: 5px 20px 5px 5px;
        margin-top: 1px;
        font-size: 13px;
        color: #aaa;
        outline: none;
        white-space: nowrap;
    }

    .ms-options-wrap > button:after {
        content: ' ';
        height: 0;
        position: absolute;
        top: 50%;
        right: 5px;
        width: 0;
        border: 6px solid rgba(0, 0, 0, 0);
        border-top-color: #999;
        margin-top: -3px;
    }

    .ms-options-wrap > .ms-options {
        position: absolute;
        left: 0;
        width: 100%;
        margin-top: 1px;
        margin-bottom: 20px;
        background: white;
        z-index: 2000;
        border: 1px solid #aaa;
        text-align:left;
    }

    .ms-options-wrap > .ms-options > .ms-search input {
        width: 100%;
        padding: 4px 5px;
        border: none;
        border-bottom: 1px groove;
        outline: none;
    }

    .ms-options-wrap > .ms-options .ms-selectall {
        display: inline-block;
        font-size: .9em;
        text-transform: lowercase;
        text-decoration: none;
    }
    .ms-options-wrap > .ms-options .ms-selectall:hover {
        text-decoration: underline;
    }

    .ms-options-wrap > .ms-options > .ms-selectall.global {
        margin: 4px 5px;
    }

    .ms-options-wrap > .ms-options > ul > li.optgroup {
        padding: 5px;
    }
    .ms-options-wrap > .ms-options > ul > li.optgroup + li.optgroup {
        border-top: 1px solid #aaa;
    }

    .ms-options-wrap > .ms-options > ul > li.optgroup .label {
        display: block;
        padding: 5px 0 0 0;
        font-weight: bold;
    }

    .ms-options-wrap > .ms-options > ul label {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 8px 4px;
        margin: 1px 0;
    }

    .ms-options-wrap > .ms-options > ul li.selected label,
    .ms-options-wrap > .ms-options > ul label:hover {
        background-color: #efefef;
    }

    .ms-options-wrap > .ms-options > ul input[type="checkbox"] {
        margin-right: 5px;
        position: absolute;
        left: 4px;
        top: 7px;
    }
    
</style>
<script>
import * as html from '../html/html.js'
export default {
    data() {
        return {
            IsHidden: true
        }
    },
    props: ["parameter","index"],
    methods: {
        encode: function(str){
            return html.encode(str)
        },
        toggleHidden: function(hide){
            if(hide){
                this.IsHidden = true
            }
            else{
                this.IsHidden = !this.IsHidden
            }
            console.log(this.parameter.Values)
        }
    },
    created: function(){
        let _self = this
        this.parameter.IsHidden = true
        this.parameter.SelectedValue = function(){
            let sv = [];
            for(let i = 0;i < _self.parameter.Values.length;i++){
                let pv = _self.parameter.Values[i]
                if(pv.Active){
                    sv.push(pv.Label)
                }
            }
            return sv.length > 0 ? sv.toString() : "Click to select"
        }
    }
}

</script>
