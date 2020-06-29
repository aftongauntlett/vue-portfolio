<template>
  <div class="container d-flex justify-content-center techStack">
    <div class="row w-50 pb-5">
      <div class="col-12 col-md-6" v-for="item in techStack" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "Vue",
        "React",
        "Expres",
        "JSX",
        "Node",
        "Bootstrap",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "Mongoose",
        "GIT",
        "API's",
        "Heroku",
        "Es6+",
        "508c",
        "Amazon Firebase",
        "Responsive Design",
        "Jira"
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}

.techStack {
  line-height: 200%;
  color: rgb(0, 0, 0);
  padding-top: 35px;
}
</style>