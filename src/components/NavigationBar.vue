<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/depauw.jpeg" alt="DePauw Logo">
        DePauw Merch Deals
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
}
</script>

<style scoped>
.logo {
  background: white;
  height: 50px;
  width: 50px;
  object-fit: cover;
  margin: 2px;
  /* padding: 8px; */
  border: 2px solid black;
  border-radius: 50%;
}
</style>
