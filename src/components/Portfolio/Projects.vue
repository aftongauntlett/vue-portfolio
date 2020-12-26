<template>
    <b-card class="card projCard">
      <p class="slow title">Projects</p>
      <div class="d-flex justify-content-center flex-wrap">
        <Project v-for="project in projects" :key="project.title" :project="project"/>
      </div>
    </b-card>

</template>

<script>
import Project from "./Project";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Touch Therapeutic",
          description: "Built for a local massage therapist. Designed using Adobe XD, built in Vue, then transported to a custom theme I built in WordPress/PHP.",
          deployedLink: "https://touchtherapeuticva.com/",
          image: "touch.jpg"
        },
        {
          title: "Siren Song Shop",
          description:
              "Built for a specialty shop in Florida. Designed using Adobe XD, built in Vue, then transported to a custom theme I built in WordPress/PHP.",
          deployedLink: "https://sirensongshop.com/",
          gitLink: "https://github.com/aftongauntlett/siren-song",
          image: "siren.png"
        },
        {
          title: "East Central Countertops",
          description:
              "Designed and built for a cabinet and countertop business in Minnesota. Designed with Adobe XD, built using Vue and hosted with Firebase.",
          deployedLink: "https://east-central-countertops.web.app/#/",
          gitLink: "https://github.com/aftongauntlett/east-central-countertops",
          image: "eastcentral.jpg"
        },
        {
          title: "Follow|down",
          description:
              "Project for learning purposes only. Wireframing and Design built using Adobe XD, Backend and Hosting provided by Firebase, Frontend built using Vue and Bootstrap-vue.",
          deployedLink: "https://followdown.com/",
          gitLink: "https://github.com/aftongauntlett/followdown",
          image: "followdown2.jpg"
        },
        {
          title: "Evocate",
          description:
              "Created to showcase full-stack knowledge, built in a team of 4. Evocate is a card matching game to test your memory. This app features: React, MySQL, Sequelize, HTML/CSS/JS and Node. We focused on team building using Jira, GIT and Github.",
          deployedLink: "https://aftongauntlett.github.io/evocate-public/#/",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg"
        },
        {
          title: "Questival",
          description:
              "Created to showcase knowledge with Express, built in a team of 4. Questival is designed to connect fellow attendees with events that are tailored to their own personal interests. This app features: Node.js, Express and MySQL. We focused on team building using Jira, GIT and Github.",
          deployedLink: "https://questival.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Questival",
          image: "questival.jpg"
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
  color: #2c3e50;
  border-bottom: 1px solid #2c3e50;
  font-family: "Martel", serif;
}

.projCard {
  margin-top: 40px;
}

.slow {
  animation: slow 0.5s ease-in-out;
}

@media screen and (min-width: 600px) {
  .projCard {
    margin: 20px;
  }
}

.container {
  background-color: rgba(223, 228, 241, 0.918);
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
