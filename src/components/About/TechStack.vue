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
        "Vue",
        "React",
        "CSS",
        "Bootstrap",
        "jQuery",
        "JavaScript",
        "PHP",
        "WordPress",
        "Adobe XD",
        "Responsive Design",
        "Prototyping",
        "Wireframing",
        "Node",
        "GIT",
        "HTML",
        "508c",
      ]
    };
  }
};
</script>

<style scoped>
.techStack {
  line-height: 200%;
  color: rgb(46, 40, 40);
  padding-top: 20px;
}

.light {
  color: #fff;
}
</style>
