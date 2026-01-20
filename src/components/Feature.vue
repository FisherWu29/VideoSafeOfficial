<script setup lang="ts">




const features = [
  {
    id: 1,
    title: '私密相册 - 您的个人隐私空间',
    description: '将您的私人照片和视频安全存储在加密空间中，只有您可以访问。',
    features: [
      '密码保护，生物识别解锁',
      '从系统相册移动到私密沙箱',
      '媒体文件管理（删除、导出）',
      '自动生成缩略图，提高加载速度'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=VideoSafe%20app%20private%20gallery%20interface%20with%20biometric%20unlock%20feature%2C%20secure%20vault%20design%2C%20modern%20UI&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '视频下载 - 支持多平台格式',
    description: '轻松下载来自各大平台的视频，支持多种格式和分辨率选择。',
    features: [
      '支持 B 站、YouTube 等多平台视频下载',
      '高清画质选择，多种分辨率支持',
      '快速下载，稳定可靠',
      '支持多种视频格式'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=VideoSafe%20app%20video%20download%20interface%20showing%20multiple%20platforms%20support%2C%20resolution%20options%2C%20download%20progress%2C%20modern%20UI&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: '安全防护 - 全方位保护您的隐私',
    description: '多层安全防护措施，确保您的隐私安全，防止未授权访问。',
    features: [
      '伪装模式（应用图标伪装、伪装密码）',
      '入侵抓拍（密码输入错误 N 次后拍照）',
      '数据恢复/导出（防卸载丢失数据）',
      '生物识别解锁（指纹或人脸识别）'
    ],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=VideoSafe%20app%20security%20settings%20interface%20showing%20disguise%20mode%2C%20intrusion%20capture%2C%20biometric%20unlock%20options%2C%20modern%20UI&image_size=landscape_16_9'
  }
];
</script>

<template>
  <section id="features" class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">核心功能</h2>
        <p class="section-subtitle">VideoSafe 提供全方位的视频管理和隐私保护功能，满足您的各种需求</p>
      </div>

      <div class="space-y-24">
        <div v-for="(feature, index) in features" :key="feature.id" class="flex flex-col md:flex-row items-center gap-12" :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''">
          <!-- Image -->
          <div class="md:w-1/2">
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div class="relative bg-secondary rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <img :src="feature.image" :alt="feature.title" class="w-full h-auto" />
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="md:w-1/2">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-primary">{{ feature.title }}</h3>
            <p class="text-lg text-dark mb-8">{{ feature.description }}</p>
            <ul class="space-y-4">
              <li v-for="(item, i) in feature.features" :key="i" class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-dark">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>