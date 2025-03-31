<template>
  <div class="home">
    <notifications group="main" position="center bottom" />
    <div class="pimg1">
      <div class="ptext">
        <span class="border"> Afton Gauntlett </span>
      </div>
    </div>

    <section class="section section-light">
      <b-container>
        <b-row>
          <b-col
            xs="12"
            md="8"
            class="d-flex flex-column justify-content-center align-items-center text-center pt-3"
          >
            <h2 class="main-title">About Me</h2>
            <p class="about-me mx-auto">
              I am a technology-driven, full-stack developer with a strong focus
              on front-end development, design, and accessibility. My
              multi-disciplinary background in research and entrepreneurship,
              combined with my passion for UI/UX, empowers me to craft
              innovative, user-centered solutions. I specialize in JavaScript
              and TypeScript, and I am dedicated to creating fluid, responsive,
              and accessible applications that meet high standards, including
              508 compliance. With a creative mindset and a drive for
              excellence, I am always eager to tackle new challenges and turn
              ideas into impactful applications.
            </p>
          </b-col>
          <b-col
            xs="12"
            md="4"
            class="d-flex justify-content-center align-items-center pt-3"
          >
            <img
              :src="imageSrc"
              alt="Profile picture"
              class="small-image"
              @click="showModal = true"
              fluid
            />
          </b-col>
        </b-row>
        <b-modal v-model="showModal" centered hide-footer size="md">
          <div class="modal-img-container">
            <b-img
              :src="imageSrc"
              alt="Enlarged profile picture"
              class="modal-image"
              fluid
            ></b-img>
          </div>
        </b-modal>
      </b-container>
    </section>

    <section class="section section-dark">
      <h2 class="main-title-dark">SKILLS</h2>
      <TechStack light />
    </section>

    <section class="section section-light py-5">
      <h2 class="main-title">Contact</h2>
      <div class="pt-5">
        <div class="d-flex justify-content-center">
          <div>
            <b-btn class="contact-btn" href="mailto:afton.gauntlett@gmail.com"
              >Email</b-btn
            >
          </div>
        </div>

        <div class="pt-4 d-flex justify-content-center">
          <div>
            <b-btn
              class="contact-btn"
              href="https://flowcv.com/resume/s4j7fvac2cet"
              target="_blank"
            >
              Resume
            </b-btn>
          </div>
        </div>

        <div class="pt-4 d-flex justify-content-center">
          <div>
            <b-btn
              class="contact-btn"
              href="https://github.com/aftongauntlett"
              target="_blank"
            >
              Github
            </b-btn>
          </div>
        </div>

        <div class="pt-4 d-flex justify-content-center">
          <div>
            <b-btn
              class="contact-btn"
              href="https://www.linkedin.com/in/afton-gauntlett/"
              target="_blank"
            >
              LinkedIn
            </b-btn>
          </div>
        </div>

        <div class="pt-4 d-flex justify-content-center">
          <b-button class="contact-btn" :to="{ name: 'Portfolio' }"
            >Portfolio</b-button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Title from "../components/Home/Title";
import Links from "../components/Home/Links";
import TechStack from "@/components/About/TechStack";
import profileImage from "@/assets/images/profile.jpg";

export default {
  name: "Home",
  components: {
    TechStack,
    Links,
    Title,
  },
  data() {
    return {
      showModal: false,
      imageSrc: profileImage,
    };
  },
};
</script>

<style scoped>
.contact-btn {
  background-color: rgba(26, 25, 25, 0);
  border: 1px rgba(26, 25, 25, 0.445) solid;
  color: rgba(26, 25, 25, 0.753);
  border-radius: 0;
  min-width: 200px;
}

.contact-btn:hover {
  background-color: rgba(26, 25, 25, 0.753);
  border: 1px rgba(247, 243, 243, 0.726) solid;
  color: rgba(247, 243, 243, 0.726);
  border-radius: 0;
  min-width: 200px;
}

.about-me {
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: left;
  width: 100%;
  max-width: 600px;
}

.main-title {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  border-bottom: 1px rgba(26, 25, 25, 0.445) solid;
  padding-bottom: 30px;
  padding-top: 10px;
  margin: auto;
  width: 100%;
  max-width: 600px;
}

.main-title-dark {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  border-bottom: 1px rgba(247, 243, 243, 0.445) solid;
  padding-bottom: 30px;
  padding-top: 10px;
  margin: auto;
  width: 100%;
  max-width: 600px;
}

.contactIcon {
  padding-left: 30px;
  padding-right: 30px;
}

.techStack {
  line-height: 200%;
  padding-top: 35px;
}

li {
  list-style-type: none;
}

.small-image {
  width: 250px;
  height: auto;
  opacity: 0.8;
  border-radius: 10px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.small-image:hover {
  opacity: 1;
  transform: scale(1.05);
}

.small-image:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.small-image:hover:before {
  opacity: 1;
}
.modal-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-image {
  max-width: 400px;
  height: auto;
  opacity: 0.9;
  border-radius: 10px;
}
</style>
