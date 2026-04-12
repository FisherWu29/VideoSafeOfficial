import { createI18n } from 'vue-i18n';
import zh from '../locales/zh.json';
import en from '../locales/en.json';
import ja from '../locales/ja.json';
import es from '../locales/es.json';

const supportedLocales = ['zh', 'en', 'ja', 'es'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

const getInitialLocale = (): SupportedLocale => {
  const localeFromPath = window.location.pathname.split('/').filter(Boolean)[0];
  return supportedLocales.includes(localeFromPath as SupportedLocale)
    ? (localeFromPath as SupportedLocale)
    : 'zh';
};

/**
 * 创建 i18n 实例
 * 设置默认语言为中文，备用语言为英文
 */
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getInitialLocale(), // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages: {
    zh,
    en,
    ja,
    es,
  },
});

export default i18n;
