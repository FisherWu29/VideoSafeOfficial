<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = [
  { name: '首页', href: '#home' },
  { name: '功能', href: '#features' },
  { name: '优势', href: '#advantages' },
  { name: '评价', href: '#testimonials' },
  { name: '下载', href: '#download' },
  { name: '关于我们', href: '#about' },
];
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-xl">VS</span>
        </div>
        <span class="text-2xl font-bold text-primary">VideoSafe</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
        >
          {{ link.name }}
        </a>
        <a href="#download" class="btn-accent">
          立即下载
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-gray-700 hover:text-primary"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-white border-t"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-300"
          @click="toggleMenu"
        >
          {{ link.name }}
        </a>
        <a href="#download" class="btn-accent text-center">
          立即下载
        </a>
      </div>
    </div>
  </nav>
</template>