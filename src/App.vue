<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.6;
}

.v-toaster {
    width: 320px;
    .v-toast {
    border-radius: 2px;
    width: 320px;

    .v-toast-btn-clear {
      float: none;
      margin-right: 10px;
    }
  }
}

#app {
  height: 100%;
  width: 100%;
  main {
    text-align: center;
    height: 100%;
  }
}
</style>
