<template>
  <div class="container">
    <form @submit.prevent="signUp">
      <h2 class="form-title">Sign Up</h2>
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Username" required v-model="username">
      </div>
      <div class="mb-3">
        <input class="form-control" type="email" placeholder="Email" required v-model="email">
      </div>
      <div class="mb-3">
        <input class="form-control" type="password" placeholder="Password" required v-model="password">
      </div>
      <div id="passwordHelpBlock" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
      <button type="submit" class="submit-btn btn btn-warning">Submit</button>
    </form>
  </div>
</template>


<script>
import { auth } from "../../Firebase/init.js";
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "SignUpForm",
  emits: ['loggedIn'],
  data() {
    return {
      username: "",
      email: "",
      password: "",
    }
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: this.username,
        });
        const user = userCredential.user;
        this.$emit("loggedIn");
        alert(`You have successfully created an account with email ${user.email}!`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Something is wrong: ${errorMessage}!`);
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