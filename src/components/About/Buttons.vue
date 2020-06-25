<template>
  <div>
    <b-button class="aboutButton" href="#" variant="dark">Contact</b-button>
    <div class="divider"></div>
    <b-button class="aboutButton" href="#" variant="dark">Portfolio</b-button>

    <div class="d-flex justify-content-center">
      <div class="contactCard">
        <a href="https://www.linkedin.com/in/afton-gauntlett/">
          <i class="fa fa-linkedin-square fa-2x pr-3 text-dark"></i>
        </a>
      </div>

      <div class="contactCard">
        <a href="https://github.com/aftongauntlett">
          <i class="fa fa-github fa-2x pr-3 text-dark"></i>
        </a>
      </div>

      <div class="contactCard">
        <a href="mailto: afton.gauntlett@gmail.com">
          <i class="fa fa-envelope fa-2x text-dark"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutButton {
  margin-bottom: 20px;
  opacity: 80%;
}

.aboutButton:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.divider {
  width: 20px;
  height: auto;
  display: inline-block;
}
</style>