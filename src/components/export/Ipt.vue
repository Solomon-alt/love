<template>
  <div>
    <el-input v-model="value" @input="handle" placeholder="请输入内容" class="ipt"></el-input>
    <div class="goods">
      <div v-for="(item,index) in arr" :key="index" style="display:flex">
        <div class="name">{{item.NAME}}</div>
        <div class="num">{{item.GOODS_SERIAL_NUMBER}}</div>
        <div class="old">{{item.ORI_PRICE}}</div>
        <div class="old">{{item.PRESENT_PRICE}}</div>
        <div class="end">
          <el-button class="btn">编辑</el-button>
          <el-button type="danger" class="btn" @click="handle1(index)">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    data:{
      type:Array
    }
  },
  data () {
    return {
       value:'',
       arr:[]
    }
  },
  components: {},
  methods: {
    handle(){
      let arr= this.data.filter(item=>{
        return item.NAME.includes(this.value)===true
      })
      this.arr = this.value.length===0? null:arr;
    },
    handle1(index){
      this.arr.splice(index,1)
    }
  },
  mounted() {
    
  },
  computed: {},
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>
.ipt{
    width: 300px;
    margin: 20px 0 20px 20px;
}
.goods{
  position: absolute;
  z-index: 2;
  left: 20px;
  top:126px;
  background: #fff;
  border:1px solid #EBEEF5;
  text-align: center;
  line-height: 50px;
}
.name{
  height: 50px;
  width: 379px;
  border: 1px solid #EBEEF5;
  border-bottom: none;
}
.num{
  width: 177px;
  line-height: 50px;
  border: 1px solid #EBEEF5;
  margin-left: -1px;
  border-bottom: none;
}
.old{
  width: 179px;
  text-align: center;
  border-top:1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}
.end{
  width: 366px;
  border-bottom: 1px solid #EBEEF5;
}

.btn{
   width: 62px;
   height: 30px;
  // text-align: center;
  // line-height: 30px;
}
</style>