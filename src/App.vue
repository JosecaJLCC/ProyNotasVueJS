<script setup>
import Inicio from './components/Inicio.vue'
import Registro from './views/Registro.vue';
</script>

<template>
  <!-- <Inicio/> -->
  <Registro/>
  <!-- <nav>
    <router-link to="/inicio">Home</router-link> |
  </nav> -->
  <router-view/>
  
</template>

<style scoped>

</style>
