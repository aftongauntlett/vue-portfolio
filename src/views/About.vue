<template>
  <div class="about">
    <Paragraph />
    <TechStack />
    <Buttons />
  </div>
</template>

<script>
import Paragraph from "../components/About/Paragraph";
import TechStack from "../components/About/TechStack";
import Buttons from "../components/About/Buttons";
export default {
  name: "About",
  components: {
    Paragraph,
    TechStack,
    Buttons
  }
};
</script>

<style scoped></style>;
