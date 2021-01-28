<template>
  <div id="app">
    <div class="mainContent">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // topTitle() {
    //   return this.$store.state.topTitle
    // },
    cachedViews() {
      return this.$store.state.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  methods: {}
}
</script>

<style scoped>
html {
  font-size: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* text-align: center; */
  color: #2c3e50;
  font-size: 14px;

  /* background: #f5f5f5; */
  min-height: 100vh;

  /* padding-top: 50px; */
}

.mainContent {
  padding-top: 0;
}
</style>
