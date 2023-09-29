<template>
  <header class="header">
    <div class="header-content">
        <h1 class="bordered-text">Howdy Tigers !!!</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.header {
  background-image: url('../assets/depauw-background.jpeg'); 
  background-position: center;
  text-align: center;
  color: black;
  padding: 40px 0; 
}

.header::before {
  content: "";
}

/* Style the header text */
.header-content h1 {
  font-size: 60px;
  font-weight: bold;
  margin: 0;
}

.bordered-text {
  border: 2px solid white;
  background: white;
  display: inline-block;
  padding: 10px 20px;
}
</style>
