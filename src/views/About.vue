<template>
  <div class="about">
    <Paragraph />
    <Buttons />
    <TechStack />
  </div>
</template>

<script>
import Paragraph from "../components/About/Paragraph";
import Buttons from "../components/About/Buttons";
import TechStack from "../components/About/TechStack";
export default {
  name: "About",
  components: {
    Paragraph,
    Buttons,
    TechStack
  }
};

<style scoped></style>;
