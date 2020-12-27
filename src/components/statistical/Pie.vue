<template>
  <div>
    <ve-pie :data="chartData"></ve-pie>
  </div>  
</template>

<script>
import _ from 'lodash'
export default {
  name: '',
  props:{
      data:{
          type:Array
      }
  },
  data () {
    return {
         chartData: {
          columns: ['类目', '篇幅'],
          rows: []
        },
        arr:[]
    }
  },
  components: {},
  methods: {
      getData(){
       let categoryArr= _.groupBy(this.data , "category")
       for(let key in categoryArr){
         let obj = {
           '类目': key,
           '篇幅': categoryArr[key].length
         }
         this.chartData.rows.push(obj)
       }
       console.log(categoryArr);
      }
  },
  mounted() {
      this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>