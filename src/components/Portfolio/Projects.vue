<template>
  <div class="container">
    <p class="slow title">Completed Projects</p>
    <div class="d-flex justify-content-center flex-wrap">
      <Project v-for="project in projects" :key="project.title" :project="project" />
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
          title: "East Central Countertops",
          description:
            "Designed and built for East Central Countertops using Vue and hosted with Firebase.",
          deployedLink: "https://east-central-countertops.web.app/#/",
          gitLink: "https://github.com/aftongauntlett/east-central-countertops",
          image: "eastcentral.jpg"
        },
        {
          title: "MAGStock 2020",
          description:
            "Designed, deployed and maintained for MAGFest, Inc. A local non-profit gaming festival. I am an active contributer on other developmental projects for MAGFest, Inc.",
          deployedLink: "https://magstock.org/",
          gitLink: "https://github.com/aftongauntlett/MAGStock2020",
          image: "magstock.jpg"
        },
        {
          title: "Evocate",
          description:
            "Created to showcase knowledge in full-stack development. Evocate is a card matching game to test your memory. This app features: React, MySQL, Sequelize, HTML/CSS/JS and Node.",
          deployedLink: "https://aftongauntlett.github.io/evocate-public/#/",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg"
        },
        {
          title: "Questival",
          description:
            "Created to showcase knowledge with Express. Questival is designed to connect fellow attendees with events that are tailored to their own personal interests. This app features: Node.js, Express and MySQL.",
          deployedLink: "https://questival.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Questival",
          image: "questival.jpg"
        },
        {
          title: "Catster",
          description:
            "Created to showcase knowledge with React using API calls and React Bootstrap. Application's UI is separated into components that are able to manage component state and respond to events.",
          deployedLink: "https://catster.aftongauntlett.com/#/",
          gitLink: "https://github.com/aftongauntlett/Catster",
          image: "catster.jpg"
        },
        {
          title: "Weather Dashboard",
          description:
            "Created to showcase knowledge with APIs. Weather dashboard that features dynamically updated HTML and CSS, this app retrieves data from a third party API.",
          deployedLink: "https://aftongauntlett.github.io/weather-dashboard/",
          gitLink: "https://github.com/aftongauntlett/weather-dashboard",
          image: "weather.jpg"
        },
        {
          title: "Star Trek Quiz",
          description:
            "Created to showcase knowledge with HTML, CSS and JS. Star Trek quiz featuring dynamically updated HTML and CSS powered by JavaScript.",
          deployedLink: "https://aftongauntlett.github.io/star-trek-quiz/",
          gitLink: "https://github.com/aftongauntlett/star-trek-quiz",
          image: "startrek.jpg"
        }
      ]
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
