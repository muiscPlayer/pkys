<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
   
    }
}
</script>
<style>
@import './assets/css/reset.css';
html{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
    *{
      margin: 0;
      padding: 0;
    }
    #app{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
</style>
