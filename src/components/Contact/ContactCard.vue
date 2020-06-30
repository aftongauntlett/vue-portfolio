<template>
  <div class="slow contact d-flex justify-content-center">
    <div>
      <b-card title="Contact Me" tag="article" style="max-width: 30rem;" class="contactCard">
        <b-card-img class="image" :src="require('./me2.jpg')" />
        <ul class="list-group list-group-flush">
          <li class="contactCard contactButton">
            <a href="https://github.com/aftongauntlett" target="_blank">
              <i class="fa fa-github fa-2x text-dark"></i>
            </a>
            <br />
            <a href="https://github.com/aftongauntlett" target="_blank" class="card-link">GitHub</a>
          </li>

          <li class="contactCard contactButton">
            <a href="https://www.linkedin.com/in/afton-gauntlett/" target="_blank">
              <i class="fa fa-linkedin-square fa-2x text-dark"></i>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/afton-gauntlett/"
              target="_blank"
              class="card-link"
            >LinkedIn</a>
          </li>

          <li class="contactCard contactButton">
            <a href="mailto:afton.gauntlett@gmail.com">
              <i class="fa fa-envelope fa-2x text-dark"></i>
            </a>
            <br />
            <a href="mailto:afton.gauntlett@gmail.com" class="card-link">Email Me</a>
          </li>

          <li class="contactCard contactButton">
            <a
              href="https://docs.google.com/document/d/1O-rDsK4FOX6Z6lNFCyEoDHJJsA_Pt4oxsKerejP3Wj4/edit?usp=sharing"
              target="_blank"
            >
              <i class="fa fa-file fa-2x text-dark"></i>
              <br />View Resume
            </a>
          </li>
        </ul>

        <b-button
          class="aboutButton mx-2 mt-5"
          variant="dark"
          v-for="link in links"
          s
          :key="link.link"
          :to="{name:
      link.link}"
        >{{link.name}}</b-button>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
.contactCard {
  text-align: center;
  padding: 20px;
  margin: 40px;
  font-family: "Martel", serif;
  background-color: rgb(226, 223, 223);
}

.card-title {
  border-bottom: 2px solid rgba(210, 204, 218, 0.514);
  font-family: "Martel", serif;
  font-size: 25px;
  color: rgb(46, 40, 40);
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.contactButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  font-family: "Martel", serif;
}

.contactButton {
  opacity: 85%;
  font-family: "Martel", serif;
  font-size: 20px;
  margin: 5px;
  padding: 10px;
}

.aboutButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
  font-family: "Martel", serif;
}

.aboutButton {
  opacity: 80%;
  font-family: "Martel", serif;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
}

ul {
  list-style: none;
}

.image {
  padding: 20px;
  border-radius: 25px;
}

.slow {
  animation: slow 0.5s ease forwards;
}

@keyframes slow {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Portfolio", link: "Portfolio" },
        { name: "About Me", link: "About" }
      ]
    };
  }
};
</script>
