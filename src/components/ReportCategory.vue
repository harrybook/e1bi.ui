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
    components: {report},
    created: function(){
      for(let index in this.category.Reports){
        let reportData = this.category.Reports[index]
        let urlPre = reportData.IsReport === true ? 'report?path=' : 'tableau?path='
        reportData.Url = urlPre + reportData.ViewUrl 
      }
      console.log(this.category)
    }
}
</script>