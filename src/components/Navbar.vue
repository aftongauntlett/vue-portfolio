<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-navbar-brand :to="{ name: 'Home' }">AFTON GAUNTLETT</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Portfolio' }">PORTFOLIO</b-nav-item>
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
  letter-spacing: 3px;
}

.navbar-nav > li {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
