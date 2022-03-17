<template>
  <div id="app" class="d-flex flex-column justify-content-between">
    <Navbar />
    <b-container
      v-if="$route.name !== 'Home'"
      fluid
      class="flex-grow-1"
      :class="$route.name === 'Home' ? '' : 'darkBackground'"
    >
      <router-view class="container" />
    </b-container>
    <router-view v-else />
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
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  height: 100%;
}

body,
html {
  height: 100%;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8em;
  color: #666;
  overflow-x: hidden;
}

.card-title {
  padding-top: 20px;
}

body {
  overflow: auto;
}

html {
  overflow: hidden;
}

.darkBackground {
  background-color: #44484e;
}

.pimg1 {
  background-image: url("/assets/field.jpg");
  min-height: 70vh;
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-light {
  background-color: #f4f4f4;
  color: #666;
}

.section-dark {
  background-color: #282e34;
  color: #f5f5f8;
}

.ptext {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.ptext .border {
  background-color: #111;
  color: #f5f5f8;
  padding: 20px;
}

.ptext .border.trans {
  background-color: transparent !important;
}

@media (max-width: 568px) {
  .pimg1 {
    background-attachment: scroll;
  }
  .border {
    font-size: 14px;
  }

  .section {
    padding: 15px 15px;
  }

  .ptext {
    font-size: 16px;
  }
}
</style>
