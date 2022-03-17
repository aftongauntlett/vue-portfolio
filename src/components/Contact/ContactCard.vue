<template>
  <div class="d-flex justify-content-center">
    <b-card class="contactCard">
      <Title title="Contact" />
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
            href="https://docs.google.com/document/d/1CkATUVmyFAcupvgI0j2ImEwS4ZSgP-MGnvveLyYhcfk/edit?usp=sharing"
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
</template>

<script>
import Title from "@/components/Title";

export default {
  components: {
    name: "ContactCard",
    Title,
  },
  return: {
    links: [
      { name: "Portfolio", link: "Portfolio" },
      { name: "About", link: "About" },
    ],
  },
};
</script>

<style scoped>
.contactCard {
  text-align: center;
  padding-bottom: 15px;
  margin: 20px;
}

.contactButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.contactButton {
  opacity: 0.8;
  font-size: 16px;
  margin-top: 10px;
  padding-top: 20px;
}

ul {
  list-style: none;
}

.image-box {
  margin-bottom: 20px;
  width: 600px;
}

.image {
  box-shadow: 5px 5px 10px 5px #979da23b;
  max-width: 400px;
}
</style>
