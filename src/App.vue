<template>
  <div id="app">
    <cnode-header></cnode-header>
   <!-- <img src="./assets/logo.png">-->
   <div class='container'>
      <router-view></router-view>
      <router-view name='side'></router-view>
   </div>
  </div>
</template>

<script>
import cnodeHeader from '@/components/cnodeHeader'
export default {
  name: 'app',
  components: {
    cnodeHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
  width: 100%;
  font-size: 22px;
  color:#2c3e50;
  word-break: break-all;
}

.container
{
   width: 100%;
   margin:0 auto;
   overflow: hidden;
   margin-top:60px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

body{
  margin:0;
  width: 100%;
  padding:0 !important;
}
</style>
