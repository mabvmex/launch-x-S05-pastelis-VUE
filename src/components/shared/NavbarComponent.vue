<template>
  <div>
    <nav class="bg-info barra navbar navbar-dark navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar" to="/">
          <img
            id="navLogo"
            class="d-inline-block align-text-top logo"
            src="@/assets/logo/logo3.png"
            alt="logo"
            width="160"
            height="60"
          />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="bg-primary navbar-nav me-auto mb-0 mb-lg-0">
            <li class="nav-item actived">
              <a
                href="/#menu"
                class="nav-link active menu"
                aria-current="page"
                >Menú</a>
            </li>
            <li class="nav-item actived">
              <router-link to="/ordena" class="nav-link active" aria-current="page">Ordena</router-link>
            </li>
            <li class="nav-item actived">
              <a class="nav-link active" aria-current="page" href="/#contacto">Contáctanos</a>
            </li>
            <li class="nav-item actived">
              <a class="nav-link active" aria-current="page" href="/#nosotros">Nosotros</a>
            </li>
            <li class="nav-item actived">
              <router-link class="nav-link active" aria-current="page" to="/admin">ADMIN</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.barra,
nav {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  padding-right: 0 !important;
  padding-left: 0 !important;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

ul {
  width: 100%;
  padding: auto !important;
  list-style-type: none;
}

li {
  float: right;
  height: 60px;
  margin-left: 5px;
  margin-right: 5px;
}

a {
  margin-top: 5px;
}

li > a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.nav-link .active) {
  background-color: #262262;
}

.logo {
  margin-top: -5px;
  margin-right: 5px;
}

.navbar-toggler {
  margin-right: 20px;
}
</style>
