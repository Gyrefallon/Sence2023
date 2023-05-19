export class Promotions{
  static promotions = [
    {
      "title": "¡Consigue los álbumes de Daft Punk a un precio especial!",
      "description": "Disfruta de los grandes éxitos de Daft Punk con esta colección de álbumes a un precio especial.",
      "products": [
        {
          "name": "Homework",
          "description": "El álbum debut de Daft Punk, lanzado en 1997.",
          "image": "homework.jpg",
          "price": 20.99
        },
        {
          "name": "Discovery",
          "description": "El segundo álbum de estudio de Daft Punk, lanzado en 2001.",
          "image": "discovery.jpg",
          "price": 18.99
        }
      ]
    },
    {
      "title": "¡Compra la chaqueta de Daft Punk a un precio increíble!",
      "description": "Luce como un verdadero fanático con esta chaqueta de edición limitada de Daft Punk.",
      "products": [
        {
          "name": "Chaqueta de Daft Punk",
          "description": "Chaqueta de algodón de alta calidad con el logotipo de Daft Punk en el pecho y la espalda.",
          "image": "chaqueta.jpg",
          "price": 79.99
        }
      ]
    },
    {
      "title": "¡Completa tu colección de Daft Punk con estos vinilos!",
      "description": "Obtén estos tres vinilos de Daft Punk para completar tu colección.",
      "products": [
        {
          "name": "Random Access Memories",
          "description": "El cuarto y último álbum de estudio de Daft Punk, lanzado en 2013.",
          "image": "ram.jpg",
          "price": 22.99
        },
        {
          "name": "Tron: Legacy Soundtrack",
          "description": "La banda sonora de la película Tron: Legacy, compuesta por Daft Punk.",
          "image": "tron.jpg",
          "price": 27.99
        },
        {
          "name": "Alive 2007",
          "description": "El primer álbum en vivo de Daft Punk, lanzado en 2007.",
          "image": "alive.jpg",
          "price": 29.99
        }
      ]
    },
    {
      "title": "¡Lleva a Daft Punk contigo a donde sea que vayas!",
      "description": "Obtén esta bolsa de viaje de edición limitada con el logotipo de Daft Punk.",
      "products": [
        {
          "name": "Bolsa de viaje de Daft Punk",
          "description": "Bolsa de lona de alta calidad con el logotipo de Daft Punk impreso en ambos lados.",
          "image": "bolsa.jpg",
          "price": 39.99
        }
      ]
    }
  ]
  static getAllPromos() {
    return this.promotions;
  }
}
