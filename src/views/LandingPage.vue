<script setup>
import BookCarousel from "../components/BookCarousel.vue";
</script>
<template>
  <div class="div-img pt-5 mt-5">
    <div
      class="div-img__txt position-absolute top-50 start-50 p-5 border-success rounded-4 border-opacity-10"
    >
      <img src="../assets/img/logoCircleAlpha.png" class="m-auto w-50" alt="" />
      <h1>Una editorial extraña para lectores extraños</h1>
    </div>
  </div>
  <BookCarousel></BookCarousel>
</template>
<style scoped>
.div-img__txt {
  background-color: rgba(40, 143, 240, 0.5);
  transform: translate(-50%, -50%);
}
.div-img {
  background-image: url("src/assets/img/bg1.jpg");
  background-size: cover;
  height: 100vh;
}
</style>
