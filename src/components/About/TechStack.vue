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
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "UI/UX Design",
        "Adobe XD",
        "Wireframes",
        "Responsive Design",
        "508c",
        "Google Analytics",
        "Google Firebase",
        "Express",
        "JSX",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "Mongoose",
        "Node",
        "GIT",
        "API's",
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