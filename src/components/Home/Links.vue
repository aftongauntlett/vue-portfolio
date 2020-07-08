<template>
  <div class="slow d-flex justify-content-center centered flex-wrap">
    <b-button
      v-for="link in links"
      :key="link.link"
      class="hCards portfolio-card d-flex justify-content-center flex-wrap p-5"
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
        { name: "About Me", link: "About" },
        { name: "Portfolio", link: "Portfolio" },
        { name: "Contact", link: "Contact" },
        { name: "Hire", link: "Hire" },
      ],
    };
  },
};
</script>

<style scoped>
.hCards {
  width: 20rem;
  font-size: 25px;
}

.hCards:hover {
  transition: 02;
  transform: scale(1.1);
  transition: all 0.3s ease;
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .hCards {
    font-size: 18px !important;
  }
}
</style>
