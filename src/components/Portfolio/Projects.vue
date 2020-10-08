<template>
  <div>
  <div class="container">
    <p class="slow title">Projects</p>
    <div class="d-flex justify-content-center flex-wrap">
      <Project v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </div>

  <div class="container">
    <p class="slow title">Wireframes</p>
    <div class="d-flex justify-content-center flex-wrap">
      <Wireframe v-for="wireframe in wireframes" :key="wireframe.title" :wireframe="wireframe" />
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
          title: "MAGStock 2020",
          description:
            "Designed, deployed and maintained for MAGFest, Inc. A local non-profit gaming festival. Featuring HTML, CSS, Bootstrap, JavaScript and utilizes FTP deploy on commit to master from Github.",
          deployedLink: "https://magstock.org/",
          gitLink: "https://github.com/aftongauntlett/MAGStock2020",
          image: "magstock.jpg"
        },
        {
          title: "MAGFest Mobile App",
          description:
                  "Designed using Adobe XD, built with React Native using Firebase for the backend. This app is a personal project using MAGFest's API's to streamline their volunteer/staff sign ups during event. This also allows attendees to stay updated on MAGFest's activities throughout the year. The API allows staff to sign up for shifts, check into shifts and remove shifts.",
          deployedLink: "",
          gitLink: "",
          image: "magfestapp.jpg"
        },
        {
          title: "East Central Countertops",
          description:
                  "Designed and built for East Central Countertops, a contractor company located in Mora, Minnesota. Built using Vue and hosted with Firebase.",
          deployedLink: "https://east-central-countertops.web.app/#/",
          gitLink: "https://github.com/aftongauntlett/east-central-countertops",
          image: "eastcentral.jpg"
        },
        {
          title: "Touch Therapeutic Massage",
          description:
                  "Designed and built for a local Massage Therapist. Wireframing and Design built using Adobe XD, Backend and Hosting provided by Firebase, Frontend built using Vue.",
          deployedLink: "https://touchtherapeutic.com",
          gitLink: "https://github.com/aftongauntlett/touchtherapeutic",
          image: "touch.jpg"
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
      wireframes: [
        {
          title: "MAGFest App",
          description:
                  "Designed with Adobe XD, Built using React Native and hosted through Firebase.",
          gitLink: "https://xd.adobe.com/view/d9b2c7ca-4481-4c32-a534-47b7c7a3cbb1-8ce1/?fullscreen",
          image: "magfestapp.jpg"
        },
        {
          title: "Follow|Down",
          description:
                  "Designed using Adobe XD, built with Vue and hosted through Firebase. This was a personal project for learning purposes.",
          gitLink: "https://xd.adobe.com/view/88b629f5-e890-4c06-996b-cc6dd18baff1-dde5/?fullscreen",
          image: "followdown3.jpg"
        },
        {
          title: "Discouter App",
          description:
                  "Designed for Discouter, an Australian based discount app for local shops and restaurants. Designed with Adobe XD.",
          gitLink: "https://xd.adobe.com/view/36120946-2313-4e6e-90aa-61ff00812172-6341/?fullscreen",
          image: "discouter.jpg"
        },
        {
          title: "Touch Therapeutic Massage",
          description:
                  "Designed for Touch Therapeutic, a local massage therapist. Designed with Adobe XD.",
          gitLink: "https://xd.adobe.com/view/8fb85d8f-7363-498a-901e-1b2ffbd6e616-daeb/?fullscreen\n",
          image: "touch.jpg"
        },


      ]
    };
  },

  components: {
    Wireframe,
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
