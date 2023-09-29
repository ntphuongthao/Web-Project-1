<template>
  <div class="grid-container">
    <div v-for="merch in merchList" :key="merch.id">
      <div class="card" style="width: 18rem;">
        <img :src="merch.image" class="card-img-top" :alt="merch.title">
        <div class="card-body">
          <h2>{{merch.title}}</h2>
          <p class="card-text">{{merch.description}}</p>
        </div>
      </div>  
    </div>
  </div>
  <br/>
</template>

<script>
import { merch } from "../../server/merch.js";

export default {
  name: "Merch",
  data() {
    return {
      merchList: merch,
    }
  },
}
</script>

<style scoped>
.grid-container {
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
</style>