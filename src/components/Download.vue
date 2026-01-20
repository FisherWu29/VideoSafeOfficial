<script setup lang="ts">



</script>

<template>
  <section id="download" class="section-padding bg-secondary">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">立即下载 VideoSafe</h2>
        <p class="section-subtitle">保护您的隐私，安全管理您的视频</p>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-12">
        <!-- QR Code -->
        <div class="bg-white p-4 rounded-xl shadow-lg">
          <img src="https://neeko-copilot.bytedance.net/api/text2image?prompt=QR%20code%20for%20app%20download%2C%20clear%20and%20scannable%2C%20white%20background&image_size=square" alt="扫码下载 VideoSafe" class="w-48 h-48" />
          <p class="text-center mt-4 text-dark">扫码下载</p>
        </div>

        <!-- Download Buttons -->
        <div class="flex flex-col gap-6">
          <a href="#" class="btn-primary text-center text-lg py-4">
            <div class="flex items-center justify-center gap-3">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s5.373 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>从 Google Play 下载</span>
            </div>
          </a>

          <a href="#" class="btn-accent text-center text-lg py-4">
            <div class="flex items-center justify-center gap-3">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>
              <span>下载 APK 安装包</span>
            </div>
          </a>

          <div class="text-center text-dark">
            <p>版本: 2.5.0</p>
            <p class="mt-2">大小: 15.2 MB</p>
            <p class="mt-2">需要 Android 6.0 或更高版本</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>