<template>
  <div class="container mb-3">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Registro</h3>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                <label for="rut" class="form-label">Rut (Sin puntos y con guión)</label>
                <input type="text" class="form-control" id="rut" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" required>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
                <input type="password" class="form-control" id="confirmPassword" required>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Registrarse</button>
              </div>
            </form>
            <div class="text-center mt-3">
              ¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
