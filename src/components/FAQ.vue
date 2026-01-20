<script setup lang="ts">
import { ref } from 'vue';




const activeIndex = ref<number | null>(null);

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    question: '如何使用视频下载功能？',
    answer: '打开 VideoSafe 应用，点击底部导航栏的「下载」按钮，在输入框中粘贴视频链接，点击「开始下载」按钮即可。应用支持多个平台的视频下载，包括 B 站、YouTube 等。'
  },
  {
    question: '如何设置伪装模式？',
    answer: '进入应用的「设置」页面，点击「安全设置」，然后选择「伪装模式」。您可以选择将应用图标伪装成计算器、日历等常见应用，还可以设置伪装密码，当输入伪装密码时，会打开一个伪装的应用界面。'
  },
  {
    question: '数据是否安全？',
    answer: 'VideoSafe 的所有数据都存储在您的设备本地，不上传到任何服务器。应用使用 AES-256 加密算法保护您的数据，只有通过正确的密码或生物识别验证才能访问。即使应用被卸载，数据也会保留在设备上，您可以重新安装应用后恢复数据。'
  },
  {
    question: '密码忘记了怎么办？',
    answer: '如果您忘记了密码，很抱歉，我们无法帮助您恢复密码，因为密码是本地存储的，我们没有访问权限。为了保护您的隐私，我们建议您设置一个容易记住但又不容易被别人猜测的密码，并定期备份您的数据。'
  },
  {
    question: '支持哪些安卓版本？',
    answer: 'VideoSafe 支持 Android 6.0 及以上版本的设备。为了获得最佳体验，我们建议您使用 Android 8.0 或更高版本的设备，并确保设备有足够的存储空间。'
  },
  {
    question: '应用是否免费？是否有付费功能？',
    answer: 'VideoSafe 是一款免费应用，基本功能都可以免费使用，包括加密相册、视频下载、安全设置等。我们也提供高级版，高级版用户可以享受无广告、更多下载速度、更多伪装选项等额外功能。'
  }
];
</script>

<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div 
        class="text-center mb-16"
        
        
        
        
      >
        <h2 class="section-title">常见问题</h2>
        <p class="section-subtitle">了解更多关于 VideoSafe 的使用方法和功能特点</p>
      </div>

      <div 
        class="max-w-3xl mx-auto space-y-4"
        
        
        
        
      >
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden"
          
        >
          <button 
            class="w-full px-6 py-4 text-left flex justify-between items-center bg-secondary hover:bg-primary/10 transition-colors duration-300"
            @click="toggleFaq(index)"
          >
            <span class="font-medium text-lg text-dark">{{ faq.question }}</span>
            <svg 
              class="w-5 h-5 text-primary transition-transform duration-300" 
              :class="activeIndex === index ? 'transform rotate-180' : ''"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            v-if="activeIndex === index"
            class="px-6 py-4 bg-white border-t border-gray-200"
          >
            <p class="text-dark">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 使用CSS过渡效果 */
</style>