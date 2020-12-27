<template>
  <div>
    <button @click="back">返回</button>
    <h1>{{title}}</h1>
    <h4>摘要{{abstract}}</h4>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        arr:'',
        title:'',
        abstract:'',
        text:'',
    }
  },
  components: {},
  methods: {
      back(){
          this.$router.push('/Published')
      }
  },
  mounted() {
      this.arr=JSON.parse(this.$route.query.arr)
      this.title=this.arr.title
      this.abstract = this.arr.abstract
      this.text = this.arr.text
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
button{
    padding: 10px 15px;
    margin: 20px 0 0 20px;
    border:none;
    background: #409EFF;
    color:white;
    border-radius: 5px;
}
h1{
    text-align: center;
}
h4{
    margin-top:20px;
     text-align: center;
}
p{
    text-indent: 2em;
}
</style>