<template>
  <div>
    <div class="top">
      <div class="welcome fl">欢迎{{name}}来到小爱后台管理系统</div>
      <div class="time fr">{{hello}}，亲爱的{{name}}上次登录时间:{{year}}年{{month}}月{{day}}日{{hour}}时{{ minutes}}分{{seconds}}秒</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      name:'',
      hello:'',
      year:'',
      month:'',
      day:'',
      hour:'',
      minutes:'',
      seconds:''
    }
  },
  components: {},
  methods: {
    getName(){
      let uname = localStorage.getItem (JSON.parse(JSON.stringify('name')))
      let nnmae = JSON.parse(uname)
      this.name=nnmae.name
    },
    getTime(){
      let date = new Date();
      let year = date.getFullYear();
      this.year = year;
      let mont = date.getMonth();
      let monh = mont +1;
      let month = monh<10 ? '0'+ monh : monh;
      this.month =month;
      let da = date.getDate();
      let day = da<10 ? '0'+ da : da
      this.day = day
      let hou = date.getHours();
      let hour = hou<10 ? '0'+ hou : hou
      this.hour = hour
      let minute = date.getMinutes();
      let minutes = minute<10 ? '0'+ minute : minute;
      this.minutes = minutes
      let second=date.getSeconds();
      let seconds = second<10 ? '0'+ second : second
      this.seconds = seconds;
    },
    getHello(){
       if(this.hour >=6&& this.hour<12){
        this.hello='早上好'
      }else if(this.hour>=12&& this.hour<14){
        this.hello='中午好'
      }else if( this.hour>=14&& this.hour<18){
        this.hello='下午好'
      }else if(this.hour>=18&& this.hour<=23){
        this.hello='晚上好'
      }else{
        this.hello='该睡觉了'
      }
    }
  },
  mounted() {
     this.getName()
     this.getTime()
     this.getHello()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  height: 60px;
  background: #2e5e85;
  .welcome,
  .time{
    color: white;
    line-height: 60px;
  }
  .welcome{   
    margin-left: 30px;
  }
  .time{
    margin-right: 30px;
  }
}
</style>