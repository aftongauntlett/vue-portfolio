<template>
  <div>
    <b-button
      class="aboutButton mx-2 mt-5"
      variant="light"
      v-for="link in links"
      :key="link.link"
      :to="{ name: link.link }"
      >{{ link.name }}</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "About", link: "About" },
        { name: "Contact", link: "Contact" },
      ],
    };
  },
};
</script>

<style scoped>
.aboutButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.aboutButton {
  opacity: 0.8;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
