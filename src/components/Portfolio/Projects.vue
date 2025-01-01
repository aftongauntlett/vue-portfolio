<template>
  <div class="d-flex justify-content-center">
    <b-card class="projCard">
      <h2 class="main-title">PROJECTS</h2>
      <div class="info">
        These projects are a reflection of my personal learning and hobbies. Due to confidentiality agreements, my professional projects are not available for public viewing. 
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
            "I founded and managed Gauntlet Designs, LLC from June 2020 to January 2025, overseeing all aspects of business operations, including design, development, deployment, client engagement, and profitability. I was responsible for shaping the organizational structure and defining product expectations to ensure strong client relationships. I utilized a variety of technology stacks, including Vue, React, Next.js, Google Firebase, Vercel, Tanstack, Tailwind CSS, Bootstrap, and Supabase.",
          gitLink: "https://github.com/aftongauntlett/gauntlet-designs-react",
          image: "gauntletdesigns.png",
        },

        {
          title: "Catster",
          description:
            "Catster is an interactive application developed to showcase my front-end development skills. As the sole developer, I designed and implemented the app, which pulls images of cats from an external API and allows users to interact by clicking on the images. Based on the interaction, the app randomly determines whether the cat 'likes' you, keeping track of successful interactions. Additionally, I integrated a dropdown menu that enables users to select different cat breeds, with breed data fetched from a separate API. The app demonstrates my proficiency with React, API integration, and dynamic user interactions",
          gitLink: "https://github.com/aftongauntlett/Catster",
          image: "catster.png",
        },
        {
          title: "Evocate",
          description:
            "Evocate is a full-stack card-matching game developed to demonstrate our collective knowledge. As the team lead, I coordinated a team of four and was responsible for setting up Trello for project management and guiding the team on best practices for using Git. The app, built with React, MySQL, Sequelize, HTML/CSS/JS, and Node.js, emphasizes memory testing and team collaboration. We focused on effective team-building and version control practices using Trello, Git, and GitHub.",
          gitLink: "https://github.com/aftongauntlett/evocate",
          image: "evocate.jpg",
        },
        {
          title: "Questival",
          description:
            "Questival is a full-stack application developed to connect event attendees with personalized experiences based on their interests. As the team lead, I managed a team of four and played a key role in implementing Express and coordinating project workflows. The app, built with Node.js, Express, and MySQL, showcases our expertise in back-end development. We emphasized effective team collaboration and version control using Trello, Git, and GitHub.",
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
  text-align: left;
  padding-bottom: 15px;
  margin: 20px;
}
</style>
