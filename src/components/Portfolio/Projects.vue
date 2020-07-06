<template>
  <div class="container">
    <p class="slow title">Completed Projects</p>
    <div class="d-flex justify-content-center flex-wrap">
      <Project
        v-for="project in projects"
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
          title: "MAGStock 2020",
          description:
            "Designed, deployed and maintained for MAGFest, Inc. A local non-profit gaming festival. I am an active contributer on other developmental projects for MAGFest, Inc.",
          deployedLink: "https://magstock.org/",
          gitLink: "https://github.com/aftongauntlett/MAGStock2020",
          image: "magstock.jpg",
        },
        {
          title: "Evocate",
          description:
            "Created to showcase knowledge in full-stack development. Evocate is a card matching game to test your memory. This app features: React, MySQL, Sequelize, HTML/CSS/JS and Node.",
          deployedLink: "https://aftongauntlett.github.io/evocate-public/#/",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg",
        },
        {
          title: "Questival",
          description:
            "Created to showcase knowledge with Express. Questival is designed to connect fellow attendees with events that are tailored to their own personal interests. This app features: Node.js, Express and MySQL.",
          deployedLink: "https://questival.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Questival",
          image: "questival.jpg",
        },
        {
          title: "Catster",
          description:
            "Created to showcase knowledge with React using API calls and React Bootstrap. Application's UI is separated into components that are able to manage component state and respond to events.",
          deployedLink: "https://catster.aftongauntlett.com/#/",
          gitLink: "https://github.com/aftongauntlett/Catster",
          image: "catster.jpg",
        },
        {
          title: "Pet-A-Cat",
          description:
            "Created to showcase knowledge in Node Express with MySQL as database and Handlebars to serve the HTML page.",
          deployedLink: "https://pet-a-cat.herokuapp.com/",
          gitLink: "https://github.com/aftongauntlett/Pet-A-Cat",
          image: "petakitty.jpg",
        },
        {
          title: "Weather Dashboard",
          description:
            "Created to showcase knowledge with APIs. Weather dashboard that features dynamically updated HTML and CSS, this app retrieves data from a third party API.",
          deployedLink: "https://aftongauntlett.github.io/weather-dashboard/",
          gitLink: "https://github.com/aftongauntlett/weather-dashboard",
          image: "weather.jpg",
        },
        {
          title: "Star Trek Quiz",
          description:
            "Created to showcase knowledge with HTML, CSS and JS. Star Trek quiz featuring dynamically updated HTML and CSS powered by JavaScript.",
          deployedLink: "https://aftongauntlett.github.io/star-trek-quiz/",
          gitLink: "https://github.com/aftongauntlett/star-trek-quiz",
          image: "startrek.jpg",
        },
      ],
    };
  },

  components: {
    Project,
  },
};
</script>

<style scoped>
.title {
  padding-top: 25px;
  font-size: 60px;
  color: rgba(241, 240, 240, 0.897);
}
</style>
