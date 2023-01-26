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
  <div class="d-flex flex-column w-100 mx-auto mt-5 pt-5">
    <div
      v-for="author in authors"
      :key="author.id"
      class="card mb-3 mx-auto"
      style="max-width: 800px"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="'src/assets/img/' + 'a' + author.id + '.jpg'"
            class="img-fluid rounded"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ author.nombre }}</h5>
            <p class="card-text">Autor: {{ author.biografia }}</p>
            <p class="card-title">Libros en nuestra editorial:</p>
            <div v-for="libro in author.libros" :key="libro">
              <img
                :src="'src/assets/img/' + libro + '.jpg'"
                class="card-text border rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
