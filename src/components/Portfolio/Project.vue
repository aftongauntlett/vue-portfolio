<template>
  <b-card class="mb-3 m-md-5" :img-src="imageLocation" :title="project.title">
    <b-card-text>
      {{ project.description }}
      <div class="mt-3">
        <b-button
          class="port-btn ml-3 my-2"
          variant="dark"
          :href="project.deployedLink"
          target="_blank"
          >Deployed</b-button
        >
        <b-button
          v-if="project.gitLink"
          class="port-btn ml-3 my-2"
          variant="dark"
          :href="project.gitLink"
          target="_blank"
          >Github</b-button
        >
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {},
  },
  computed: {
    imageLocation() {
      return require("../../assets/images/projects/" + this.project.image);
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 30rem;
  border: unset;
  box-shadow: 5px 5px 10px 5px #979da23b;
}

.card-text {
  font-size: 14px;
}

.card-img {
  border-radius: 0;
  margin-bottom: 15px;
}

.card-title {
  font-size: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(26, 25, 25, 0.445);
  border-bottom: 1px rgba(26, 25, 25, 0.445) solid;
  padding-bottom: 10px;
}

.content {
  flex: 1 0 auto;
}

.pCards:hover {
  opacity: 1;
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.pButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.port-btn {
  background-color: rgba(26, 25, 25, 0);
  border: 1px rgba(26, 25, 25, 0.445) solid;
  color: rgba(26, 25, 25, 0.753);
  border-radius: 0;
  min-width: 200px;
}

.port-btn:hover {
  background-color: rgba(26, 25, 25, 0.753);
  border: 1px rgba(247, 243, 243, 0.726) solid;
  color: rgba(247, 243, 243, 0.726);
  border-radius: 0;
  min-width: 200px;
}
</style>
