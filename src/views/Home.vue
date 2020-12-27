<template>
  <div class="box">
    <ul class="tab">
      <li>
        <i class="el-icon-user"></i>
        <div class="right fr">
          <h3>New Visits</h3>
          <p><countTo :startVal='start' :endVal='visits' :duration='3000'></countTo></p>         
        </div>
      </li>
      <li>
        <i class="el-icon-chat-dot-square"></i>
        <div class="right fr">
          <h3>messages</h3>
          <p><countTo :startVal='start' :endVal='messages' :duration='3000'></countTo></p>
        </div>
      </li>
      <li >
        <i class="iconfont icon-qian money" ></i>
        <div class="right fr">
          <h3>purchases</h3>
          <p><countTo :startVal='start' :endVal='purchases' :duration='3000'></countTo></p>
          
        </div>
      </li>
      <li>
        <i class="el-icon-shopping-cart-full"></i>
        <div class="right fr">
          <h3>shopping</h3>
          <p><countTo :startVal='start' :endVal='shopping' :duration='3000'></countTo></p>
        </div>
      </li>
    </ul>
    <homechat :data="data" v-if="data.length>0"></homechat>
    <homecenter :radarChat='radarChat' :ringChat='ringChat' :histogram='histogram' v-if='radarChat.length>0 && histogram.length>0  && histogram.length>0'></homecenter>
    <div class="foot">
      <div class="foot-left">
        <order :orderData='orderData' v-if="orderData.length>0"></order>
      </div>
      <div class="foot-center">
        <todolist></todolist>
      </div>
      <div class="foot-right">
        <pic :progress='progress' v-if="progress.length>0"></pic>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'
 import homechat from '../components/home/HomeChat'
 import homecenter from '../components/home/HomeCenter'
 import order from '../components/home/Order'
 import pic from '../components/home/Pic'
 import countTo from 'vue-count-to';
 import todolist from '../components/home/Todolist'
export default {
  name: '',
  props:{},
  data () {
    return {
      messages:0,
      purchases:0,
      shopping:0 ,
      visits:0,
      data:'',
      radarChat:'',
      ringChat:'',
      histogram:'',
      orderData:'',
      progress:'',
      start:0
    }
  },
  components: {homechat,homecenter,order,pic,countTo,todolist},
  methods: {
     getData(){
       axios.get('/api/homeData').then(res=>{
         this.visits=res.data.data.visits
         this.messages=res.data.data.messages
         this.purchases=res.data.data.purchases
         this.shopping=res.data.data.shopping
       }).catch(err=>{
         console.log(err)
       })
     },
     getHoeChat(){
       axios.get('/api/homeChat').then(res=>{
        this.data = res.data.data
       }).catch(err=>{
         console.log(err);
       })
     },
     getRadarChat(){
       axios.get('/api/radarChat').then(res=>{
         this.radarChat = res.data.data
       }).catch(err=>{
         console.log(err);
       })
     },
     getRingChat(){
       axios.get('/api/ringChat').then(res=>{
          this.ringChat = res.data.data
       }).catch(err=>{
         console.log(err);
       })
     },
     getHistogram(){
       axios.get('/api/homeChat').then(res=>{
         this.histogram = res.data.data
       }).catch(err=>{
         console.log(err);
       })
     },
     getOrderData(){
       axios.get('/api/orderData').then(res=>{
         console.log(res.data.data);
         this.orderData = res.data.data
       }).catch(err=> console.log(err))
     },
      getProgress(){
       axios.get('/api/progress').then(res=>{
         console.log(res.data.data);
         this.progress = res.data.data
       })
      }
  },
  mounted() {
     this. getData()
     this.getHoeChat()
     this.getRadarChat()
     this.getRingChat()
     this.getHistogram()
     this.getOrderData()
     this. getProgress()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  padding: 0 10px;
  background: #f0f2f5;
  .tab {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    height: 105px;
  }
  .foot{
    display: flex;
    justify-content: space-between;
    height: 500px;
    margin-bottom:20px; 
    div{
      background: #fff;
    }
    .foot-left{
      height: 100%;
      flex: 2;
    }
    .foot-center{
      height: 100%;
      flex: 1;
      margin: 0 10px;
    }
    .foot-right{
      height: 100%;
      flex: 1;
    }
  }
}
.tab li {
  width: 380px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: .3);
    i{
      font-size: 50px;
      color: #78d7d5;
       margin: 27px 0 0 20px;
    }
    .el-icon-chat-dot-square{
      color: #3ba2f4;
    }
    .el-icon-shopping-cart-full{
      color: #feba85;
    }
    .iconfont{
      color: #f4768b;
    }
    .money{
      display:inline-block;
      margin-top: 20px; 
    }
    div{
      width: 100px;
      height: 60px;
      margin: 27px 40px 0 0 ;
      h3{
        font-weight: 400;
        color: #cacaca;
      }
      p{
        font-size: 20px;
        margin-top: 5px;
        color: #9296a3;
      }
    }
}
</style>