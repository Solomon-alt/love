<template>
  <div class="box">
    <div class="top">
      <layouttop></layouttop>
    </div>
    <div class="sidebar">
      <layside></layside>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import layouttop from '@/components/layout/LayoutTop'
import layside from '@/components/layout/LayoutSideBar'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {layouttop,layside},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box{
  overflow: hidden;
}
.top{
  position: fixed;
  width: 100%;
  z-index: 5;
}
.sidebar{
  position: fixed;
  width: 200px;
  height: calc(100vh - 60px);
  background: #ccc;
  margin-top: 60px;
  background: #545C64;
}
.content{
  margin: 60px 0 0 200px;
  width: calc(100vw - 200px);
  min-height: 661px;
}
</style>