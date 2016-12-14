<template>
  <div class="detail" :class="{hidden:category.IsHidden}">
    <div class="detailHead">
        <img src="../assets/img/marketing standard.svg" class="iconMark" />
        {{category.Category.CategoryName}}
    </div>
    <report v-for="(report, index) in reports" :report="report" :color="color"></report>
  </div>
</template>
<style scoped>
.hidden{
  display: none
}
</style>
<script>
import report from './Report.vue'
export default {
    data(){
      return {
        reports: []
      }
    },
    props: ["category", "color"],
    components: {report},
    created: function(){
      for(let index in this.category.Reports){
        let reportData = this.category.Reports[index]
        let urlPre = reportData.IsReport === true ? 'report?path=' : 'tableau?path='
        reportData.Url = urlPre + reportData.ReportPath 
      }
      
      for(let i=0;i<this.category.Reports.length;i++){
        let report = this.category.Reports[i]
        report.IsPlaceHolder = false
        this.reports.push(report)
        if((i+1) % 3 === 0){
          this.reports.push({
            IsPlaceHolder: true
          })
        }
      }
    }
}
</script>