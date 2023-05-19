<template>
  <div>
    <NavBar/>
    <BreadCrumbs />
    <router-view />
    <FooterComp/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import BreadCrumbs from './components/BreadCrumb.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    BreadCrumbs
  }
}
</script>