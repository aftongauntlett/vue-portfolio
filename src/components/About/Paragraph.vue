<template>
  <div class="card-area d-flex justify-content-center">
    <b-card class="aboutCard ">
      <Title title="About" />
      <b-card-text>
        <p>
          I am a technology-minded individual with a passion for Front End Web
          Development. Inspired by design and performance - I am able to build
          fluid, attractive and responsive websites for any need. I have a
          multi-disciplinary background in research and entrepreneurship, backed
          with creativity and drive.
        </p>
        <p class="stack">Tech Stack:</p>
        <TechStack />
        <Buttons />
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import TechStack from "./TechStack";
import Title from "@/components/Title";

import Buttons from "./Buttons";

export default {
  name: "Paragraph",
  components: {
    TechStack,
    Buttons,
    Title,
  },
};
</script>

<style scoped>
.aboutCard {
  text-align: center;
  padding-bottom: 15px;
  margin: 20px;
}

.stack {
  padding-top: 15px;
  font-size: 25px;
}

.card-area {
  text-align: center;
}

.card-text {
  padding: 20px;
}
</style>
