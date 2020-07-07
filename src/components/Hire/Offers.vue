<template>
  <div>
    <div class="container d-flex justify-content-center offers slow">
      <div class="row w-500b-5">
        <div v-for="item in Offers" :key="item">
          <div class="hireTitle pt-3">
            <strong>{{item.title}}</strong>
          </div>
          <div class="description">{{item.description}}</div>
        </div>
      </div>
    </div>
    <Form />
  </div>
</template>

<script>
import Form from "./Form";
export default {
  data() {
    return {
      Offers: [
        {
          title: "Analytics",
          description:
            "I will provide analytics powered by Google, to help you better understand your customer base. "
        },
        {
          title: "SEO",
          description:
            "I will provide Search Engine Optimization, to help your customers find you on various search engines like Google."
        },
        {
          title: "Personal Updates",
          description:
            "Hands off website, you send your updates to me and I take care of them for you."
        },
        {
          title: "Customer Service",
          description:
            "I am always available to answer your questions, there are no automated messages or wait times to get in touch with me!"
        },
        {
          title: "Hosting",
          description:
            "I will host your website using Cloud Services, for upmost reliability."
        }
      ]
    };
  },
  components: {
    Form
  }
};
</script>

<style scoped>
.offers {
  text-align: left;
  line-height: 200%;
  color: rgb(46, 40, 40);
  padding-top: 35px;
}

.hireTitle:hover {
  font-size: 20px;
}

.hireTitle {
  font-size: 18px;
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