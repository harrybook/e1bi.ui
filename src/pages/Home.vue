<template>
  <div :class="{hidden:this.$store.state.isLoaded===false}">
    <main-layout>
      <div class="tabMenu">
        <div class="title">
            <img src="../assets/img/tableau reports.svg" class="iconMark">
            REPORTS  
            <div style="width:170px; height: 35px; float:right; ">
                <a href="javascript:void(0)" id="LinkLastUpdateTime" v-on:mouseenter="updateToggle(true)" v-on:mouseleave="updateToggle(false)">LastUpdateTime</a>
                <div class="LastUpdateContainer" ref="divLastUpdateTime" :class="{hidden:this.IsShowUpdate===false}">
                  <div class="UpdateTime">
                    <div class="UpdateTimeSpan">2016-12-05<br />04:16:21 (+08:00)</div>
                    <div class="UpdateTimeSpan">2016-12-05<br />04:16:21 (+08:00)</div>
                    <div class="UpdateTimeSpan">2016-12-05<br />04:16:21 (+08:00)</div>
                  </div>
                </div>
            </div>
        </div>
        
        <div style="width: 35%; margin: 0 auto;">
          <template v-for="(item,index) in AuthData">
            <a href="javascript:void(0)" @click='tabToggle(index)'>
                <div class="tabItem" :class="{active:item.IsActive}">{{item.Name}}</div>
            </a>
          </template>
        </div>
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
    .LastUpdateContainer {
    position: absolute;
     width: 231px;
    height: 410px;
    background-image: url(../assets/img/UpdateTime.png);
    -webkit-filter: drop-shadow(1px 1px 2px #222);
    filter: drop-shadow(1px 1px 2px #222);
    }

    .LastUpdateContainer .UpdateTime {
        margin-top: 94px;
        margin-left: 30px;
        font-family: 'HelveticaNeue';
    }

    .UpdateTimeSpan {
        font-size:21px; 
        margin-bottom:63px;
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
        AuthData: this.$store.state.authData,
        IsLoaded: this.$store.state.isLoaded,
        IsShowUpdate: false
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
            this.$store.commit('load', response.body)
           console.log(this.$store.state.isLoaded)
           console.log(this.IsLoaded)
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
      },
      updateToggle: function(isShow) {
        this.IsShowUpdate = isShow
        let x = event.clientX - 100
        let y = event.clientY + 10
        this.$refs.divLastUpdateTime.style.left = x + 'px'
        this.$refs.divLastUpdateTime.style.top = y + 'px'
      }
    }
}

</script>
