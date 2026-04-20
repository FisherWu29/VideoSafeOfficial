<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navLinks = computed(() => [
  { name: t('nav.features'), href: '#features' },
  { name: t('nav.more'), href: '#more' },
  { name: t('nav.download'), href: '#download' },
  { name: t('nav.faq'), href: '#faq' },
]);
</script>

<template>
  <footer class="bg-surface text-text py-10 border-t border-border">
    <div class="container mx-auto">
      <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">VS</span>
            </div>
            <span class="text-2xl font-bold">VideoSafe</span>
          </a>
          <p class="text-muted">{{ t('footer.tagline') }}</p>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-3">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-muted hover:text-text transition-colors duration-200">
            {{ link.name }}
          </a>
          <a href="/privacy" class="text-muted hover:text-text transition-colors duration-200">
            {{ t('footer.privacy') }}
          </a>
          <a href="/support" class="text-muted hover:text-text transition-colors duration-200">
            {{ t('footer.support') }}
          </a>
        </div>
      </div>

      <p class="mt-8 border-t border-border pt-6 text-sm text-muted">
        {{ t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>
