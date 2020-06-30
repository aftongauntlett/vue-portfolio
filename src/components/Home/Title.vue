<template>
  <div class="welcomeName slow">
    <div class="homeName">Afton Gauntlett</div>
    <div class="homeTitle">Web Developer</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  font-size: 45px;
}

.welcomeName {
  margin-bottom: 100px;
  margin-top: 100px;
}

.homeName {
  font-size: 80px;
  font-family: "Martel", serif;
  text-align: center;
  color: rgba(230, 223, 235, 0.925);
  opacity: 0.5s ease;
}

.homeTitle {
  font-size: 30px;
  font-family: "Martel", serif;
  text-align: center;
  color: rgba(215, 203, 223, 0.863);
}

/* Animations */
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

/* Media */
@media only screen and (max-width: 600px) {
  .titleHome {
    margin-top: 50px;
    text-align: center;
  }

  .homeName {
    font-size: 50px;
  }

  .homeTitle {
    font-size: 30px;
  }

  #homeCards {
    padding-top: unset;
  }

  .hCards {
    font-size: 18px !important;
    opacity: 100%;
  }

  .hireMe {
    font-size: 18px !important;
    opacity: 100%;
  }
}
</style>