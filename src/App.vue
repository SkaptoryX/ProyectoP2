<script setup>
import { RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView/>
  </main>
  <Footer />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  display: block;
  min-height: 100vh;
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>