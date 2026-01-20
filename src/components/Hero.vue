<script setup lang="ts">



</script>

<template>
  <section id="home" class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-bg">
    <div class="absolute inset-0 bg-grid opacity-60"></div>
    <div class="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
    <div class="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
    <div class="container relative mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text">
            <span class="text-primary">VideoSafe</span>，更私密的视频与相册保险箱
          </h1>
          
          <p class="text-xl md:text-2xl text-muted mb-8">
            本地加密存储、伪装模式、入侵抓拍与多平台视频下载，一站式隐私与媒体管理方案
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#download" class="btn-primary text-center">
              立即下载
            </a>
            <a href="#features" class="btn-accent text-center">
              了解更多
            </a>
          </div>
          
          <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div class="surface surface-hover px-5 py-4 text-center">
              <div class="text-3xl font-bold text-text mb-1">100万+</div>
              <div class="text-sm text-muted">用户下载</div>
            </div>
            <div class="surface surface-hover px-5 py-4 text-center">
              <div class="text-3xl font-bold text-text mb-1">4.8</div>
              <div class="text-sm text-muted">应用评分</div>
            </div>
            <div class="surface surface-hover px-5 py-4 text-center">
              <div class="text-3xl font-bold text-text mb-1">50万+</div>
              <div class="text-sm text-muted">好评率</div>
            </div>
            <div class="surface surface-hover px-5 py-4 text-center">
              <div class="text-3xl font-bold text-text mb-1">24/7</div>
              <div class="text-sm text-muted">技术支持</div>
            </div>
          </div>
        </div>
        
        <!-- Image Content -->
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
            <div class="relative surface overflow-hidden shadow-[0_30px_80px_-50px_rgba(124,58,237,0.9)]">
              <img 
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=VideoSafe%20app%20interface%20showing%20secure%20gallery%20and%20video%20download%20features%2C%20modern%20UI%2C%20dark%20theme&image_size=landscape_16_9" 
                alt="VideoSafe 应用界面" 
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
