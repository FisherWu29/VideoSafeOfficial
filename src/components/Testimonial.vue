<script setup lang="ts">




const testimonials = [
  {
    id: 1,
    name: '张先生',
    avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=asian%20male%20portrait%2C%20professional%20looking%2C%20neutral%20background&image_size=square',
    rating: 5,
    content: 'VideoSafe 的加密功能非常强大，我可以放心地存储私人视频，不用担心被别人看到。视频下载功能也很实用，支持多个平台，下载速度快，画质清晰。',
    role: '软件工程师'
  },
  {
    id: 2,
    name: '李女士',
    avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=asian%20female%20portrait%2C%20friendly%20smile%2C%20neutral%20background&image_size=square',
    rating: 5,
    content: '作为一名内容创作者，我经常需要下载和管理视频素材。VideoSafe 不仅帮我安全存储这些素材，还能快速下载我需要的视频，大大提高了我的工作效率。',
    role: '内容创作者'
  },
  {
    id: 3,
    name: '王先生',
    avatar: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=asian%20male%20portrait%2C%20casual%20style%2C%20neutral%20background&image_size=square',
    rating: 4,
    content: '伪装模式是我最喜欢的功能，它可以让应用图标变成计算器，别人根本不会发现这是一个视频保险箱。入侵抓拍功能也很实用，让我时刻了解是否有人试图访问我的隐私。',
    role: '普通用户'
  }
];

const generateStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};
</script>

<template>
  <section id="testimonials" class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">用户怎么说</h2>
        <p class="section-subtitle">来自真实用户的评价，看看他们如何使用 VideoSafe 保护隐私</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-secondary rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <!-- Rating -->
          <div class="flex mb-4">
            <svg v-for="(_, index) in generateStars(testimonial.rating)" :key="index" class="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Content -->
          <p class="text-dark mb-6 italic">"{{ testimonial.content }}"</p>

          <!-- User Info -->
          <div class="flex items-center gap-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover border-2 border-primary" />
            <div>
              <h4 class="font-bold text-dark">{{ testimonial.name }}</h4>
              <p class="text-dark text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>