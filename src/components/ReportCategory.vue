<template>
  <div class="detail">
    <div class="detailHead">
        <img src="../assets/img/marketing standard.svg" class="iconMark" />
        {{category.Category.ProjectName}}
    </div>
    <report v-for="(report, index) in category.Reports" :report="report"></report>
  </div>
</template>
<script>
import report from './Report.vue'
export default {
    props: ["category"],
    components: {report}
}
</script>