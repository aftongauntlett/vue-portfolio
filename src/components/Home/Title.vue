<template>
  <div class="welcomeName slow">
    <div class="homeName">Afton Gauntlett</div>
    <div class="homeTitle">Web Developer</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 45px;
}

.welcomeName {
  margin-bottom: 100px;
  margin-top: 100px;
}

.homeName {
  font-size: 60px;
  text-align: center;
  color: rgba(230, 223, 235, 0.925);
  opacity: 0.5s ease;
}

.homeTitle {
  font-size: 30px;
  text-align: center;
  color: rgba(215, 203, 223, 0.863);
}

/* Animations */
.slow {
  animation: slow 0.5s ease-in-out;
}

@keyframes slow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
