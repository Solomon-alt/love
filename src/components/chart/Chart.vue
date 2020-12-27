<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{
      chartData:{
          type:Object,
          required:true
      },
      type:{
          type:String,
          required:true
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {
      chartType(){
          return 've-'+this.type
      }
  },
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>