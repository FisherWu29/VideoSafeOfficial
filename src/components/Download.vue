<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.safe.videosafe&pcampaignid=web_share';
</script>

<template>
  <section id="download" class="section-padding bg-surface border-t border-border">
    <div class="container mx-auto">
      <div class="rounded-lg border border-border bg-bg p-8 md:p-10">
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 class="section-title text-left">{{ t('download.title') }}</h2>
            <p class="section-subtitle text-left mx-0 mb-6">{{ t('download.subtitle') }}</p>
            <p class="text-sm text-muted">{{ t('download.note') }}</p>
          </div>

          <div class="flex flex-col gap-4 sm:min-w-80">
            <a :href="playStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-center text-lg">
              {{ t('download.googlePlay') }}
            </a>
            <div class="grid grid-cols-1 gap-3 text-sm">
              <div class="rounded-lg border border-border bg-surface px-4 py-3 text-muted">
                {{ t('download.android') }}
              </div>
              <div class="rounded-lg border border-border bg-surface px-4 py-3 text-muted">
                {{ t('download.ios') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
