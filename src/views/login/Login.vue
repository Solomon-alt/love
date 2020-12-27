<template>
  <div>
  <!--登录-->
    <div class="container">
      <div class="box">
        <logintop></logintop>
        <loginbody></loginbody>
      </div>
    </div>
  </div>
</template>

<script>
import logintop from '@/components/login/Logintop'
import loginbody from '@/components/login/LoginBody'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {logintop,loginbody},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background: url(../../assets/background.png) no-repeat;
  background-size: cover;
}
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
</style>