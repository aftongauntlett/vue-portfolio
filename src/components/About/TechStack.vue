<template>
  <container>
    <div class="d-flex justify-content-center techStack mx-auto pt-5">
      <div class="row">
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
  </container>
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
        "JavaScript/Typescript",
        "HTML/CSS/SASS",
        "React",
        "Responsive Design",
        "Angular",
        "Bootstrap",
        "Next",
        "Material Design",
        "Vue",
        "Tailwind",
        "Tanstack",
        "508c",
        "Node",
        "Figma",
        "Postgres",
        "Jira",
        "Version Control",
        "Confluence",
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
  width: 100%;
  max-width: 600px;
}

.light {
  color: #bebec3 !important;
}
</style>
