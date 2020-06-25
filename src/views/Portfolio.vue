<template>
  <div class="portfolio">
    <Projects />
    <Links />
  </div>
</template>

<script>
import Links from "../components/Portfolio/Links";
import Projects from "../components/Portfolio/Projects";
export default {
  name: "Portfolio",
  components: {
    Links,
    Projects
  }
};
</script>

<style scoped>
</style>
