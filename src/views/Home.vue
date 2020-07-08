<template>
  <div class="home">
    <Title />
    <Links />
    <Ad class="mt-auto" />
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
</style>
