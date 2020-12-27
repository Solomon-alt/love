<template>
  <div>
    <div class="top">
      <div class="fl" @click="handle1">未读消息({{arr.length}})</div>
      <div class="fl" @click="handle2">已读消息({{arr1.length}})</div>
      <div class="fl" @click="handle6">回收站({{arr3.length}})</div>
    </div>
    <div>
    <div class="content" v-if="num===0">
      <div v-for="(item,index) in arr" :key="index" class="box">
        <div>{{item.news}}</div>
        <div class='box1'>
          <div>{{item.time}}</div>
          <button @click="handle(item,index)">标为已读</button>
        </div>
      </div>
      <button @click="handle3">全部标为已读</button>
    </div>
    <div class="content1" v-else-if="num===1">
      <div v-for="(item,index) in arr1" :key="index" class="box">
      <div>{{item.news}}</div>
      <div class='box1'>
          <div>{{item.time}}</div>
          <button @click="handle4(item,index)">删除</button>
        </div>
      </div>
      <button class="btn" @click="handle5">删除全部</button>
    </div>
    <div class="content2" v-else>
    <div v-for="(item,index) in arr3" :key="index" class="box">
      <div>{{item.news}}</div>
      <div class='box1'>
          <div>{{item.time}}</div>
          <button style="background:#E6A23C;color" @click="handle7(item,index)">还原</button>
        </div>
      </div>
      <button style="background:#909399" @click="handle8">清空回收站</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      num:-0,
      arr:[
        {
          news:'今天是个好日子，想象的是个好日子',
          time:"2020-11-30 20-00-00"
        },{
          news:'小米加步枪，吃饭香又香',
          time:"2020-11-20 20-00-00"
        }
      ],
      arr1:[
        {
          news:'我爱我家别忘了带上钱钱',
          time:"2020-11-25 20-00-00"
        }
      ],
      arr2:[],
      arr4:[],
      arr3:[{
        news:'两个黄鹂敏翠柳，一行白鹭上青天',
        time:"2020-11-22 20-00-00"
      }]
    }
  },
  components: {},
  methods: {
    handle(item,index){
     this.arr.splice(index,1)
     this.arr1.unshift(item)
    },
    handle1(){
      this.num=0
    },
     handle2(){
      this.num=1
    },
    handle3(){
       this.arr1 = this.arr1.concat(this.arr)
      this.arr=this.arr2
    },
    handle4(item,index){
       this.arr1.splice(index,1)
       this.arr3.unshift(item)
    },
    handle5(){
       this.arr3 = this.arr1.concat(this.arr3)
      this.arr1=[]
    },
    handle6(){
      this.num=2
    },
    handle7(item,index){
      this.arr3.splice(index,1)
      this.arr1.push(item)
    },
    handle8(){
      this.arr3=[]
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top{
  height: 80px;
  margin: 0 20px;
  border-bottom: 2px solid #E6E8EE;
  div{
    height: 80px;
    line-height: 80px;
    margin-right: 30px;
  }
  div:hover {
    color:#409EFF;
    border-bottom: 2px solid #409EFF;
    cursor: pointer;
  }
}
.content{
  background: #fff;
  margin: 0 20px;
  .box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 80px;
    border-bottom: 1px solid  #E6E8EE;
    .box1{
      display: flex;
      button{
        height: 40px;
        margin: 20px 40px;
        background: #fff;
        border-radius: 5px;  
        border: 1px solid #ccc;
        color:#000;
      }
    }
  }
  button{
    margin-top: 30px;
    background: #409EFF;
    padding: 10px 20px;
    border-radius: 5px; 
    border: none;
    color: #fff;
  }
}
.content1{
  background: #fff;
  margin: 0 20px;
  .btn{
    background: #F56C6C;
  }
}
.content2{
  background: #fff;
  margin: 0 20px;
  }
</style>