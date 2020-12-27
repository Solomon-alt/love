<template>
  <div>
    <div class="header">
        <div class="one">
            <p>今日发布</p>
            <p>{{isToday}}</p>
        </div>
        <div class="two">
            <p>原创文章</p>
            <p>{{isCreat}}</p>
        </div>
        <div class="three">
            <p>新留言</p>
            <p>0</p>
        </div>
        <div class="four">
            <p>新消息</p>
            <p>0</p>
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
        tame:'',
        today:'',
        create:'原创'
    }
  },
  components: {},
  methods: {
      getDate(){
          let date = new Date();
          let year = date.getFullYear()         
          let month = date.getMonth() + 1         
          let da = date.getDate()
          let day = da<10? '0'+da: da;
          let time = `${year}-${month}-${day}`
          this.tame = time;
          let today =this.data[0].date.substring(0,10)
          this.today = today
      }
  },
  mounted() {
      this.getDate()
  },
  computed: {
     isToday(){
        let jinri= this.data.filter(item=>{
             return item.date.substring(0,10)===this.tame
         })
         return jinri.length
     },
     isCreat(){
        let arr = this.data.filter(item=>{
             return item.source===this.create
         })
         return arr.length
     }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.header{
    display:flex;
    justify-content: space-between;
    width:95%;
    height: 60px;
    margin:90px 2.5% 0;
    background: #999;
    div{
        position: relative;
        width: 25%;
        color: white;
        p{
            text-align:center;
            line-height: 30px;
        }
    }
    .one{
        background: #7CCABF;
        font{
            color:black;
        }
    }
    .two{
        background: #E88A87;
    }
    .three{
        background: #8375A3;
    }
    .four{
        background: #9FCEC1;
    }
}
</style>