<template>
    <div>
        <LoginComp/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginComp from '@/components/LoginComp.vue'
  
  export default {
    name: 'HomeView',
    components: {
        LoginComp
    }
  }
  </script>