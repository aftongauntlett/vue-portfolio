<template>
  <div class="home">
    <Title />
    <Links />
    <Ad />
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
  background-color: rgba(185, 182, 189, 0.801);
  border-radius: 12px;
  color: black;
}
</style>