<template>
  <div class="slow card-area d-flex justify-content-center">
    <b-card title="About Me" tag="article" class="aboutTitle m-md-5 mt-3 p-3">
      <b-card-text>
        <p>I am a technology-minded individual with a passion for Front End Web
        Development. Inspired by design and performance - I am able to build
        fluid, attractive and responsive websites for any need. I have a
        multi-disciplinary background in research and entrepreneurship, backed
          with creativity and drive.</p>
        <p class="font-weight-bold">Tech Stack:</p>
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
    Buttons,
  },
};
</script>

<style scoped>
.card-title {
  border-bottom: 2px solid rgba(109, 108, 110, 0.514);
  padding-bottom: 20px;
  font-family: "Martel", serif;
  font-size: 35px;
  color: #2c3e50;
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
