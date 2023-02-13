<script>
export default {
  data() {
    return {
      selected: "",
      text: "",
      message: "",
      visibility: false,
    };
  },
  methods: {
    async postData() {
      await fetch(`http://localhost:3000/libros/${this.$route.params.id}`, {
        method: "PATCH",
        body: `{ "${this.selected}": "${this.text}" }`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((this.message = `<p>Campo editado</p>`))
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
            class="mx-auto row gy-2 gx-3 align-items-center"
          >
            <div class="col-auto">
              <label for="book" class="bg-white p-1 m-2 btn"
                >Elige un campo a editar:</label
              >
              <select
                name="book"
                id="autoSizingInput"
                form="form-control"
                v-model="selected"
              >
                <option value="titulo">Título</option>
                <option value="autor">Autor</option>
                <option value="idioma">Idioma</option>
                <option value="edicion">Edición</option>
                <option value="coleccion">Colección</option>
                <option value="materia">Materia</option>
                <option value="precio">Precio</option>
                <option value="descripcion">Descripción</option>
              </select>
              <input
                class="form-control mb-2"
                id="autoSizingInput"
                placeholder="Introduce el nuevo contenido"
                v-model="text"
              />
              <button @click="postData" class="btn btn-primary mb-2">
                Enviar
              </button>
            </div>
            <div
              v-show="visibility"
              v-html="message"
              class="text-success form-control"
            ></div>
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
            src="../assets/img/undraw_personal_data_re_ihde.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
