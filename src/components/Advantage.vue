<script setup lang="ts">




const advantages = [
  {
    title: '本地存储',
    description: '数据仅存于设备，不上传服务器，确保您的隐私安全',
    icon: '💾'
  },
  {
    title: '多重加密',
    description: '密码保护、生物识别、伪装模式，多层安全防护',
    icon: '🔒'
  },
  {
    title: '多平台支持',
    description: '支持主流视频平台下载，满足您的各种需求',
    icon: '🌐'
  },
  {
    title: '简洁易用',
    description: '直观界面，流畅操作体验，降低使用门槛',
    icon: '🎨'
  },
  {
    title: '定期更新',
    description: '持续优化功能，修复问题，提供更好的用户体验',
    icon: '🔄'
  },
  {
    title: '隐私保护',
    description: '隐匿拍摄痕迹，防止他人发现您的隐私内容',
    icon: '🕵️'
  }
];
</script>

<template>
  <section id="advantages" class="section-padding bg-gray-50">
    <div class="container mx-auto px-4">
      <div 
        class="text-center mb-16"
        
        
        
        
      >
        <h2 class="section-title">为什么选择 VideoSafe</h2>
        <p class="section-subtitle">我们致力于为您提供最安全、最私密的视频管理解决方案</p>
      </div>

      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        
        
        
        
      >
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
          
        >
          <div class="text-4xl mb-6">{{ advantage.icon }}</div>
          <h3 class="text-xl font-bold mb-3 text-primary">{{ advantage.title }}</h3>
          <p class="text-gray-600">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>