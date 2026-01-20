import { createI18n } from 'vue-i18n';
import zh from '../locales/zh.json';
import en from '../locales/en.json';

/**
 * 创建 i18n 实例
 * 设置默认语言为中文，备用语言为英文
 */
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages: {
    zh,
    en,
  },
});

export default i18n;
