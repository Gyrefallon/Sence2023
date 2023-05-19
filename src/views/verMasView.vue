<template>
    <div>
        {{ elementoEspecifico.nombre }}
    </div>
</template>


<script>
export default{
    name: 'verMasView',
    props: {
	elementoEspecifico: {
    type: Object,
    required: true
  }}


}
</script>