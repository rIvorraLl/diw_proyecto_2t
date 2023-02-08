<script>
export default {
  data() {
    return {
      admins: [],
      textA: "",
      textB: "",
      error: "",
      isVisible: true,
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch(`http://localhost:3000/admin`);
      this.admins = await res.json();
    },
    async redirect() {
      if (
        this.admins[0].usuario === this.textA &&
        this.admins[0].contrasenya === this.textB
      ) {
        await this.$router.push("/admin");
      } else {
        this.isVisible = false;
        this.error =
          "El proceso de autentificación ha fallado. Por favor, inténtelo de nuevo.";
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<template>
  <div class="pt-5 mt-5 d-flex pb-5">
    <form @submit.prevent class="mx-auto row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInput">Usuario</label>
        <input
          v-model="textA"
          class="form-control"
          id="autoSizingInput"
          placeholder="Usuario"
        />
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup"
          >Contraseña</label
        >
        <input
          v-model="textB"
          class="form-control"
          id="autoSizingInputGroup"
          placeholder="Contraseña"
          type="password"
        />
      </div>
      <div class="col-auto">
        <button @click="redirect" class="btn btn-primary">Submit</button>
      </div>
      <div class="text-danger p-2 bg-light" :class="{ invisible: isVisible }">
        {{ error }}
      </div>
    </form>
  </div>
</template>
