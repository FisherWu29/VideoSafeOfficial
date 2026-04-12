<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Feature from './components/Feature.vue';
import Advantage from './components/Advantage.vue';
import Download from './components/Download.vue';
import FAQ from './components/FAQ.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Feature />
    <Advantage />
    <Download />
    <FAQ />
    <Footer />
  </div>
</template>

<style scoped>
/* 全局样式已在 style.css 中定义 */
</style>
