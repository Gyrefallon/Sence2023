<template>
  <div class="container">
    <h1 class="text-center mb-5">Acerca de</h1>
    <div class="row">
      <div class="col-md-6">
        <h3>La historia de Daft Punk</h3>
        <p class="mt-4">
          Daft Punk es un dúo francés de música electrónica que se formó en 1993 por los músicos Thomas Bangalter y Guy-Manuel de Homem-Christo. Desde entonces, han sido una de las bandas más influyentes y respetadas en la música electrónica y han vendido millones de álbumes en todo el mundo.
        </p>
        <p>
          El sonido de Daft Punk se caracteriza por su estilo único y diverso, que mezcla elementos de la música house, techno, funk y disco con sonidos electrónicos experimentales. Han lanzado algunos de los álbumes más innovadores e influyentes de la música electrónica, como "Homework" y "Discovery".
        </p>
      </div>
      <div class="col-md-6">
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/R.f183ff343429f14db0fae5fbb60e60cc?rik=ft8fOD%2fgscPWqQ&riu=http%3a%2f%2fwww.bandalismo.net%2fwp-content%2fuploads%2f2013%2f05%2fdaft-punk-gif-get-lucky.gif&ehk=zuJCRkASy19Oci7Tf%2fluMqwPXZB3CTEulQ2l5fbpdbE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.9339d74bc0b9df8987f3613071203175?rik=4udYDetD51e0bQ&pid=ImgRaw&r=0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item menorh">
      <img src="https://media.tenor.co/images/06f7c5c967365f5d6a40a1fa3f52d9df/raw" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.6f0c8475f38df7bcf2b46931ef6333fa?rik=yIFjNkGlux9Lig&pid=ImgRaw&r=0" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>      </div>
    </div>
    <div class="mt-5">
      <h3>Nuestra tienda de Daft Punk</h3>
      <p class="mt-4">
        En nuestra tienda de Daft Punk, ofrecemos una amplia variedad de productos relacionados con la banda, desde discos hasta ropa y accesorios. Todos nuestros productos son de alta calidad y se han seleccionado cuidadosamente para ofrecer la mejor experiencia de compra posible.
      </p>
      <p>
        Si eres fan de Daft Punk, no puedes perderte nuestra tienda. ¡Echa un vistazo a nuestros productos y encuentra lo que estás buscando!
      </p>
      <router-link to="/store">
        <button class="btn btn-primary mt-4 text-center" style="background-color: #da4c3f; border-color: #da4c3f;">
          <i class="bi bi-shop"></i> Ir a la tienda
        </button>
      </router-link>
    </div>
  </div>
</template>

<style>
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 15px;
  }
  
  h1, h3 {
    color: #444;
    text-align: center;
  }
  
  .img-fluid {
    width: 100%;
  }
  
  p {
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
  .menorh{
    height: 255px;
  }
</style>
