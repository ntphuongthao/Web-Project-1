<template>
  <div class="grid-container">
    <div class="merch-container" v-for="merch in merchList" :key="merch.id">
      <div class="card" style="width: 18rem;">
        <img :src="merch.image" class="card-img-top" :alt="merch.title">
        <div class="card-body">
          <h2>{{merch.title}}</h2>
          <p class="card-text">{{merch.description}}</p>
        </div>
      </div>  
      <div class="comment-list">
        <div v-for="comment in merch.comments" :key="comment">
          <div class="comment">
            <img class="user-profile" src="../assets/anonymous-user.jpeg" alt="Anonymous User">
            <p style="text-align: left;">{{ comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
</template>

<script>
import { merch } from "../../server/data.js";

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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}

.merch-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 5px;
}

.user-profile {
  width: 40px;
}

.comment {
  display: grid;
  grid-template-columns: 1fr 8fr;
}
</style>