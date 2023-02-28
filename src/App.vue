<template>
 
    <NavbarComp/>
    <!-- <div class="container-fluid min vh-100"> -->

      <router-view/>
  
    <FooterComp/> 


  <!-- <nav> -->
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  
</template>

<script>

import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp
  }
}
 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
