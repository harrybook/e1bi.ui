<template>
    <div v-if="report.IsPlaceHolder" class="clearfix"></div>
    <div v-else class="detailContent" :title="'This is a '+ (report.IsReport? 'report':'dashboard')">
        <div :class="'detailContentWap '+ color">
            <div class="detailContentBlock">
                <router-link :to="report.Url">
                    <div class="detailContentWap">
                        <div class="detailContentTitle">
                            {{report.ReportName}}
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="detailContentText">
            {{report.Description}}
        </div>
    </div>
</template>
<style scoped>

    .clearfix {
        clear: both;
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
    
</style>
<script>
export default {
    props: ["report", "color"]
}

</script>
