<script>
export default {
  data() {
    return {
      authors: [],
    };
  },
  methods: {
    async fetchAuthors() {
      fetch(`http://localhost:3000/autores`)
        .then((response) => response.json())
        .then((data) => (this.authors = data));

      //   this.authors = await getAuthors.json();
    },
  },
  mounted() {
    this.fetchAuthors();
  },
};
</script>

<template>
  <p v-if="!authors">Loading...</p>
  <div class="pt-5">
    <div v-for="author in authors" :key="author.id">
      <div class="card row mt-5 pb-5 pl-2 pr-2 maxw mx-auto">
        <div class="d-flex mt-3">
          <img
            :src="'src/assets/img/' + 'a' + author.id + '.jpg'"
            class="img-fluid rounded-circle mx-5 author-img"
            alt="..."
          />
          <div class="col-md-8">
            <h5 class="card-title">{{ author.nombre }}</h5>
            <p class="card-text">Autor: {{ author.biografia }}</p>
          </div>
        </div>
        <p class="fw-bold">Libros en nuestra editorial:</p>
        <div class="d-flex justify-content-evenly">
          <div v-for="libro in author.libros" :key="libro">
            <img
              :src="'src/assets/img/' + libro + '.jpg'"
              class="border rounded w-50"
              alt=""
            />
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-img {
  max-height: 150px;
}
.block {
  margin-bottom: 10vh;
}
.maxw {
  max-width: 900px;
}
</style>
