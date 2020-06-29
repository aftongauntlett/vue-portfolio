<template>
  <div
    id="app"
    :style="{'background-image': `url(${imageUrl})`}"
    class="backgroundImage d-flex flex-wrap flex-column justify-content-between"
  >
    <Navbar />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },

  computed: {
    imageUrl() {
      return require("@/assets/images/desktop2.png");
    }
  }
};
</script>

<style>
#app {
  font-family: "Martel", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.backgroundImage {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
