<template>
  <form class="container" @submit.prevent="addMerch">
    <input class="form-control" type="text" id="title" name="title" required placeholder="Title" v-model="title">
    <br>
    <textarea class="form-control" id="description" name="description" rows="4" cols="50" placeholder="Description goes here..." v-model="description"></textarea>
    <br>
    <input class="form-control" type="file" id="image" name="image" accept="image/*">
    <br>
    <input class="btn btn-dark" type="submit" value="Submit">
  </form>
</template>

<script>
import {
  collection, 
  addDoc
} from "firebase/firestore"; 
import { db } from "../../Firebase/init.js"

export default {
  name: "MerchForm",
  data() {
    return {
      title: "",
      description: "",
      image: "",
    }
  },
  methods: {
    async addMerch() {
      try {
        const merchData = {
          title: this.title,
          description: this.description,
          image: this.image || "No Image",
        };
        
        if (!title || !description) {
          throw new Error("No title or description provided!");
        }

        const docRef = await addDoc(collection(db, "merch"), merchData);

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e.message);
      } 
    }
  },
}
</script>

<style scoped>
.container {
  padding: 2rem;
  margin-top: 2rem;
  width: 50%;
  border: 2px solid black;
  border-radius: 10px;
}
</style>