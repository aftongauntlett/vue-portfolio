<template>
    <div class="projCard">
      <p class="title">Projects</p>
      <div class="d-flex align-items-center flex-column">
        <Project
            class="mb-5"
            v-for="(project, ind) in projects"
            :key="project.title"
            :project="project"
        />
      </div>
    </div>

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
          description: "Built for a local massage therapist. Designed using Adobe XD and built using a self-made custom WordPress theme.",
          deployedLink: "https://touchtherapeuticva.com/",
          image: "touch.png"
        },
        {
          title: "Siren Song Shop",
          description:
              "Built for a specialty shop in Florida. Designed using Adobe XD and built using a self-made custom WordPress theme.",
          deployedLink: "https://sirensongshop.com/",
          gitLink: "https://github.com/aftongauntlett/siren-song",
          image: "siren.png"
        },
        {
          title: "MAGStock",
          description:
              "Designed and built for MAGFest, inc. Created using a combination of HTML, CSS, Bootstrap and JavaScript.",
          deployedLink: "https://MAGStock.org/",
          gitLink: "https://github.com/aftongauntlett/MAGStock2020",
          image: "magstock.png"
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
  padding-top: 40px;
  padding-bottom: 10px;
  font-size: 40px;
  color: #555860;
  font-family: "Martel", serif;
}

.projCard {
  margin-top: 40px;
  background-color: #f5f5f8;
}

@media screen and (min-width: 600px) {
  .projCard {
    margin: 20px;
  }
}
</style>
