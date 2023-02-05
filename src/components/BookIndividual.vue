<script>
export default {
  data() {
    return {
      book: [],
    };
  },
  methods: {
    async fetchBook() {
      const res = await fetch(
        `http://localhost:3000/libros/${this.$route.params.id}`
      );
      this.book = await res.json();
      console.log(this.book);
    },
  },
  mounted() {
    this.fetchBook();
  },
};
</script>
<template>
  <p v-if="!book">Loading...</p>
  <div class="pt-5">
    <div class="card row mt-5 pb-5 maxw mx-auto">
      <div class="d-flex mt-3">
        <img
          :src="'../src/assets/img/' + book.id + '.jpg'"
          class="img-fluid rounded me-5 book-img"
        />
        <div class="col-md-8">
          <h5 class="card-title">{{ book.titulo }}</h5>
          <p class="card-text">Autor: {{ book.autor }}</p>
          <p class="card-text">Idioma: {{ book.idioma }}</p>
          <p class="card-text">Edición: {{ book.edicion }}</p>
          <p class="card-text">Precio: {{ book.precio }}</p>
        </div>
      </div>
      <div class="d-flex"></div>
      <p class="fw-bold">Descripción:</p>
      <p class="card-text"><span v-html="book.descripcion"></span></p>
      <div class="book-img">
        <span class="badge text-bg-info card-text">{{ book.materia }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-img {
  max-height: 150px;
}
.maxw {
  max-width: 900px;
}
</style>
