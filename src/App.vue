<template>
  <div id="app" class="boxes">
    <div id="nav">
      <router-link to="/about">aooo</router-link>
      <img alt="Vue logo" src="@/assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>
<style>
@import "./css/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
