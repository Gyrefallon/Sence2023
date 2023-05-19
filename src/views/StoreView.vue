<template>
	<div class="container">
		<div class="row g-3">
			<div v-for="fila in productillos" :key="fila.id" class="card col-md-3" @click="mostrarDescripcion(fila)">
				<div class="card-body" data-bs-toggle="modal" data-bs-target="#descripcionProducto">
					<img :src="fila.imagen" class="card-img-top" alt="placa">
					<h2 class="card-title">{{ fila.nombre }}</h2>
					<h6 class="card-text">Precio: ${{ parseInt(fila.precio).toLocaleString('es') }}</h6>
					<h6 class="card-text">Stock: {{ fila.cantidad }}</h6>
				</div>
				<button @click="asignarElementoEspecifico(fila.id)" class="btn btn-primary">Ver Mas</button>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="descripcionProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel"> {{ tituloActual }}</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<img :src=imagenActual alt="">
					{{ descripcionActual }}
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapState } from 'vuex'
// import verMasView from './verMasView.vue';

export default {
	name: "StoreView",
	components:{
		// verMasView
	},
	data() {
		return {
			descripcionActual: '',
			tituloActual: '',
			imagenActual: '',
			productillos: [],
		}
	},
	computed: {
		...mapState(['productos']),
	},
	methods: {
		mostrarDescripcion(producto) {
			this.descripcionActual = producto.descripcion
			this.tituloActual = producto.nombre,
			this.imagenActual= producto.imagen
		},
  asignarElementoEspecifico(indice) {
    this.elementoEspecifico = this.productillos[indice];
	this.$router.push('/store/:' + this.productillos[indice].id)
}

	},
	created: async function () {
		try {
			await setTimeout(() => {
				let response = this.productos;
				this.productillos = response;
			}, '1000');

		} catch (error) {
			this.errorMessage = error;
		}
	},
	watch: {
		productos() {
			this.productillos = this.productos
		}
	}
};
</script>
  
<style scoped>
.card {
	border: 0;
}

.card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid rgba(226, 223, 223, 0.488);

}

.card img {
	max-height: 100px;
	width: auto;
	overflow: hidden;
	object-fit: scale-down;
	margin: 1em;
}

h2 {
	font-size: 1rem;
	font-weight: 700;
}

.btn {
	background-color: rgb(39, 39, 39) !important;
	border: 0 !important;
}

.btn:hover {
	cursor: pointer;
	color: #00f3ae;
	background-color: rgb(48, 48, 48) !important;


}

#carga {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50vh;
}
</style>