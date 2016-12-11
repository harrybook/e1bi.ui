<template>
  <div class="Content" :class="{hidden:!tabData.IsActive}">
    <report-category v-for="(category,index) in tabData.Categories" :category="category">
    </ReportCategory>
  </div>
</template>
<style scoped>
    .hidden{
        display:none
    }
</style>
<script>
import ReportCategory from '../components/ReportCategory.vue'

export default {
    props: ["tabData"],
    components: {ReportCategory}
}

</script>