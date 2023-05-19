<template>
<div class="container mb-3">
  <div class="row justify-content-center mt-5">
    <div class="col-lg-6 col-md-8 col-sm-10">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Iniciar Sesión</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Rut</label>
              <input type="text" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          <div class="mt-3">
            ¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'LoginComp',
  }
  </script>