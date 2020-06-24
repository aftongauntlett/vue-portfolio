<template>
  <div class="contact">
    <Buttons />
    <ContactCard />
  </div>
</template>

<script>
import Buttons from "../components/Contact/Buttons";
import ContactCard from "../components/Contact/ContactCard";
export default {
  name: "Contact",
  components: {
    Buttons,
    ContactCard
  }
};
</script>