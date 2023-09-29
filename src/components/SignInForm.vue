<template>
  <div class="container">
    <form @submit.prevent="signIn">
      <h2 class="form-title">Sign into your Account</h2>
      <div class="mb-3">
        <input class="form-control" type="email" placeholder="Email" required v-model="email">
      </div>
      <div class="mb-3">
        <input class="form-control" type="password" placeholder="Password" required v-model="password">
      </div>

      <button type="submit" class="submit-btn btn btn-dark">Log In</button>
    </form>
  </div>
</template>

<script>
import { auth } from "../../Firebase/init.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "SignInForm",
  emit: ['loggedIn'],
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        this.$emit('loggedIn');
        alert(`Successfully Logged In! ${userCredential.user.email}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Something is wrong when trying to log in: ${errorMessage}!`);
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
  width: 30%;
  border: 2px solid black;
  border-radius: 10px;
  /* background: white; */
}

.form-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 2rem;
}

.submit-btn {
  margin: 2rem;
}
</style>