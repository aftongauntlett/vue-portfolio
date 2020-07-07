<template>
  <div class="d-flex justify-content-center mt-5 mb-3">
    <div style="max-width: 600px" class="w-50">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="email-input-group" label="Email address:" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="name-input-group" label="Your Name:" label-for="name-input">
          <b-form-input id="name-input" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group label="Message:" label-for="message-textarea">
          <b-form-textarea
            id="message-textarea"
            v-model="form.message"
            placeholder="Let me know what you are looking for..."
            rows="8"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-button class="pButton" type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>


<style scoped>
.pButton:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}
</style>

