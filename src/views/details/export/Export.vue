<template>
  <div>
    <div class="container">
      <ipt :data="data" v-if="data.length>0"></ipt>
      <tbe :data="data" v-if="data.length>0"></tbe>
      <foot></foot>
    </div>   
  </div>
</template>

<script>
import axios from 'axios'
import ipt from '../../../components/export/Ipt'
import tbe from '../../../components/export/Tbe'
import foot from '../../../components/export/Foot'
export default {
  name: '',
  props:{},
  data () {
    return {
      data:''
    }
  },
  components: {ipt,tbe,foot},
  methods: {
    getData(){
      axios.get('/api/tableData').then(res=>{
        this.data = res.data.data
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
.container{
  position: absolute;
  width: calc(100% - 200px);
  min-height: calc(100% - 60px);
  background: #F0F2F5;
  .foot{

    width: 600px;
    height: 200px;
    background: #666;
  }
}
</style>