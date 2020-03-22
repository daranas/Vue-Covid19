<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetiva Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#col {
  position: relative;
  float: left;
  width: 50%;
  background: #f9f9f9;
  min-height: 100vh;
  z-index: 10;
}
</style>
