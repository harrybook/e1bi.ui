<template>
  <div class="wap">
    <div class="head">
      <div class="logo">
        <a href="/">
          <img src="../assets/img/logo_header.svg" style="margin-top:10px;"/>
        </a>
      </div>
      <div class="UserImg">
        <a href="#"><img src="../assets/img/profile.svg" style="margin-right:15px; margin-bottom:10px;"></a>
        <img src="../assets/img/dropdown.svg" style="margin-top:10px;">
      </div>
    </div>
    <div class="main">
      <slot></slot>
    </div>

    <div class="foot">
      <div class="logoLast">
        <img src="../assets/img/logo_footer.svg" style="margin:44px 40px 30px 44px"/>
      </div>
            <span>
                © EF Education First 2016. All rights reserved.
            </span>
    </div>
  </div>
</template>
<style>
body {
    text-align: center;
    background: #565656;
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
    height: auto;
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
    width: 150px;
    margin-left: 30px;
    height: 65px;
    float: left;
    text-align: left;
}

.UserImg {
    width: 150px;
    float: right;
    height: 65px;
    margin-right: 30px;
    text-align: right;
}

.main {
    width: 100%;
    min-height: 350px;
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
    margin-bottom: 30px;
    float: left;
    text-align: left;
    font-size: 14px;
    font-family: 'HelveticaNeueBold';
    color: #5c5c5c;
    border-bottom: 1px solid #000;
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

.tabItemActive {
    border-bottom-color: #0086E5;
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

#SMARTREPORTS {
    display: none;
}

#CUSTOMIZABLE {
    display: none;
}

.detail {
    float: left;
    width: 100%;
    margin-top: 40px;
}

.detailHead {
    width: 100%;
    padding-bottom: 10px;
    float: left;
    text-align: left;
    font-size: 16px;
    font-family: 'HelveticaNeue-Medium';
    color: #5c5c5c;
    border-bottom: 1px solid #cbcccc;
}

.detailContent {
    float: left;
    width: 30%;
    height: auto;
    overflow: hidden;
    margin-top: 20px;
    box-shadow: 0px 1px 1px;
    background-color: #fff;
    margin-right: 3.3%;
    position: relative;
}

.clearfix {
    clear: both;
}

.detailContent a div {
    background: #456981;
    color: #fff;
}

.detailContent a:hover div {
    color: #fff;
    background: #0087E6;
}

.detailContentBlock {
    float: right;
    width: 98%;
}

.detailContentWap {
    width: 100%;
    height: 100%;
    float: left;
}


.detailContentTitle {
    width: 90%;
    height: 100%;
    background-color: #456981;
    padding: 10px 20px 10px 15px;
    vertical-align: top;
    font-size: 16px;
    font-family: 'HelveticaNeue-CondensedBold';
    color: #fff;
    line-height: 24px;
    text-align: left;
    float: left;
}

.detailContentText {
    width: auto;
    height: auto;
    float: left;
    background-color: #fff;
    padding: 20px;
    font-size: 13px;
    font-family: 'HelveticaNeue';
    color: #5c5c5c;
    line-height: 20px;
    text-align: left;
}

.iconMark {
    margin-right: 10px;
    width: 22px;
    height: 22px;
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

.tag {
    height: 40px;
    overflow: hidden;
    min-width: 160px;
    float: left;
    margin-top: 20px;
    margin-right: 20px;
    box-shadow: 0px 0.5px 3px #000;
    font-family: 'HelveticaNeue';
    text-align: left;
    color: #fff;
}

    .tag img {
        float: left;
    }

    .tag a:hover div {
        background-image: url("../assets/img/view-Hover.svg");
    }

.tagContent {
    height: 30px;
    float: left;
    margin-top: 10px;
    margin-right: 15px;
}

.tagSign {
    height: 100%;
    width: 40px;
    background-image: url("../assets/img/view.svg");
    background-repeat: no-repeat;
    background-size: 30px;
    background-color: #fff;
    background-position: center;
    float: right;
}

.tagHide {
    height: 100%;
    width: 40px;
    background-image: url("../assets/img/hide.svg");
    background-repeat: no-repeat;
    background-size: 30px;
    background-color: #fff;
    background-position: center;
    float: right;
}

.foot {
    width: 100%;
    height: 130px;
    background: #4b4b4c;
    text-align: left;
    color: #dedede;
    font-size: 12px;
    font-family: 'HelveticaNeue';
}

.logoLast {
    float: left;
    width: 136px;
}

.foot span {
    float: left;
    margin-top: 73px;
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
    font-size:15px;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 30;
    background-color:red;
}

.closeHref a:hover div{
    background: #456981;
}

.closeHref a div{
    background: #456981;
}

</style>
<script>
</script>
