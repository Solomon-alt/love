<template>
  <div>
    <div class="box">
      <button @click="handle">返回首页</button>
    </div>
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
    handle(){
      this.$router.push('/')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  width:100vw;
  height:100vh;
  background: url(../../assets/err.jpg) no-repeat;
  background-size: cover;
  button{
    position: absolute;
    top:48%;
    left: 50%;
    color:white;
    background: #409EFF;
    padding:10px 15px;
    border-radius: 5px;
  }
}
</style>