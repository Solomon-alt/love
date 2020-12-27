<template>
  <div>
     <el-menu  default-active="$route.meta.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="0" @click="handle1">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="1" @click="handle2">
          <i class="el-icon-menu"></i>
          <span slot="title">已发布</span>
        </el-menu-item>
        <el-menu-item index="2" @click="handle3">
          <i class="el-icon-menu"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="3" @click="handle4">
          <i class="el-icon-check"></i>
          <span slot="title">发表文章</span>
        </el-menu-item>
        <el-menu-item index="4" @click="handle5">
          <i class="el-icon-setting"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
        <el-menu-item index="5" @click="handle6">
          <i class="el-icon-setting"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
        <el-menu-item index="6" @click="handle7">
          <i class="el-icon-setting"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
        <el-menu-item index="7" @click="handle8">
          <i class="el-icon-shopping-cart-2"></i>
          <span slot="title">退出系统</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handle1(){
        this.$router.push('/')
      },
      handle2(){
        this.$router.push('/Published')
      },
      handle3(){
        this.$router.push('/statistical')
      },
      handle4(){
        this.$router.push('/article')
      },
      handle5(){
        this.$router.push('/tab')
      },
      handle6(){
        this.$router.push('/export')
      },
      handle7(){
        this.$router.push('/upload')
      },
      handle8(){
        this.$router.push('/exit')
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
el-menu-item{
  width: 300px;
}
</style>