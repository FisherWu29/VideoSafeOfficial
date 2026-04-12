<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'Español' },
];

const navLinks = computed(() => [
  { name: t('nav.features'), href: '#features' },
  { name: t('nav.more'), href: '#more' },
  { name: t('nav.download'), href: '#download' },
  { name: t('nav.faq'), href: '#faq' },
]);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const changeLanguage = (event: Event) => {
  const nextLocale = (event.target as HTMLSelectElement).value;
  window.location.href = `/${nextLocale}/${window.location.hash}`;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border">
    <div class="container mx-auto flex items-center justify-between py-4">
      <a href="#home" class="flex items-center gap-3" @click="closeMenu">
        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">VS</span>
        </div>
        <span class="text-2xl font-bold text-text tracking-tight">VideoSafe</span>
      </a>

      <div class="hidden lg:flex items-center gap-7">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-muted hover:text-text font-medium transition-colors duration-200"
        >
          {{ link.name }}
        </a>

        <select
          :value="locale"
          @change="changeLanguage"
          class="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text outline-none focus:border-primary"
          :aria-label="t('common.language')"
        >
          <option v-for="language in languages" :key="language.code" :value="language.code">
            {{ language.label }}
          </option>
        </select>

        <a href="#download" class="btn-primary">
          {{ t('nav.download_now') }}
        </a>
      </div>

      <button
        class="lg:hidden rounded-lg border border-border px-3 py-2 text-muted hover:text-text"
        type="button"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-bg border-t border-border">
      <div class="container mx-auto flex flex-col gap-4 py-4">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-muted hover:text-text font-medium py-2 transition-colors duration-200"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>

        <select
          :value="locale"
          @change="changeLanguage"
          class="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text outline-none focus:border-primary"
          :aria-label="t('common.language')"
        >
          <option v-for="language in languages" :key="language.code" :value="language.code">
            {{ language.label }}
          </option>
        </select>

        <a href="#download" class="btn-primary text-center" @click="closeMenu">
          {{ t('nav.download_now') }}
        </a>
      </div>
    </div>
  </nav>
</template>
