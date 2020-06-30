<template>
  <div class="portfolioCard slow">
    <div class="card pCards m-md-5">
      <h5 class="pTitle card-title">{{project.title}}</h5>
      <div class="d-flex justify-content-center">
        <img :src="imageLocation" class="img" />
      </div>
      <div class="card-body d-flex justify-content-center">
        <div class="content">
          <p>{{project.description}}</p>
        </div>
        <div class="mt-3">
          <b-button
            class="pButton ml-3"
            variant="dark"
            :href="project.deployedLink"
            target="_blank"
          >Deployed</b-button>
          <b-button
            class="pButton ml-3"
            variant="dark"
            :href="project.gitLink"
            target="_blank"
          >Github</b-button>
        </div>
      </div>
    </div>
  </div>
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
.img {
  width: 75%;
  height: auto;
}

.card {
  opacity: 0.8;
  text-align: center;
  padding: 20px;
  margin: 40px;
  font-family: "Martel", serif;
}

.card-title {
  border-bottom: 2px solid rgba(210, 204, 218, 0.514);
  font-family: "Martel", serif;
  font-size: 25px;
  color: rgb(46, 40, 40);
}

.card-body {
  flex-direction: column;
  height: 100%;
}

.portfolioCard {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
}

.pCards {
  opacity: 0.8;
  background-color: rgb(233, 238, 241) !important;
  width: 30rem;
}

.pTitle {
  text-align: center;
  font-size: 45px;
  font-family: "Martel", serif;
  padding-top: 30px;
  color: rgba(37, 37, 37, 0.774);
}

.content {
  flex: 1 0 auto;
}

/* media */

@media only screen and (max-width: 700px) {
  .pCards {
    opacity: 1 !important;
    transition: none !important;
    transform: none !important;
  }
}

.slow {
  animation: slow 0.5s ease forwards;
}

/* animations */

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