<template>
  <div class="box">
    <div class="box1">
         <ve-radar :data="chartData"></ve-radar>
    </div>
    <div class="box2">
         <ve-pie :data="chartData1"></ve-pie>
    </div>
    <div class="box3">
         <ve-histogram :data="chartData2"></ve-histogram>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      radarChat:{
          type:Array,
          required:true
      },
      ringChat:{
         type:Array,
        required:true
      },
      histogram:{
        type:Array,
        required:true
      }
  },
  data () {
     this.chartSettings = {
        roseType: 'radius'
      }
    return {
        chartData: {
          columns: ['name', 'delelopmer', 'marketing', 'ministration','sales','techology'],
        },
          chartData1: {
          columns: ['name', 'data'],
        },
         chartData2: {
          columns: ['date', 'expected', 'actual'],
        }
    }
  },
  components: {},
  methods: {},
  mounted() {
     this.chartData.rows = this.radarChat;
     this.chartData1.rows = this.ringChat;
     this.chartData2.rows = this.histogram;
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 440px;
    margin-bottom: 30px;
    .box1,
    .box2,
    .box3,{
        height: 100%;
        width: 480px;
        background: #fff;
    }
}
</style>