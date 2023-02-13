<script>
export default {
  data() {
    return {
      jsonContent: "",
      titulo: "",
      autor: "",
      idioma: "",
      edicion: "",
      coleccion: "",
      materia: "",
      precio: "",
      descripcion: "",
      bookData: "",
      message: "",
      visibility: false,
    };
  },
  methods: {
    async createBook() {
      this.bookData = JSON.stringify({
        titulo: this.titulo,
        autor: this.autor,
        idioma: this.idioma,
        edicion: this.edicion,
        coleccion: this.coleccion,
        materia: this.materia,
        precio: this.precio,
        descripcion: this.descripcion,
      });
      await fetch("http://localhost:3000/libros/", {
        method: "POST",
        body: `${this.bookData}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .catch((error) => console.error("Error: ", error))
        .then((response) => response.json())
        .then((this.message = `<p>Libro creado</p>`))
        .then((this.visibility = true));
    },
    getCookie() {
      const name = "loginOk=";
      const decoded = decodeURIComponent(document.cookie);
      const ca = decoded.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    redirect() {
      if (this.getCookie() == "") {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.getCookie();
    this.redirect();
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
            class="mx-auto col gy-2 gx-3 align-items-center"
          >
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el título"
                v-model="titulo"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el autor"
                v-model="autor"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el idioma"
                v-model="idioma"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el año de edición"
                v-model="edicion"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el nombre de la colección"
                v-model="coleccion"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce la materia"
                v-model="materia"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el precio"
                v-model="precio"
              />
            </div>
            <div class="col-auto">
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce la descripción"
                v-model="descripcion"
              />
            </div>
            <div>
              <button @click="createBook" class="btn btn-primary mb-2">
                Enviar
              </button>
            </div>
            <div
              v-show="visibility"
              v-html="message"
              class="text-success form-control"
            ></div>
            <div class="text-primary form-control">
              <p>
                <router-link :to="`/admin`"
                  >Volver a la vista de libros</router-link
                >
              </p>
            </div>
          </form>
        </div>
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="../assets/img/Data Arranging_Flatline.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
