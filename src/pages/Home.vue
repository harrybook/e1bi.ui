<template>
  <div>
    <main-layout>
      <div class="tabMenu">
        <div class="title">
            <img src="../assets/img/tableau reports.svg" class="iconMark">
            REPORTS
        </div>

        <template v-for="(item,index) in AuthData">
          <a href="javascript:void(0)" @click='tabToggle(index)'>
              <div class="tabItem" :class="{active:item.IsActive}">{{item.Name}}</div>
          </a>
        </template>
        
        <report-tab v-for="(item,index) in AuthData" :tabData="item"></report-tab>

      </div>
    </main-layout>
  </div>
</template>
<style>

</style>
<script>
    import Vue from 'vue'
    import store from '../vuex/store'
    import * as api from '../api'
    import MainLayout from '../components/MainLayout.vue'
    import ReportTab from '../components/ReportTab.vue'

    export default {
        data() {
          return   {
            AuthData: [
              {
                Name: 'STANDARD REPORTS',
                IsActive: true,
                Categories: []
              },
              {
                Name: 'STANDARD DASHBOARDS',
                IsActive: false,
                Categories: []
              },
              {
                Name: 'CUSTOMIZATION',
                IsActive: false,
                Categories: []
              }
            ]
          }
        },
        mounted: function () {
        },
        created: function(){
          if (this.$store.state.accessToken !== '') {
              api.getAuth().then((response) => {
                let index = 0
                for(let item in response.body){
                  this.AuthData[index].Categories = response.body[item]
                  index++
                }
                window.authData = response.body
                console.log(this.AuthData)
              }, (response) => {
                console.log(response)
              })
            }
          
        },
        components: {
            MainLayout,
            ReportTab
        },
        methods: {
          tabToggle: function(index){
            this.AuthData.map(function(item,i){
              index === i ? item.IsActive = true: item.IsActive = false
            })
          }
        }
    }


</script>