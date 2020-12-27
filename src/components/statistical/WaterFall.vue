<template>
  <div>
     <ve-waterfall :data="chartData" :settings="chartSettings"></ve-waterfall>
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
        dimension: '类目',
        metrics: '篇幅'
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
          let dateArr = _.groupBy(this.data, "date");
          for(let key in dateArr){
              let obj = {
                  '类目': (key.substring(0, 10)),
                  '篇幅': dateArr[key].length,
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