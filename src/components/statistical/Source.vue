<template>
  <div>
    <div>
      <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
    </div>
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
     this.chartSettings = {
        roseType: 'radius'
      }
    return {
         chartData: {
          columns: ['类目', '篇幅'],
          rows: []
        }
    }
  },
  components: {},
  methods: {
      getData(){
        let sourceArr = _.groupBy(this.data, "source")
        for(let key in sourceArr){
          let obj = {
            '类目':key,
            '篇幅':sourceArr[key].length,
          }
          this.chartData.rows.push(obj)
        }
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