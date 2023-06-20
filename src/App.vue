<template>
  <NavbarComponent/>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-align: center;
  color: black;
}
</style>
