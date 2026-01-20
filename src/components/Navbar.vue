<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

/**
 * 切换语言
 */
const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh';
};

/**
 * 切换移动端菜单展开状态
 */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.features'), href: '#features' },
  { name: t('nav.advantages'), href: '#advantages' },
  { name: t('nav.testimonials'), href: '#testimonials' },
  { name: t('nav.download'), href: '#download' },
  { name: t('nav.about'), href: '#about' },
]);
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-bg/70 backdrop-blur-xl border-b border-white/10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_10px_30px_-16px_rgba(124,58,237,0.9)]">
          <span class="text-white font-bold text-xl">VS</span>
        </div>
        <span class="text-2xl font-bold text-text tracking-tight">VideoSafe</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="text-muted hover:text-text font-medium transition-colors duration-300"
        >
          {{ link.name }}
        </a>
        
        <!-- Language Switcher -->
        <button 
          @click="toggleLanguage"
          class="text-muted hover:text-text font-medium transition-colors duration-300 flex items-center gap-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          {{ locale === 'zh' ? 'EN' : '中文' }}
        </button>

        <a href="#download" class="btn-primary">
          {{ t('nav.download_now') }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-4 md:hidden">
        <button 
          @click="toggleLanguage"
          class="text-muted hover:text-text transition-colors duration-300"
        >
          {{ locale === 'zh' ? 'EN' : '中文' }}
        </button>
        <button 
          class="text-muted hover:text-text transition-colors duration-300"
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
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-bg/80 border-t border-white/10 backdrop-blur-xl"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="text-muted hover:text-text font-medium py-2 transition-colors duration-300"
          @click="toggleMenu"
        >
          {{ link.name }}
        </a>
        <a href="#download" class="btn-primary text-center">
          {{ t('nav.download_now') }}
        </a>
      </div>
    </div>
  </nav>
</template>
