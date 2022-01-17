<template>
  <div class="slow card-area container d-flex justify-content-center">
    <b-card
      title="Why Choose Me?"
      tag="article"
      class="aboutTitle m-md-5 mt-3 p-3"
    >
      <b-card-text>
        <Offers />
        <Buttons />
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Buttons from "./Buttons";
import Offers from "./Offers";

export default {
  name: "Paragraph",
  components: {
    Buttons,
    Offers,
  },
};
</script>

<style scoped>
.card-title {
  border-bottom: 2px solid rgba(109, 108, 110, 0.514);
  padding-bottom: 20px;
  font-size: 35px;
  color: #2c3e50;
}

.card-area {
  text-align: center;
}

.card-text {
  padding: 20px;
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
