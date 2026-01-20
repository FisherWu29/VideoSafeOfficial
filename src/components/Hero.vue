<script setup lang="ts">



</script>

<template>
  <section id="home" class="pt-32 pb-20 md:pt-40 md:pb-32 bg-secondary">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span class="text-primary">VideoSafe</span> - 您的私人视频保险箱
          </h1>
          
          <p class="text-xl md:text-2xl text-dark mb-8">
            安全加密、隐私保护、视频下载、媒体管理、隐匿拍摄痕迹，一站式解决方案
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
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">100万+</div>
              <div class="text-dark">用户下载</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">4.8</div>
              <div class="text-dark">应用评分</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">50万+</div>
              <div class="text-dark">好评率</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">24/7</div>
              <div class="text-dark">技术支持</div>
            </div>
          </div>
        </div>
        
        <!-- Image Content -->
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
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