<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{name: 'Home'}">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'About'}">About Me</b-nav-item>
        <b-nav-item :to="{name: 'Portfolio'}">Portfolio</b-nav-item>
        <b-nav-item :to="{name: 'Contact'}">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  font-size: 20px;
}
</style>