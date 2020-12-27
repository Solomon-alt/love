<template>
  <div>
    <top :data="data" v-if="data.length>0"></top>
    <div class="pic">
      <div class="left">
        <pie :data="data" v-if="data.length>0"></pie>
      </div>
      <div class="right">
        <Sources :data="data" v-if="data.length>0"></Sources>
      </div>  
    </div>
    <div class="waterfall">
      <waterfall :data="data" v-if="data.length>0"></waterfall>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import top from '../../../components/statistical/Top'
import pie from '../../../components/statistical/Pie'
import Sources from '../../../components/statistical/Source'
import waterfall from '../../../components/statistical/WaterFall'
export default {
  name: '',
  props:{},
  data () {
    return {
      data:''
    }
  },
  components: {top,pie,Sources,waterfall},
  methods: {
    getData(){
      axios.get('/api/article/allArticle').then(res=>{
        this.data = res.data.data
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 400px;
  margin: 20px auto;
  div{
    height: 100%;
    width: 500px;
  }
}
.waterfall{
  width: 95%;
  height: 500px;
  margin:  auto;
}
</style>