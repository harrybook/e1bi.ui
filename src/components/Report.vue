<template>
    <div class="detailContent">
        <div class="detailContentWap">
            <div class="detailContentBlock">
                <a :href="report.Url" target="_blank">
                    <div class="detailContentWap">
                        <div class="detailContentTitle">
                            {{report.WorkbookName}}
                        </div>
                    </div>
                </a>
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
    data(){
        return {}
    },
    props: ["report"]
}

</script>
