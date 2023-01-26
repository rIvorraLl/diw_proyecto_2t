<script>
export default {
  data() {
    return {
      books: null,
    };
  },
  methods: {
    async fetchData() {
      this.books = null;
      const res = await fetch(`http://localhost:3000/libros`);
      this.books = await res.json();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<template>
  <p v-if="!books">Loading...</p>
  <!-- <pre v-else>{{ books[0].titulo }}</pre> -->
  <div
    class="d-flex flex-row flex-wrap justify-content-between w-75 mx-auto mt-5 pt-5"
  >
    <div
      v-for="book in books"
      :key="book.id"
      class="card mb-3"
      style="max-width: 540px"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="'src/assets/img/' + book.id + '.jpg'"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.titulo }}</h5>
            <p class="card-text">Autor: {{ book.autor }}</p>
            <p class="card-text">Idioma: {{ book.idioma }}</p>
            <p class="card-text">Edición: {{ book.edicion }}</p>
            <p class="card-text">Materia: {{ book.materia }}</p>
            <p class="card-text">Precio: {{ book.precio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
