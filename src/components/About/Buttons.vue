<template>
  <div>
    <b-button
      class="aboutButton mx-2 mt-5"
      variant="dark"
      v-for="link in links"
      :key="link.link"
      :to="{name:
      link.link}"
    >{{link.name}}</b-button>

    <div class="p-3">
      <div class="d-flex justify-content-center">
        <div class="aboutButton">
          <a href="https://www.linkedin.com/in/afton-gauntlett/" target="_blank">
            <i class="fa fa-linkedin-square fa-2x pr-3 text-dark"></i>
          </a>
        </div>

        <div class="aboutButton">
          <a href="https://github.com/aftongauntlett" target="_blank">
            <i class="fa fa-github fa-2x pr-3 text-dark"></i>
          </a>
        </div>

        <div class="aboutButton">
          <a href="mailto:afton.gauntlett@gmail.com">
            <i class="fa fa-envelope fa-2x text-dark"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Portfolio", link: "Portfolio" },
        { name: "Contact", link: "Contact" },
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
  opacity: 0.8;
  font-family: "Martel", serif;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
}
</style>
