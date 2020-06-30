<template>
  <div class="slow card-area container d-flex justify-content-center">
    <b-card title="About Me" tag="article" class="aboutTitle m-md-5 p-3">
      <b-card-text>
        I am a technology-minded individual with a passion for Front End Web Development. Inspired by
        design and performance - I am able to build fluid, attractive and responsive websites for any need. I have a multi-disciplinary background
        in research and entrepreneurship, backed with creativity and drive.
        <br />As a recent graduate from George Washington University’s Full Stack Web Development course, I have honed skills in the following:
        <TechStack />
        <Buttons />
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import TechStack from "./TechStack";
import Buttons from "./Buttons";

export default {
  name: "Paragraph",
  components: {
    TechStack,
    Buttons
  }
};
</script>

<style scoped>
.card-title {
  border-bottom: 2px solid rgba(210, 204, 218, 0.514);
  padding-bottom: 20px;
  font-family: "Martel", serif;
  font-size: 35px;
  color: #2c3e50;
}

.card {
  opacity: 0.8;
}

.card-area {
  text-align: center;
  font-family: "Martel", serif;
}

.card-text {
  padding: 20px;
}

.slow {
  animation: slow 0.5s ease forwards;
}

@keyframes slow {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>