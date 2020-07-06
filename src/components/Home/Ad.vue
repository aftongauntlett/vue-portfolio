<template>
  <div class="d-flex justify-content-center slow">
    <b-button :to="{ name: 'Contact' }" class="hCards portfolio-card p-4">
      <div>Would you like me to design your website or portfolio?</div>
      <div>Contact me for pricing!</div>
    </b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hCards:hover {
  transition: 02;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  transition: all 0.3s ease;
  opacity: 1;
}

.adFont {
  font-size: 14px !important;
}
</style>
