<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">登录</router-link> |
      <router-link to="/reg">注册</router-link>
    </div>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588931932734&di=f767e3d7bfba9a8f8a05ecd095a02360&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1650808851%2C593598514%26fm%3D214%26gp%3D0.jpg" alt="" class="banner">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .banner{
    width:100%;
  }

#nav {
  padding: 30px;


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
