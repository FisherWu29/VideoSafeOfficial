<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

type FaqItem = {
  question: string;
  answer: string;
};

const { t, tm } = useI18n();
const activeIndex = ref<number | null>(0);

const faqs = computed(() => tm('faq.items') as FaqItem[]);

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="section-padding bg-bg border-t border-border">
    <div class="container mx-auto">
      <div class="max-w-3xl mb-12">
        <h2 class="section-title text-left">{{ t('faq.title') }}</h2>
        <p class="section-subtitle text-left mx-0">{{ t('faq.subtitle') }}</p>
      </div>

      <div class="max-w-4xl space-y-4">
        <div v-for="(faq, index) in faqs" :key="faq.question" class="surface overflow-hidden">
          <button
            class="w-full px-5 py-4 text-left flex justify-between gap-4 items-center hover:bg-primary/5 transition-colors duration-200"
            type="button"
            @click="toggleFaq(index)"
          >
            <span class="font-semibold text-text">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200"
              :class="activeIndex === index ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-if="activeIndex === index" class="px-5 pb-5">
            <p class="text-muted leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
