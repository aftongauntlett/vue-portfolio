<template>
  <div class="home">
    <notifications group="main" position="center bottom"/>
    <div class="pimg1">
      <div class="ptext">
  <span class="border">
Afton Gauntlett
  </span>
      </div>
    </div>

    <section class="section section-light">
      <div class="container">
        <h2>About Me</h2>
        <p>
          I am a technology-minded individual with a passion for Front End Web Development. Inspired by design and
          performance - I am able to build fluid, attractive and responsive websites for any need. I have a
          multi-disciplinary background in research and entrepreneurship, backed with creativity and drive.
        </p>
      </div>
    </section>

    <div class="pimg2">
      <div class="ptext">
        <b-button class="border trans px-5" :to="{ name: 'About' }">Skills</b-button>
      </div>
    </div>

    <section class="section section-dark">
      <h2>Tech Stack</h2>
    <TechStack light/>
    </section>

    <div class="pimg3">
      <div class="ptext">
        <b-button class="border trans px-5" :to="{ name: 'Contact' }">Contact Me</b-button>
      </div>
    </div>

    <section class="section section-light">
      <h2>Get in Touch</h2>
      <div class="p-3">
        <div class="d-flex justify-content-center">
          <div class="aboutButton">
            <a href="https://www.linkedin.com/in/afton-gauntlett/" target="_blank">
              <i class="fa fa-linkedin-square fa-2x pr-3 text-dark"></i>
            </a>
          </div>

          <div class="aboutButton">
            <a href="https://github.com/aftongauntlett" target="_blank">
              <i class="fa fa-github fa-2x pr-3 text-dark"></i>
            </a>
          </div>

          <div class="aboutButton">
            <a href="mailto:afton.gauntlett@gmail.com">
              <i class="fa fa-envelope fa-2x text-dark"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Title from "../components/Home/Title";
import Links from "../components/Home/Links";
import TechStack from "@/components/About/TechStack";

export default {
  name: "Home",
  components: {
    TechStack,
    Links,
    Title,
  },
};
</script>

<style scoped>
>>> .portfolio-card {
  background-color: rgba(255, 255, 255);
  opacity: 0.8;
  color: black;
  margin: 30px;
}

.contactIcon {
  padding-left: 30px;
  padding-right: 30px;
}

.btn {
  font-size: unset;
}

a {
  text-decoration: none;
  color: #fff;
}

.aboutButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  font-family: "Martel", serif;
}

.aboutButton {
  opacity: 0.8;
  font-family: "Martel", serif;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
}

.techStack {
  line-height: 200%;
  padding-top: 35px;
}

li {
  list-style-type: none;
}
</style>
