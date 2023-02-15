<template>
  <footer class="bg-dark text-center text-white">
    <div class="container p-4">
      <section class="mb-4">
        <a
          href="https://signal.org/en/"
          class="btn btn-outline-light btn-floating m-1"
        >
          <i
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-signal"
            viewBox="0 0 16 16"
          >
          </i>
        </a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://joinmastodon.org/"
          role="button"
          ><i class="bi bi-mastodon"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="mailto:rivorrallodra@cifpfbmoll.eu"
          role="button"
          ><i class="bi bi-mailbox"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><i class="bi bi-chat-dots"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/"
          role="button"
          ><i class="bit bi-git"></i
        ></a>
      </section>

      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Suscríbete a nuestra newsletter</strong>
              </p>
            </div>
            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" />
                <label class="form-label" for="form5Example21"
                  >Tu email...</label
                >
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-outline-light mb-4">
                Suscríbeme
              </button>
            </div>
          </div>
        </form>
      </section>
      <section class="mb-4">
        <p>
          Una colección de libros para gente un poco rara. Tenemos un poco de
          todo, pero igual encuentra la selección algo esquinada. No nos hacemos
          responsables de posibles pérdidas neuronales. Si acaso pruebe en otro
          lado.
        </p>
      </section>
      <section class="">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Cthulhu Editorial</h5>

            <ul class="list-unstyled mb-0">
              <li>C/ Pi de la Serra, 23</li>
              <li>Llorito (Mallorca)</li>
              <li>Tel: 555-234783</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Enlaces</h5>
            <ul class="list-unstyled mb-0">
              <li></li>
              <li>
                <router-link to="/titulos" class="text-white"
                  >Nuestros libros</router-link
                >
              </li>
              <li>
                <router-link to="/autores" class="text-white"
                  >Nuestros autores</router-link
                >
              </li>
              <li>
                <router-link to="/acerca" class="text-white"
                  >Nuestra editorial</router-link
                >
              </li>
              <li>
                <router-link to="/privacidad" class="text-white"
                  >Política de privacidad</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Administración</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/login" class="text-white"
                  >Identificación</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <img class="w-75" src="../assets/img/logoCircleAlpha.png" alt="" />
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Copyright Rafael Ivorra
    </div>
  </footer>
</template>
