<template>
  <div>
    <table>
        <thead>
            <tr>
                <th width=300>Order No</th>
                <th width=180>price</th>
                <th width=180>status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in orderData" :key="index">
                <td>{{item.num}}</td>
                <td>￥{{item.price}}</td>
                <td>
                <button v-if="item.status===0" >pending</button>
                <button v-else :class="{'active' :item.status===1}">success</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      orderData:{
          type:Array,
          required: true
      }
  },
  data () {
    return {
       
    }
  },
  components: {},
  methods: {
      
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
tr{
    display: flex;
    height: 52px;
    border-bottom: 1px solid #ddd;
    th{
    font-weight: 400;
    color: #ccc;
    }
    td{
        width: 250px;
        text-align:center;
        color: #666;
        button{
            height: 30px;
            margin-top: 11px;
            background: #FEF0F0;
            border:none;
            padding: 0 10px;
            border-radius: 5px;
            color: #F67D73;
        }
    }
}
.active{
    color: #75C84C!important;
    background: #F0F9EB!important;
}
</style>