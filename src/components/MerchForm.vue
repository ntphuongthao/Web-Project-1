<template>
  <form class="container">
    <input class="form-control" type="text" id="title" name="title" required placeholder="Title">
    <br>

    <textarea class="form-control" id="description" name="description" rows="4" cols="50" placeholder="Description goes here..."></textarea>
    <br>

    <input class="form-control" type="file" id="image" name="image" accept="image/*">
    <br>
    <input class="btn btn-dark" type="submit" value="Submit">
  </form>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"; 

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
    addMerch: async () => {
      try {
        const docRef = await addDoc(collection(db, "merch"), {
          title: this.title,
          description: this.description,
          image: this.image,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e.message);
      } 
    }
  }
}
</script>

<style scoped>
.container {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 2rem;
  margin-top: 2rem;
  width: 50%;
  border: 2px solid black;
  border-radius: 10px;
  /* background: white; */
}
</style>