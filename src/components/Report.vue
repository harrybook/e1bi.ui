<template>
    <div class="detailContent" :title="'This is '+ (report.IsReport? 'report':'dashboard')">
        <div class="detailContentWap">
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
    props: ["report"]
}

</script>
