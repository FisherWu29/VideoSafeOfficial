<script setup lang="ts">




const advantages = [
  {
    title: '本地存储',
    description: '数据仅存于设备，不上传服务器，确保您的隐私安全',
    icon: 'local'
  },
  {
    title: '多重加密',
    description: '密码保护、生物识别、伪装模式，多层安全防护',
    icon: 'encryption'
  },
  {
    title: '多平台支持',
    description: '支持主流视频平台下载，满足您的各种需求',
    icon: 'platform'
  },
  {
    title: '简洁易用',
    description: '直观界面，流畅操作体验，降低使用门槛',
    icon: 'usability'
  },
  {
    title: '定期更新',
    description: '持续优化功能，修复问题，提供更好的用户体验',
    icon: 'update'
  },
  {
    title: '隐私保护',
    description: '隐匿拍摄痕迹，防止他人发现您的隐私内容',
    icon: 'privacy'
  }
];
</script>

<template>
  <section id="advantages" class="section-padding bg-dark border-t border-white/5">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">为什么选择 VideoSafe</h2>
        <p class="section-subtitle">我们致力于为您提供最安全、最私密的视频管理解决方案</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(advantage, index) in advantages" :key="index" class="surface surface-hover p-8">
          <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/25">
            <svg v-if="advantage.icon === 'local'" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7M7 7l1-3h8l1 3" />
            </svg>
            <svg v-else-if="advantage.icon === 'encryption'" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3 1.343 3 3v3H9v-3c0-1.657 1.343-3 3-3z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11V8a5 5 0 0110 0v3" />
            </svg>
            <svg v-else-if="advantage.icon === 'platform'" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
            </svg>
            <svg v-else-if="advantage.icon === 'usability'" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a8 8 0 100 16 8 8 0 000-16zm0 6l3 3" />
            </svg>
            <svg v-else-if="advantage.icon === 'update'" class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v6h6M20 20v-6h-6" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a9 9 0 0114-7M19 5a9 9 0 01-14 7" />
            </svg>
            <svg v-else class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c3.866 0 7 3.134 7 7 0 6-7 11-7 11S5 16 5 10c0-3.866 3.134-7 7-7z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a3 3 0 116 0 3 3 0 01-6 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-text">{{ advantage.title }}</h3>
          <p class="text-muted">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
