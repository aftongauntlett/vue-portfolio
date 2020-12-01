<template>
  <div>
    <div class="container">
      <p class="slow title">Projects</p>
      <div class="d-flex justify-content-center flex-wrap">
        <Project v-for="project in projects" :key="project.title" :project="project"/>
      </div>
    </div>
  </div>

</template>

<script>
import Project from "./Project";
import Wireframe from "./Wireframe";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Touch Therapeutic",
          description: "Designed with Adobe XD and built using Vue. Created for a local massage therapist in Virginia.",
          deployedLink: "https://touchtherapeuticva.com/",
          image: "touch.jpg"
        },
        {
          title: "Siren Song Shop",
          description:
              "Designed using Adobe XD, built with Vue. Created for a local shop in Florida.",
          deployedLink: "https://sirensongshop.com/",
          image: "sirensong.jpg"
        },
        {
          title: "East Central Countertops",
          description:
              "Designed and built for East Central Countertops, a contractor company located in Minnesota. Built using Vue and hosted with Firebase.",
          deployedLink: "https://east-central-countertops.web.app/#/",
          gitLink: "https://github.com/aftongauntlett/east-central-countertops",
          image: "eastcentral.jpg"
        },
        {
          title: "Evocate",
          description:
              "Created to showcase full-stack knowledge. This was built in a team of 4. Evocate is a card matching game to test your memory. This app features: React, MySQL, Sequelize, HTML/CSS/JS and Node.",
          deployedLink: "https://aftongauntlett.github.io/evocate-public/#/",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg"
        },
        {
          title: "Questival",
          description:
              "Created to showcase knowledge with Express. This app was built in a team of 4. Questival is designed to connect fellow attendees with events that are tailored to their own personal interests. This app features: Node.js, Express and MySQL.",
          deployedLink: "https://questival.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Questival",
          image: "questival.jpg"
        },
        {
          title: "Follow|down",
          description:
              "Wireframing and Design built using Adobe XD, Backend and Hosting provided by Firebase, Frontend built using Vue and Bootstrap-vue.",
          deployedLink: "https://followdown.com/",
          gitLink: "https://github.com/aftongauntlett/followdown",
          image: "followdown2.jpg"
        },
      ],
    };
  },

  components: {
    Project
  }
};
</script>

<style scoped>
.title {
  padding-top: 25px;
  padding-bottom: 10px;
  font-size: 35px;
  color: rgba(241, 240, 240, 0.897);
  border-bottom: 2px solid rgba(241, 240, 240, 0.897);
  font-family: "Martel", serif;
}

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
