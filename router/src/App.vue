<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goback">后退</button>
        <button @click="goahand">前进</button>
        <button @click="goHome">返回首页</button>
      </div>
      <router-link to="/params/198/smdq webside is good">params</router-link>|
      <router-link to="/params/88/i like vue.js">goparams</router-link>|
      <router-link to="/">home</router-link>|
      <router-link to="/gohome">gohome</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <router-link to="/smdqRomeo">smdqRomeo</router-link>|
      <!-- :to="{name:'hi1',params:{username:'smdq',id:'666'}}" -->
      <!-- 这里的name 是路由index文件里对应的name的值 -->
      <router-link :to="{name:'hi1',params:{username:'smdq',id:'666'}}">Hi页面1</router-link>|
      <router-link :to="{name:'hi2',params:{}}">Hi页面2</router-link>|
      <p>{{$route.name}}</p>
    </div>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:#ff00f0"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1)
    },
    goahand(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
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
  margin-top: 60px;
}
</style>
