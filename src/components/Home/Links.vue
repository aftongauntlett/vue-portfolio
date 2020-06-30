<template>
  <div class="slow d-flex justify-content-center centered flex-wrap">
    <b-button
      v-for="link in links"
      :key="link.link"
      class="hCards portfolio-card d-flex justify-content-center flex-wrap p-5"
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
.hCards {
  width: 20rem;
  font-size: 25px;
}

.hCards:hover {
  transition: 02;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  transition: all 0.3s ease;
  opacity: 100%;
}

@media only screen and (max-width: 600px) {
  .hCards {
    font-size: 18px !important;
  }
}

.slow {
  animation: slow 0.5s ease forwards;
}

@keyframes slow {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>