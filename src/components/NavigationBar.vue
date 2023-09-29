<template>
  <nav class="nav-container navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/depauw.jpeg" alt="DePauw Logo">
        DePauw Merch Deals
      </a>
    </div>
    <div v-if="isLoggedIn">
      <button type="button" class="sign-out-btn btn btn-danger" @click="signUserOut">Sign out</button>
    </div>
  </nav>
</template>

<script>
import { auth } from "../../Firebase/init.js";
import { signOut } from "firebase/auth";

export default {
  name: "NavigationBar",
  props: ['isLoggedIn'],
  methods: {
    signUserOut() {
      signOut(auth).then(
        () => this.isLoggedIn = false
      ).catch((err) => console.log(`Something is wrong when trying to log out: ${err.message}!`));
    }
  }
}
</script>

<style scoped>
.nav-container {
  justify-content: space-between;
}

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

.sign-out-btn {
  width: 100px;
  margin: 1rem;
}
</style>
