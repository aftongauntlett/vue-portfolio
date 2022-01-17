<template>
  <div class="d-flex justify-content-center">
    <b-card class="projCard px-4">
      <Title title="Projects" />
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
        // {
        //   title: "Follow|down",
        //   description:
        //     "Project for learning purposes only. Wireframing and Design built using Adobe XD, Backend and Hosting provided by Firebase, Frontend built using Vue and Bootstrap-vue.",
        //   deployedLink: "https://followdown.com/",
        //   gitLink: "https://github.com/aftongauntlett/followdown",
        //   image: "followdown2.jpg",
        // },
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
.title {
  padding-top: 40px;
  padding-bottom: 10px;
  font-size: 40px;
  color: #555860;
  border-bottom: 2px rgba(0, 0, 0, 0.301) solid;
  max-width: 40%;
  margin: auto;
}

.projCard {
  text-align: center;
  padding-bottom: 15px;
  margin: 20px;
}
</style>
