<template>
  <div class="box">
    <img src=" https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
    <ul>
        <li v-for="(item,index) in progress" :key="index">
            {{item.name}}
            <el-progress :percentage='item.progress*100' v-if="item.progress*100<100"></el-progress>
            <el-progress :percentage="item.progress*100" status="success" v-else></el-progress>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      progress:{
          type:Array,
          required:true
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
      
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box{
    padding: 10px 10px 0 10px;
    img{
        width: 100%;
    }
}
</style>