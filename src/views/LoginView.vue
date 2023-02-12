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
        document.cookie = "loginOk=abcdffttvv5";
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
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form>
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form1Example13"
                class="form-control form-control-lg"
                v-model="textA"
              />
              <label class="form-label" for="form1Example13"
                >Email address</label
              >
            </div>
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form1Example23"
                class="form-control form-control-lg"
                v-model="textB"
              />
              <label class="form-label" for="form1Example23">Password</label>
            </div>
            <div class="d-flex justify-content-around align-items-center mb-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                />
                <label class="form-check-label" for="form1Example3">
                  Remember me
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
            <button @click="redirect" class="btn btn-primary btn-lg btn-block">
              Submit
            </button>
            <div
              class="text-danger p-2 bg-light"
              :class="{ invisible: isVisible }"
            >
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>
