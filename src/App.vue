<template>
  <Header />
  <NavigationBar />
  <div v-if="!isLoggedIn">
    <br><br>
    <button type="button" class="btn btn-dark" @click="showLogIn=!showLogIn">Show {{showLogIn ? "Sign Up" : "Sign In"}} Form</button>
    <div v-if="showLogIn">
      <SignInForm @loggedIn="isLoggedIn=true"/>
    </div>
    <div v-else>
      <SignUpForm @loggedIn="isLoggedIn=true"/>
    </div>
  </div>
  <div v-else>
    <h2 style="margin-top: 2rem;">Welcome {{displayName}} to the website!</h2>
    <button type="button" class="btn btn-dark" @click="signUserOut">Sign out</button>
  </div>
  
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
import SignUpForm from './components/SignUpForm.vue'
import SignInForm from './components/SignInForm.vue'
import { auth } from "../Firebase/init.js";
import { signOut } from "firebase/auth";

export default {
  name: 'App',
  components: {
    Header,
    NavigationBar,
    Footer,
    SignUpForm,
    SignInForm,
  },
  data() {
    return {
      isLoggedIn: false,
      showLogIn: false,
      displayName: "Thao",
    }
  },
  beforeUpdate() {
    const user = auth.currentUser;
    if (user) {
      console.log('testing he');
      console.log(user);
      if (user.displayName)
        this.displayName = user.displayName;
      else
        this.displayName = "Anonymous";
    }
  },
  methods: {
    signUserOut() {
      signOut(auth).then(
        () => this.isLoggedIn = false
      ).catch((err) => console.log(`Something is wrong when trying to log out: ${err.message}!`));
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body, html {
    margin: 0;
    padding: 0;
    height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
