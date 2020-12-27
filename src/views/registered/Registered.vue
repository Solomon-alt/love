<template>
  <div class="container">
  <!--注册界面-->
    <div class="box">
    <!--注册页面标题-->
     <registered></registered>
     <!--注册页面表单-->
     <regform></regform>
    </div>
  </div>
</template>

<script>
import registered from '@/components/registered/registered'
import regform from '@/components/registered/regForm'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
    registered,
    regform
    
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/background.png) no-repeat;
  background-size: cover;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 600px;
    height: 350px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  }
}
</style>