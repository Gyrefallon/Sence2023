import { createStore } from 'vuex'
import { Products } from "@/services/products.js";


export default createStore({

    state: {
        isLoggedin: false,
        productos: Products.getAllProducts(),
    },
    mutations: {
        // agregarProducto(state, payload){
        //     state.carro.push(payload)
        // }
        buscarAlgo(state, payload) {
            console.log(state.carroVisible)
            console.log(payload.target.value)
        },
        setIsLoggedIn(state, value) {
            state.isLoggedIn = value
        },
        buscarProducto(state, payload) {
            if (payload.searchTerm == '') {
                state.productos = Products.getAllProducts()
            } else {
                const inputBuscador = payload.searchTerm.toLowerCase();
                const productos = Products.getAllProducts();
                const productosFiltrados = productos.filter(producto => {
                    const name1 = producto.nombre.toLowerCase();
                    return name1.includes(inputBuscador)
                });
                state.productos = productosFiltrados
            }
        }
    },
    action: {
    },
    modules: {
    }
})