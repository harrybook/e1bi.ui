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
       </div>
       <div class="Content">
        <template v-for="(tabData,index) in AuthData">
          <div :class="{hidden:!tabData.IsActive}">

            <div class="menu">
              <template v-for="(category,index) in tabData.Categories">
                <div :key="category.Category.CategoryId" :class="'tag Color'+ (index%8+1)" :style="(category.IsHidden? 'opacity:0.4': 'opacity:1')">
                    <img src="../assets/img/marketing standard -W.svg" class="iconMark iconPadding"/>
                    <div class="tagContent">
                        {{category.Category.CategoryName}}
                    </div>
                    <a href="javascript:void(0)" @click='tagToggle(category)'>
                        <div :class="(category.IsHidden? 'tagHide': 'tagSign')" class="tagSign">
                        </div>
                    </a>
                </div>
              </template>
            </div>

            <report-category v-for="(category,index) in tabData.Categories" :category="category" :color="'Color'+ (index%8+1)">
            </report-category>
          </div>
        </template>
       </div>

    </main-layout>
    <iframe ref="SSRS_SSO" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no"  style="width:0px; height:0px" src=""></iframe>
  </div>
</template>
<style scoped>
  .hidden{
    display:none
  }

  .tabMenu {
        width: 100%;
        float: left;
        padding-left: 28px;
        margin-bottom: 25px;
        text-align: left;
        font-size: 14px;
        font-family: 'HelveticaNeueBold';
        color: #4a4a4a;
        box-shadow: 0px 0.5px 3px;
    }
    
    .tabMenu a {
        background-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        color: #4a4a4a;
        cursor: auto;
        display: inline;
        font-family: 'HelveticaNeueBold';
        font-size: 15px;
        height: auto;
        line-height: 22.5px;
        text-decoration: underline;
        width: auto;
    }
    
    .tabMenu a:hover div {
        border-bottom-color: #0086E5;
    }
    
    .tabItem {
        border-bottom-color: rgb(204, 204, 204);
        border-bottom-style: solid;
        border-bottom-width: 6px;
        box-sizing: border-box;
        color: #4a4a4a;
        cursor: auto;
        display: block;
        float: left;
        font-family: 'HelveticaNeueBold';
        font-size: 15px;
        height: 44px;
        line-height: 22.5px;
        padding-bottom: 8px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 8px;
        width: auto;
    }
    
    .tabItem.active {
        border-bottom-color: #0086E5;
    }
</style>
<script>
import store from '../vuex/store'
import {Refresh_SSRS_Token} from '../sso'
import * as api from '../api'
import MainLayout from '../components/MainLayout.vue'
import ReportCategory from '../components/ReportCategory.vue'




export default {
    data() {
      return   {
        AuthData: this.$store.state.authData
      }
    },
    mounted: function () {
      if (this.$store.state.accessToken !== ''){
        Refresh_SSRS_Token(this, this.$refs.SSRS_SSO)
      }
    },
    created: function(){
      if (this.$store.state.accessToken !== '' & this.$store.state.isLoaded === false) {
          api.getAuth().then((response) => {
            console.log(response.body)
            this.$store.commit('load', response.body)
          }, (response) => {
            console.log('failed')
            console.log(response)
          })
        }
      
    },
    components: {
        MainLayout,
        ReportCategory
    },
    methods: {
      tabToggle: function(index){
        this.$store.commit('switchTab', index)
      },
      tagToggle: function(category){
        this.$store.commit('switchTag', category)
      }
    }
}

</script>
