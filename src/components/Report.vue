<template>
    <div class="detailContent">
        <div class="detailContentWap">
            <div class="detailContentBlock">
                <router-link :to="report.Url">
                    <div class="detailContentWap">
                        <div class="detailContentTitle">
                            {{report.WorkbookName}}
                        </div>
                    </div>
                </router-link>
                <!--<a :href="report.Url" target="_blank">
                    <div class="detailContentWap">
                        <div class="detailContentTitle">
                            {{report.WorkbookName}}
                        </div>
                    </div>
                </a>-->
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
