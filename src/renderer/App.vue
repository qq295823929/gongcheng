<template>
  <div id="app">
      <Menu></Menu>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu/Menu'
  export default {
    name: 'gongcheng',
    components: {
      Menu
    }
  }
</script>

<style scoped>
  #app{
    display: flex;
    height: 100%;
  }
  .route{
    width: 240px;
    height: 100%;
    overflow: hidden;
  }
  .view{
    width:auto;
      flex-grow: 1;
  }
</style>
