<template>
  <div class="d-flex justify-content-around flex-wrap">
    <b-button
      v-for="link in links"
      :key="link.link"
      class="portfolio-card p-5"
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
        { name: "Portfolio", link: "Portfolio" },
        { name: "Contact", link: "Contact" }
      ]
    };
  }
};
</script>

<style scoped>
</style>