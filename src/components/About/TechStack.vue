<template>
  <div class="container d-flex justify-content-center techStack">
    <div class="row w-500b-5">
      <div class="col-12 col-md-6 sm-6" v-for="item in techStack" :class="{light}" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "techStack",
  props: {
    light: {
      type: Boolean
    }
  },
  data() {
    return {
      techStack: [
        "React",
        "CSS",
        "React Native",
        "Bootstrap",
        "Vue",
        "Adobe XD",
        "Python",
        "Figma",
        "JavaScript",
        "Axure",
        "jQuery",
        "WordPress",
        "Firebase",
        "PHP",
        "Responsive Design",
        "Node",
        "Wireframing",
        "GIT",
        "Prototyping",
        "HTML",
        "508c",
        "Jest",
      ]
    };
  }
};
</script>

<style scoped>
.techStack {
  line-height: 200%;
  color: rgb(46, 40, 40);
  padding-top: 35px;
}

.light {
  color: #fff;
}
</style>
