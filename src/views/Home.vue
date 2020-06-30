<template>
  <div class="home d-flex flex-wrap flex-column flex-grow-1">
    <Title />
    <Links />
    <Ad class="mt-auto" />
  </div>
</template>

<script>
import Ad from "../components/Home/Ad";
import Title from "../components/Home/Title";
import Links from "../components/Home/Links";
export default {
  name: "Home",
  components: {
    Ad,
    Links,
    Title
  }
};
</script>

<style scoped>
>>> .portfolio-card {
  background-color: rgba(255, 255, 255);
  color: black;
  margin: 30px;
}
</style>