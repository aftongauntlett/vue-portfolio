<template>
  <div class="container d-flex justify-content-center techStack">
    <div class="row w-500b-5">
      <div
        class="col-12 col-md-6 sm-6"
        v-for="item in techStack"
        :class="{ light }"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "techStack",
  props: {
    light: {
      type: Boolean,
    },
  },
  data() {
    return {
      techStack: [
        "Vue",
        "CSS/SASS/SCSS",
        "React",
        "Bootstrap",
        "Angular",
        "Material Design",
        "Typescript",
        "Responsive Design",
        "JavaScript",
        "Wireframing",
        "PHP",
        "Adobe XD",
        "Node",
        "508c",
        "HTML",
        "Github",
        "GIT",
        "Gitlabs",
      ],
    };
  },
};
</script>

<style scoped>
.techStack {
  line-height: 200%;
  color: rgb(115, 118, 124);
  padding-top: 20px;
}

.light {
  color: #bebec3 !important;
}
</style>
