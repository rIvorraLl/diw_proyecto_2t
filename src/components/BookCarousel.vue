<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide carousel-fade"
    data-bs-ride="ride"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="../assets/img/01c.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="../assets/img/02c.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="../assets/img/03c.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
