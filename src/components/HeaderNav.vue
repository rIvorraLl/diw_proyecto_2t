<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top"
    data-bs-theme="dark"
  >
    <!-- <nav class="navbar bg-dark" data-bs-theme="dark"> -->
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"
        ><img class="w-50" src="../assets/img/logoNoCircle3.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/index" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/titulos" class="nav-link">Catálogo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/autores" class="nav-link">Autores</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Búsqueda"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Buscar...
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
