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
      <h2>About Me</h2>
      <p>
        I am a technology-minded individual with a passion for Front End Web Development. Inspired by design and
        performance - I am able to build fluid, attractive and responsive websites and apps for any need. I have a
        multi-disciplinary background in research and entrepreneurship, backed with creativity and drive.
      </p>
    </section>

    <div class="pimg2">
      <div class="ptext">
  <span class="border trans">
Image 2 Text
  </span>
      </div>
    </div>

    <section class="section section-dark">
      <h2>Skill Set</h2>
      <div class="container justify-content-center techStack">
        <div class="row">
          <div class="col-6 col-md-3">
            <ul>
            <li>Vue</li>
            <li>React</li>
            <li>React Native</li>
            <li>WordPress</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>jQuery</li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <ul>
            <li>Bootstrap</li>
            <li>Adobe XD</li>
            <li>Responsive Design</li>
            <li>508c</li>
            <li>Wireframing</li>
            <li>Firebase</li>
            <li>Node</li>
            <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="pimg3">
      <div class="ptext">
  <span class="border trans">
Image 3 Text
  </span>
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

    <div class="pimg1">
      <div class="ptext">
  <span class="border">
    <a href="/">
    Back to Top
    </a>
  </span>

      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Home/Title";
import Links from "../components/Home/Links";

export default {
  name: "Home",
  components: {
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
