<template>
  <div class="d-flex justify-content-center">
    <b-card class="projCard">
      <h2 class="main-title">PROJECTS</h2>
      <div class="info">
        These are my personal projects for learning purposes, please visit
        <a href="https://gauntletdesigns.com/" target="_blank"
          >Gauntlet Designs</a
        >
        for my professional work.
      </div>
      <div class="d-flex align-items-center flex-column">
        <Project
          class="mb-5"
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </b-card>
  </div>
</template>

<script>
import Project from "./Project";
import Title from "@/components/Title";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Gauntlet Web Designs",
          description:
            "Please visit my business page. I am the owner, designer and developer for Gauntlet Designs, LLC.",
          deployedLink: "https://gauntletdesigns.com/",
          gitLink: "https://github.com/aftongauntlett/gauntlet-designs-react",
          image: "gauntletdesigns.png",
        },

        {
          title: "Catster",
          description:
            "Built for learning purposes. Tech stack: React, React, Bootstrap, Node, HTML, CSS, JavaScript, API",
          deployedLink: "https://catster.aftongauntlett.com/#/",
          gitLink: "https://github.com/aftongauntlett/Catster",
          image: "catster.png",
        },
        {
          title: "Evocate",
          description:
            "Created to showcase full-stack knowledge, built in a team of 4. Evocate is a card matching game to test your memory. This app features: React, MySQL, Sequelize, HTML/CSS/JS and Node. We focused on team building using Jira, GIT and Github.",
          deployedLink: "https://aftongauntlett.github.io/evocate-public/#/",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg",
        },
        {
          title: "Questival",
          description:
            "Created to showcase knowledge with Express, built in a team of 4. Questival is designed to connect fellow attendees with events that are tailored to their own personal interests. This app features: Node.js, Express and MySQL. We focused on team building using Jira, GIT and Github.",
          deployedLink: "https://questival.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Questival",
          image: "questival.jpg",
        },
      ],
    };
  },

  components: {
    Project,
    Title,
  },
};
</script>

<style scoped>
.info {
  max-width: 60%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

.main-title {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  border-bottom: 1px rgba(26, 25, 25, 0.445) solid;
  padding-bottom: 30px;
  padding-top: 10px;
  margin: auto;
  width: 100%;
  max-width: 600px;
}

.projCard {
  text-align: center;
  padding-bottom: 15px;
  margin: 20px;
}
</style>
