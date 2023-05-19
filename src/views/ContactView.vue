<template>
    <div class="separador">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card">
              <div class="card-header">Formulario de Contacto</div>
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" v-model="form.name" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" v-model="form.email" required>
                  </div>
                  <div class="form-group">
                    <label for="message">Mensaje</label>
                    <textarea class="form-control" id="message" v-model="form.message" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Enviar Mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        if (!this.form.name || !this.form.email || !this.form.message) {
          alert('Por favor, complete todos los campos del formulario');
          return;
        }
        // Lógica para enviar el formulario
        console.log('Formulario enviado:', this.form);
        alert('Formulario enviado');
        this.form = { name: '', email: '', message: '' };
      },
    },
  };
  </script>
  
<style scoped>
.separador{
    margin-bottom: 10px;
}
</style>