<template>
    <div class="wap">
        <div class="head">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/img/logo_header.svg" style="margin-top:10px;" />
                </router-link>
            </div>
            <div class="userinfo">
                <div class="container" @click="toggleFeature()">
                    <div class="expand"></div>
                    <div>{{this.$store.state.email.split('@')[0]}}</div>
                </div>
                <div class="feature" :class="{hidden:this.IsShowFeature===false}">
                    <div class="item last">
                        <div @click="logout()">Log Out</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <slot></slot>
        </div>

        <div class="foot">
            <div class="logoLast">
                <img src="../assets/img/logo_footer.svg" style="margin:22px 40px 30px 20px" />
            </div>
            <span>
                Privacy Policy<br /><br />
                © EF Education First 2016. All rights reserved.
            </span>
        </div>
    </div>
</template>
<style>
    body {
        margin:0px;
        overflow-y:scroll;
    }
    
    @font-face {
        font-family: HelveticaNeueBold;
        src: url("../assets/font/HelveticaNeue-Bold.ttf");
    }
    
    @font-face {
        font-family: HelveticaNeue;
        src: url("../assets/font/HelveticaNeue.ttf");
    }
    
    @font-face {
        font-family: HelveticaNeue-Medium;
        src: url("../assets/font/HelveticaNeue-Medium.ttf");
    }
    
    @font-face {
        font-family: HelveticaNeue-CondensedBold;
        src: url("../assets/font/HelveticaNeue-CondensedBold.ttf");
    }
    
    .wap {
        width: 100%;
        min-width: 1024px;
        min-height: 600px;
        /*height: auto;*/
        MARGIN-RIGHT: auto;
        MARGIN-LEFT: auto;
    }
    
    .head {
        width: 100%;
        height: 65px;
        background: #fff;
        box-shadow: 0px 0.5px 3px;
    }
    
    #ReportTitle {
        float: left;
        font-family: 'HelveticaNeue';
        height: 100%;
        line-height: 65px;
        font-size: 24px;
        font-style: italic;
        color: #666;
    }
    
    .logo {
        width: 68px;
        margin-left: 20px;
        height: 65px;
        float: left;
        text-align: left;
    }
    
    .userinfo {
        float: right;
        /*width: 150px;*/
        height: 100%;
        padding-right: 40px;
        position: relative;
        font-size: 16px;
        font-family:'HelveticaNeue';
    }
    
    .userinfo .container{
        cursor: pointer;
        height: 100%;
    }

    .userinfo .container > div {
      display: inline-block;
      vertical-align: middle;
    }

    .userinfo .container .expand {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      margin-right: 13px;
      width: 20px;
      background-image: url("../assets/img/dropdown.svg");
    }

    .feature {
        background-color: #fff;
        box-shadow: 0 .3125rem .625rem rgba(0,0,0,.3);
        position: absolute;
        right: 0;
        top: calc(100% + .0625rem);
        z-index: 1000;
    }

    .item {
        -webkit-transition: none;
        transition: none
    }

    .item:hover {
        background-color: #0087e6;
        color: #fff
    }

    .item>div {
        border-bottom: 1px solid #999;
        border-bottom: .0625rem solid #999;
        cursor: pointer;
        margin: 0 20px;
        margin: 0 1.25rem;
        min-width: 100px;
        min-width: 6.25rem;
        padding: 10px 0;
        padding: .625rem 0;
        -webkit-transition: none;
        transition: none;
        font-family:Helvetica Neue,Microsoft YaHei,sans-serif;
        font-size: 14px;
        font-weight: 500;
     }

     .item.last >div{
        border-bottom: none;
     }

    .main {
        width: 100%;
        min-height: 600px;
        overflow: hidden;
        background-color: #F2F2F2;
        background-size: 83px 100%;
        box-shadow: 0px 0.5px 3px;
        padding-bottom: 60px;
    }
    
    .Content {
        width: 94.5%;
        padding-left: 28px;
        padding-right: 33px;
    }
    
    .title {
        width: 94.5%;
        margin-top: 25px;
        margin-right: 33px;
        padding-bottom: 15px;
        /*margin-bottom: 30px;*/
        float: left;
        text-align: left;
        font-size: 14px;
        font-family: 'HelveticaNeueBold';
        color: #5c5c5c;
        border-bottom: 1px solid #000;
    }

    .iconPadding {
        padding: 10px;
    }
    
    .menu {
        width: 100%;
        float: left;
        min-height: 60px;
        overflow: hidden;
        padding-bottom: 5px;
    }
    
    .foot {
        width: 100%;
        height: 80px;
        background: #4a4a4a;
        text-align: left;
        color: #dedede;
        font-size: 12px;
        font-family: 'HelveticaNeue';
    }
    
    .logoLast {
        float: left;
        width: 106px;
    }

    .foot span {
        float: left;
        margin-top: 20px;
    }
    /*Color*/
    
    .Color1 {
        background-color: #1ebcc5;
    }
    
    .Color2 {
        background-color: #54c0ab;
    }
    
    .Color3 {
        background-color: #B7CA33;
    }
    
    .Color4 {
        background-color: #F16B6A;
    }
    
    .Color5 {
        background-color: #ffc646;
    }
    
    .Color6 {
        background-color: #f7932d;
    }
    
    .Color7 {
        background-color: #ee4f85;
    }
    
    .Color8 {
        background-color: #9b519d;
    }
    
    .SubWap {
        width: 100%;
        height: auto;
        MARGIN-RIGHT: auto;
        MARGIN-LEFT: auto;
        text-align: center;
    }
    
    .Submain {
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 0.5px 3px;
        padding-bottom: 60px;
    }
    
    .SubContent {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2px;
    }
    
    #TableauVizContainer {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
    }
    
    .closeButton {
        width: 20px;
        height: 20px;
        font-size: 15px;
        position: absolute;
        right: 5px;
        top: 5px;
        z-index: 30;
        background-color: red;
    }
    
    .closeHref a:hover div {
        background: #456981;
    }
    
    .closeHref a div {
        background: #456981;
    }
    .hidden {
        display: none
    }
</style>

<script>
import userMgr from '../sso'

export default{
    data(){
        return {
            IsShowFeature: false
        }
    },
    created () {
        this.checkAuth()
    },
    methods:{
        checkAuth: function(){
            localStorage.lastPathUrl = location.pathname + location.search
            if (this.$store.state.accessToken === '') {
                userMgr.signinRedirect()
            }
        },
        logout: function(){
            userMgr.signoutRedirect()
        },
        toggleFeature: function(){
            this.IsShowFeature = !this.IsShowFeature
        }
    }
}
</script>
