<template>
  <div id="app">
    <commonHead></commonHead>
    <router-view/>
    <commonFoot></commonFoot>
  </div>
</template>

<script>
import commonHead from "@/components/head";
import commonFoot from "@/components/foot";
export default {
  name: "App",
  components: { commonHead, commonFoot },
  created() {
    window.screenWidth = document.body.clientWidth;
    let screenWidth = window.screenWidth;
    let isBigScreen = screenWidth >= 1000 ? true : false;
    this.$store.dispatch("updateIsBigScreen", isBigScreen);
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
