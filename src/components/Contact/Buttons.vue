<template>
  <div>
    <b-button
      class="aboutButton ml-3"
      variant="light"
      v-for="link in links"
      :key="link.link"
      :to="{name:
      link.link}"
    >{{link.name}}</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "About Me", link: "About" },
        { name: "Portfolio", link: "Portfolio" }
      ]
    };
  }
};
</script>

<style scoped>
.aboutButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  font-family: "Martel", serif;
}

.aboutButton {
  opacity: 80%;
  font-family: "Martel", serif;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
