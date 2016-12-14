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
<style>
</style>
<script>
export default {
    props: ["report", "color"]
}

</script>
