export class Products{
  static products=[
      { "id":1,
        "nombre": "Disco Discovery",
        "tipo": "Álbum de estudio",
        "precio": 15.99,
        "descripcion": "El segundo álbum de estudio de Daft Punk, lanzado en 2001. Incluye los éxitos One More Time y Harder, Better, Faster, Stronger.",
        "imagen": "https://th.bing.com/th/id/R.035b490f062d7390428a80710999c68e?rik=ptfFqFNGaFIfRg&riu=http%3a%2f%2fmedia.senscritique.com%2fmedia%2f000004846167%2fsource_big%2fDiscovery.jpg&ehk=DIrTbXWTNbR08JJKzAEnbGt%2bmq2cE4X5pNqQtAVhXVI%3d&risl=&pid=ImgRaw&r=0",
        "cantidad":10
      },
      { "id":2,
        "nombre": "Disco Random Access Memories Ed Coleccionista",
        "tipo": "Álbum de estudio",
        "precio": 19.99,
        "descripcion": "El cuarto y último álbum de estudio de Daft Punk, lanzado en 2013. Incluye los éxitos Get Lucky y Instant Crush.",
        "imagen": "https://theawesomer.com/photos/2013/10/daft_punk_random_access_memories_deluxe_box_set_1.jpg",
        "cantidad":15
      },
      { "id":3,
        "nombre": "Disco Alive 2007",
        "tipo": "Álbum en vivo",
        "precio": 14.99,
        "descripcion": "El primer álbum en vivo de Daft Punk, grabado durante su gira mundial del 2007. Incluye los éxitos One More Time, Harder, Better, Faster, Stronger, y Around the World.",
        "imagen": "https://images-na.ssl-images-amazon.com/images/I/71NQqe6Bt-L._SL1300_.jpg",
        "cantidad":5
      },
      { "id":4,
        "nombre": "Blu-ray Interstella 5555",
        "tipo": "Película",
        "precio": 9.99,
        "descripcion": "Una película animada japonesa de 2003 que cuenta la historia del álbum Discovery de Daft Punk, con las canciones del álbum como banda sonora.",
        "imagen": "https://th.bing.com/th/id/OIP.GAlaQpQUtkt5j6qehj0tQQHaF7?pid=ImgDet&rs=1",
        "cantidad":7
      },
      { "id":5,
        "nombre": "Gorra Daft Punk",
        "tipo": "Accesorio",
        "precio": 24.99,
        "descripcion": "Gorra con el logotipo de Daft Punk bordado. Disponible en negro o blanco.",
        "imagen": "https://th.bing.com/th/id/R.9fab59600d848e5a37f6a8df9144edad?rik=HRMUmEPqvUrt4Q&pid=ImgRaw&r=0",
        "cantidad":20
      },
      { "id":6,
        "nombre": "Camiseta Daft Punk",
        "tipo": "Ropa",
        "precio": 29.99,
        "descripcion": "Camiseta negra con el logotipo de Daft Punk impreso en blanco. Disponible en tallas S, M, L y XL.",
        "imagen": "https://th.bing.com/th/id/R.ed3d53e9382524dda763333a1948c856?rik=KZVUTrRdXr4OJQ&pid=ImgRaw&r=0",
        "cantidad":20
      },
      { "id":7,
        "nombre": "Máscara Daft Punk",
        "tipo": "Accesorio",
        "precio": 39.99,
        "descripcion": "Réplica de la icónica máscara de Daft Punk, utilizada en sus conciertos y videoclips.",
        "imagen": "https://th.bing.com/th/id/R.e333589a52892dc77673e2aee797acfd?rik=8pu0obIfiq8QMA&pid=ImgRaw&r=0",
        "cantidad":10
      },
      { "id":8,
        "nombre": "Bolsa de viaje de Daft Punk",
        "tipo": "Accesorio",
        "descripcion": "Bolsa de lona de alta calidad con el logotipo de Daft Punk impreso en ambos lados.",
        "imagen": "https://images-na.ssl-images-amazon.com/images/I/718kwT4YfSS._AC_UY625_.jpg",
        "precio": 39.99,
        "cantidad":20
      },
      { "id":9,
        "nombre": "Disco Tron: Legacy Soundtrack",
        "tipo": "Álbum de estudio",
        "descripcion": "La banda sonora de la película Tron: Legacy, compuesta por Daft Punk.",
        "imagen": "https://th.bing.com/th/id/OIP.nLiyU-zbr95vtuioNBLA_AHaHa?pid=ImgDet&rs=1",
        "precio": 27.99,
        "cantidad":10
      }, 
       {"id":10,
        "nombre": "Disco Homework",
        "tipo": "Álbum de estudio",
        "descripcion": "El álbum debut de Daft Punk, lanzado en 1997.",
        "imagen": "https://th.bing.com/th/id/OIP.frXEIMddrMlobxgiF6_pOgHaHa?pid=ImgDet&rs=1",
        "precio": 20.99,
        "cantidad":3
      },
      { "id":11,
        "nombre": "Chaqueta de Daft Punk",
        "tipo": "Ropa",
        "descripcion": "Chaqueta de cuerina de alta calidad con el logotipo de Daft Punk en la espalda.",
        "imagen": "https://www.jacketsthreads.com/image/catalog/Jackets/daftpunk/s-l1600.jpg",
        "precio": 79.99,
        "cantidad":20
      }
    ]
    static getAllProducts() {
      return this.products.filter(product => product.cantidad > 0);
    }
  }