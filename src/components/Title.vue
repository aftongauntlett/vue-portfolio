<template>
  <div class="d-flex justify-content-center flex-column">
    <div class="title-container mb-5 mx-auto px-3">
      <h2 class="main-title">
        {{ title }}
      </h2>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["title", "subtitle"],
};
</script>

<style scoped>
.main-title {
  padding-top: 40px;
  padding-bottom: 10px;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: rgba(44, 44, 48, 0.849);
}

.title-container {
  border-bottom: 2px rgba(0, 0, 0, 0.301) solid;
  padding-bottom: 10px;
  border-bottom-width: 4px;
  border-bottom-style: solid;
}
</style>
