<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.safe.videosafe&pcampaignid=web_share';
const featureImage = computed(() => {
  const imageMap: Record<string, string> = {
    zh: '/images/feature-zh-CN.png',
    en: '/images/feature-en-US.png',
    ja: '/images/feature-ja-JP.png',
    es: '/images/feature-es-ES.png',
  };

  return imageMap[String(locale.value)] ?? imageMap.en;
});
</script>

<template>
  <section id="home" class="hero-bg relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
    <div class="absolute inset-0 bg-grid opacity-60"></div>
    <div class="container relative mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div class="text-center lg:text-left">
          <p class="mb-4 inline-flex rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {{ t('hero.availability') }}
          </p>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text">
            {{ t('hero.title') }}
          </h1>

          <p class="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0">
            {{ t('hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a :href="playStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-center">
              {{ t('hero.primary') }}
            </a>
            <a href="#features" class="btn-accent text-center">
              {{ t('hero.secondary') }}
            </a>
          </div>

          <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span class="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-muted">
              {{ t('download.android') }}
            </span>
            <span class="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-muted">
              {{ t('hero.ios') }}
            </span>
          </div>
        </div>

        <div class="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
          <img :src="featureImage" :alt="t('hero.imageAlt')" class="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
