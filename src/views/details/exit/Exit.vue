<template>
  <div class="container">
    <div class="box">
      <h2>期待您的下次光临</h2>
      <button @click="handle">确定退出</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      localStorage.removeItem('name')
      this.$router.push('/registered')
      this.getData()
    },
    getData(){
      axios.get('/api/user/logout').then(res=>{
        if(res.data.code===0){
          let news = res.data.message
          this.$message.success(news)
        }
        else{
          this.$message.error('退出失败')
        }
      })
    }
  },
  mounted() {
    
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   margin: 30px 0 0 100px;
   width: 300px;
   height: 200px;
   h2{
     margin-top: 20px;
     text-align: center;
   }
   button{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     padding: 10px 20px;
     border: none;
     background: #409EFF;
     border-radius: 5px;
     color:white;
   }
}
</style>