<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const tools = computed(() => tm('more.items') as string[]);
</script>

<template>
  <section id="more" class="section-padding bg-bg border-t border-border">
    <div class="container mx-auto">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 class="section-title text-left">{{ t('more.title') }}</h2>
          <p class="section-subtitle text-left mx-0">{{ t('more.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="item in tools" :key="item" class="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
            <span class="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-primary text-white">
              <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-muted">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
