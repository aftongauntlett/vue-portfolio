<!--<template>-->
<!--  <div class="d-flex justify-content-center mt-5 mb-3">-->
<!--    <div style="max-width: 600px; min-width: 235px" class="w-50">-->
<!--      <b-form @submit="onSubmit" v-if="show">-->
<!--        <b-form-group-->
<!--          id="email-input-group"-->
<!--          label="Email address:"-->
<!--          label-for="email-input"-->
<!--        >-->
<!--          <b-form-input-->
<!--            id="email-input"-->
<!--            v-model="form.email"-->
<!--            type="email"-->
<!--            required-->
<!--            placeholder="Enter email"-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-form-group-->
<!--          id="name-input-group"-->
<!--          label="Your Name:"-->
<!--          label-for="name-input"-->
<!--        >-->
<!--          <b-form-input-->
<!--            id="name-input"-->
<!--            v-model="form.name"-->
<!--            required-->
<!--            placeholder="Enter name"-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-form-group label="Message:" label-for="message-textarea">-->
<!--          <b-form-textarea-->
<!--            id="message-textarea"-->
<!--            v-model="form.message"-->
<!--            placeholder="Let me know what you are looking for..."-->
<!--            rows="8"-->
<!--            max-rows="6"-->
<!--          ></b-form-textarea>-->
<!--        </b-form-group>-->
<!--        <b-button class="pButton" type="submit" variant="dark">Submit</b-button>-->
<!--      </b-form>-->

<!--      <div>-->
<!--        <b-modal id="modal-center" centered title="Thank you!" ok-only>-->
<!--          <p class="notify my-4">I will be in touch shortly.</p>-->
<!--        </b-modal>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        email: "",-->
<!--        name: "",-->
<!--        message: "",-->
<!--      },-->
<!--      show: true,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    onSubmit(evt) {-->
<!--      evt.preventDefault();-->
<!--      axios-->
<!--        .get(-->
<!--          `https://us-central1-gauntlett-design.cloudfunctions.net/sendMail?dest=gauntlet.design@gmail.com&email=${this.form.email}&name=${this.form.name}&message=${this.form.message}`-->
<!--        )-->
<!--        .then(() => {-->
<!--          this.$bvModal.show("modal-center");-->
<!--          this.form = {-->
<!--            email: "",-->
<!--            name: "",-->
<!--            message: "",-->
<!--          };-->
<!--        })-->
<!--        .catch((e) => {-->
<!--          alert(e);-->
<!--        });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.pButton:hover {-->
<!--  transition: all 0.2s ease-in-out;-->
<!--  transform: scale(1.1);-->
<!--}-->

<!--.pButton {-->
<!--  opacity: 0.8;-->
<!--  font-family: "Martel", serif;-->
<!--  font-size: 20px;-->
<!--  padding-left: 15px;-->
<!--  padding-right: 15px;-->
<!--}-->

<!--.notify {-->
<!--  font-family: "Martel", serif;-->
<!--  font-size: 20px;-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->
