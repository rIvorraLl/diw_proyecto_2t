<script>
export default {
  data() {
    return {
      selected: "",
      text: "",
      message:
        "<p class = 'form-control text-danger'>¿Está seguro de que desea eliminar este libro? Se perderán todos los datos.</p>",
      visibility: true,
    };
  },
  methods: {
    async deleteData() {
      await fetch(`http://localhost:3000/libros/${this.$route.params.id}`, {
        method: "DELETE",
      }).then((response) => response.json());
      this.message =
        "<p class = 'form-control text-success'>Libro eliminado.</p>";
      this.visibility = false;
    },
  },
};
</script>
<template>
  <section class="vh-100 mt-5">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form
            @submit.prevent
            class="mx-auto row gy-2 gx-3 align-items-center"
          >
            <div v-html="message"></div>
            <div class="col-auto">
              <button
                @click="deleteData"
                class="btn btn-primary mb-2"
                v-show="visibility"
              >
                Eliminar
              </button>
            </div>
            <div>
              <button class="btn btn-primary">
                <router-link class="text-light" :to="`/admin`"
                  >Volver a la vista de libros</router-link
                >
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="../assets/img/undraw_warning.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
