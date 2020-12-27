<template>
  <div>
    <div class="top">
      <i class="el-icon-arrow-down fl"></i>
      <span class="fr">Todo  List</span>
    </div>  
    <ul v-if="num===0">
      <li v-for="(item,index) in arr" :key="index">
        <input type="checkbox" v-model="item.checked">
        {{item.name}}
      </li>
    </ul>
    <ul v-if="num===1">
      <li v-for="(item,index) in arr2" :key="index">
        <input type="checkbox" v-model="item.checked">
        {{item.name}}
      </li>
    </ul>
        <ul v-if="num===2">
      <li v-for="(item,index) in arr3" :key="index">
        <input type="checkbox" v-model="item.checked">
        {{item.name}}
      </li>
    </ul>
    <div class="foot">
      <div>({{isFalse}})items left</div>
      <div>
        <button @click="all">all</button>
        <button @click="getArrayTwo">Active</button>
        <button @click="getArraythree">Completed</button>
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
        num:0,
        arr:[
            {name:'star this repositiry',checked: false},
            {name:'fork this repositiry', checked: false},
            {name:'follow auther',checked: false},
            {name:'vue-admin',checked: false},
            {name:'vue', checked: false},
            {name:'element-ui', checked: false},
            {name:'axios', checked: true},
            {name:'webpeak', checked: true}
        ],
        arr2:[],
        arr3:[],
    }
  },
  components: {},
  methods: {
    handle(index){
      this.num = index;
    },
    all(){
        this.num=0
    },
    getArrayTwo(){
      let arr = this.arr.filter(item=>{
        return item.checked !==true
      })
      this.arr2 = arr
      console.log( this.arr2);
      this.num=1
    },
    getArraythree(){
       let arr = this.arr.filter(item=>{
        return item.checked ===true
      })
      this.arr3 = arr
      // console.log(arr);
      this.num=2

    },
    
  },
  mounted() {
    this.getArrayTwo()
    this.getArraythree()
  },
  computed: {
    isFalse(){
      let arr1= this.arr.filter(item=>{
        return item.checked!==true
      })
      return arr1.length
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.top{
    height: 60px;
    border-bottom: 1px solid #EBEEF5;
    i{
      display:inline-block;
      margin: 20px 0 0 20px; 
    }
    span{
      display:inline-block;
      margin: 20px 20px 0 0;
    }
}
ul{
  border-bottom: 1px solid #ccc;
  margin: 0 20px;
  li{
    height: 40px;
    line-height: 40px;
  }
}
.foot{
  margin: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  button{
    padding: 5px;
    margin-left: 15px;
    background: #fff;
    border-radius: 5px;
    border:none;
  }
}
.active{
  border: 1px solid #d41010!important;
}
</style>