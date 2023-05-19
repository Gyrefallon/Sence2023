<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white">Daft App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">Acerca</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/contact">Contacto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/store">Tienda</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/login">Iniciar Sesión</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .navbar {
    background-color: #343a40; /* color oscuro para el navbar */
  }
.text-white:hover{
  color: coral;
}
</style>
