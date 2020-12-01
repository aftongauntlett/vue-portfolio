<template>
  <div id="app" class="d-flex flex-column justify-content-between">
    <Navbar />
    <b-container
        v-if="$route.name !== 'Home'"
        fluid
        class="flex-grow-1"
        :class="$route.name === 'Home' ? '' : 'darkBackground'"
    >
      <router-view class="container"/>
    </b-container>
    <router-view v-else/>
    <Footer/>

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
  /*background-color: #282e34;*/
  font-family: "Martel", serif;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  height: 100%;
}

/*.backgroundImage {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  right: 0;*/
/*  background-repeat: no-repeat;*/
/*  background-attachment: fixed;*/
/*  background-size: cover;*/
/*  z-index: -1;*/
/*}*/

.card {
  background-color: rgba(223, 228, 241, 0.918);
}

body, html {
  height: 100%;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8em;
  font-family: 'PT Serif', serif;
  color: #666;
  overflow-x: hidden;
}

.darkBackground {
  background-color: #44484e;
}

.pimg1, .pimg2, .pimg3 {
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.pimg1 {
  background-image: url("/assets/field.jpg");
  min-height: 70vh;

}

.pimg2 {
  background-image: url("/assets/space.jpg");
  min-height: 400px;
}

.pimg3 {
  background-image: url("/assets/space.jpg");
  min-height: 400px;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-light {
  background-color: #f4ff4f4;
  color: #666;
}

.section-dark{
  background-color: #282e34;
  color: #ddd;
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
  color: #fff;
  padding: 20px;
}

.border {

}

.ptext .border.trans {
  background-color: transparent!important;
}

@media (max-width: 568px){
  .pimg3, .pimg2, .pimg1 {
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
