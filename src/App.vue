<template>
  <div id="app" class="w-100 d-flex flex-wrap flex-column">
    <div
      class="backgroundImage"
      :style="{ 'background-image': `url(${imageUrl})` }"
    ></div>
    <Navbar />
    <router-view class="container" />
    <Footer class="mt-auto" />
    <notifications group="main" position="center bottom" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },

  computed: {
    imageUrl() {
      return require("@/assets/images/desktop2.png");
    },
  },
};
</script>

<style>
#app {
  font-family: "Martel", serif;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  min-width: 100vw;
}

.backgroundImage {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
}

.card {
  background-color: rgba(223, 228, 241, 0.918);
}
</style>
