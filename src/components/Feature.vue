<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

type FeatureItem = {
  title: string;
  description: string;
};

const { t, tm } = useI18n();

const features = computed(() => tm('features.items') as FeatureItem[]);
</script>

<template>
  <section id="features" class="section-padding bg-surface border-t border-border">
    <div class="container mx-auto">
      <div class="max-w-3xl mb-12">
        <h2 class="section-title text-left">{{ t('features.title') }}</h2>
        <p class="section-subtitle text-left mx-0">{{ t('features.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article v-for="(feature, index) in features" :key="feature.title" class="surface surface-hover p-6">
          <div class="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
            0{{ index + 1 }}
          </div>
          <h3 class="text-xl font-bold mb-3 text-text">{{ feature.title }}</h3>
          <p class="text-muted leading-relaxed">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
