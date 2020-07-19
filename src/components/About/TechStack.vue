<template>
  <div class="container d-flex justify-content-center techStack">
    <div class="row w-500b-5">
      <div class="col-12 col-md-6 sm-6" v-for="item in techStack" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        "Vue",
        "React",
        "JSX",
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "UI/UX Design",
        "AdobeXD",
        "Wireframing",
        "Responsive Design",
        "508c",
        "SEO",
        "Google Analytics",
        "Google Firebase",
        "Express",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "Mongoose",
        "Node",
        "GIT",
        "Es6+"
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
</style>