<template>
    <div class="footer mt-auto py-3">
    <footer class="bg-dark text-white py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Enlaces de interés</h4>
            <ul class="list-unstyled">
              <li><router-link class="text-white" to="/music">Música</router-link></li>
              <li><router-link class="text-white" to="/concerts">Conciertos</router-link></li>
              <li><router-link class="text-white" to="/news">Noticias</router-link></li>
              <li><router-link class="text-white" to="/contact">Contacto</router-link></li>
              <li><router-link class="text-white" to="/about">Sobre</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Redes sociales</h4>
            <ul class="list-unstyled">
              <li><a class="text-white" href="https://www.facebook.com/DaftPunk/" target="_blank">Facebook</a></li>
              <li><a class="text-white" href="https://twitter.com/daftpunk" target="_blank">Twitter</a></li>
              <li><a class="text-white" href="https://www.instagram.com/daftpunk/" target="_blank">Instagram</a></li>
              <li><a class="text-white" href="https://www.youtube.com/channel/UC_kRDKYrUlrbtrSiyu5Tflg" target="_blank">YouTube</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Contacto</h4>
            <p>Correo electrónico: info@daftpunk.com</p>
            <p>Teléfono: +1 (555) 555-5555</p>
            <p>Dirección: 1234 Calle de la Música, Los Ángeles, California, EE. UU.</p>
          </div>
        </div>
      </div>
    </footer>
</div>
  </template>
  
  <script>
  export default {
    name: "FooterComp"
  }
  </script>
  
<style scoped>
    .footer {
        background-color: #343a40; /* color oscuro para el footer */
        z-index: -1;
        bottom: 0;
        width: 100%;
        }
    .mt-auto {
    margin-top: auto;
    }
    a{
      text-decoration: none;
    }
    .text-white:hover{
      color:coral
    }
  </style>
  