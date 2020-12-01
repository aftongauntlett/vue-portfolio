<template>
  <b-card class="p-3 m-5 myCard slow" :img-src="imageLocation" :title="project.title">
    <b-card-text>
      {{ project.description }}
      <div class="mt-3">
        <b-button
          class="pButton ml-3 my-2"
          variant="dark"
          :href="project.deployedLink"
          target="_blank"
        >Deployed</b-button>
        <b-button
          v-if="project.gitLink"
          class="pButton ml-3 my-2"
          variant="dark"
          :href="project.gitLink"
          target="_blank"
        >Github</b-button>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {}
  },
  computed: {
    imageLocation() {
      return require("../../assets/images/projects/" + this.project.image);
    }
  }
};
</script>

<style scoped>
.myCard {
  max-width: 30rem;
  min-width: 20px;
}

.content {
  flex: 1 0 auto;
}

.slow {
  animation: slow 0.5s ease forwards;
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

.slow {
  animation: slow 0.5s ease forwards;
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
