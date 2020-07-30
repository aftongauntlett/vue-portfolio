<template>
  <div class="slow contact d-flex justify-content-center">
    <div>
      <b-card
        title="Contact Me"
        tag="article"
        style="max-width: 30rem;"
        class="contactCard card"
      >
        <div class="dropDown">
          <b-card-img class="image" :src="require('./me2.jpg')" />
          <div class="overlay">
            <!-- <div class="text">Hello!</div> -->
          </div>
        </div>

        <ul class="list-group list-group-flush">
          <li class="contactCard contactButton">
            <a href="https://github.com/aftongauntlett" target="_blank">
              <i class="fa fa-github fa-2x text-dark"></i>
            </a>
            <br />
            <a
              href="https://github.com/aftongauntlett"
              target="_blank"
              class="card-link"
              >GitHub</a
            >
          </li>

          <li class="contactCard contactButton">
            <a
              href="https://www.linkedin.com/in/afton-gauntlett/"
              target="_blank"
            >
              <i class="fa fa-linkedin-square fa-2x text-dark"></i>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/afton-gauntlett/"
              target="_blank"
              class="card-link"
              >LinkedIn</a
            >
          </li>

          <li class="contactCard contactButton">
            <a href="mailto:afton.gauntlett@gmail.com">
              <i class="fa fa-envelope fa-2x text-dark"></i>
            </a>
            <br />
            <a href="mailto:afton.gauntlett@gmail.com" class="card-link"
              >Email Me</a
            >
          </li>

          <li class="contactCard contactButton">
            <a
              class="card-link"
              href="https://docs.google.com/document/d/14VzlSZ4m5wphZyg0TUCJDvdQAe6lHn8Nb5GLKpa_MQA/edit?usp=sharing"
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
          :to="{ name: link.link }"
          >{{ link.name }}</b-button
        >
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
}

.card-link {
  font-size: 18px;
}

.card-title {
  border-bottom: 2px solid rgba(109, 108, 110, 0.514);
  font-family: "Martel", serif;
  font-size: 35px;
  color: #2c3e50;
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
  opacity: 0.8;
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
  opacity: 0.8;
  font-family: "Martel", serif;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
}

/* animation */

/* .text {
  color: white;
  font-family: "Martel", serif;
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #8a94b49f;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.dropDown:hover .overlay {
  bottom: 0;
  height: 100%;
} */

/* end */

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
    opacity: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Portfolio", link: "Portfolio" },
        { name: "About", link: "About" },
        { name: "Hire", link: "Hire" },
      ],
    };
  },
};
</script>
