<template>
  <div class="home">
    <notifications group="main" position="center bottom" />
    <div class="pimg1">
      <div class="ptext">
        <span class="border"> Afton Gauntlett </span>
      </div>
    </div>

    <section class="section section-light">
      <div class="container">
        <h2 class="main-title">About Me</h2>
        <p class="pt-5 about-me mx-auto">
          I am a technology-driven, full-stack developer with a strong focus on front-end development, design, and accessibility. My multi-disciplinary background in research and entrepreneurship, combined with my passion for UI/UX, empowers me to craft innovative, user-centered solutions. I specialize in JavaScript and TypeScript, and I am dedicated to creating fluid, responsive, and accessible applications that meet high standards, including 508 compliance. With a creative mindset and a drive for excellence, I am always eager to tackle new challenges and turn ideas into impactful applications.


        </p>
      </div>
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
              href="https://docs.google.com/document/d/1CkATUVmyFAcupvgI0j2ImEwS4ZSgP-MGnvveLyYhcfk/edit?usp=sharing"
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
</style>
