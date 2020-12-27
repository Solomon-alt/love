<template>
  <div class="pic">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      data:{
          type: Array,
          required: true
      }
  },
  data () {
      return {
        chartData: {
          columns: ['date', 'actual', 'expected'],
        }
      }
    },
  components: {},
  methods: {},
  mounted() {
    this.chartData.rows=this.data
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    height: 440px;
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: .3);
}
</style>