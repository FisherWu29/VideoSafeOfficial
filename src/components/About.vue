<script setup lang="ts">



</script>

<template>
  <section id="about" class="section-padding bg-secondary">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">关于 VideoSafe</h2>
        <p class="section-subtitle">了解我们的团队、使命和愿景</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Mission & Vision -->
        <div class="lg:w-2/3">
          <div class="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
            <h3 class="text-2xl font-bold mb-4 text-primary">我们的使命</h3>
            <p class="text-dark mb-6">
              我们致力于为用户提供最安全、最私密的视频管理解决方案，保护用户的隐私和数据安全。通过不断创新和优化，我们希望成为用户信赖的数字隐私守护者。
            </p>
            <p class="text-dark">
              我们相信，每个人都有权利保护自己的隐私，尤其是在数字时代，个人数据的安全变得越来越重要。VideoSafe 的诞生就是为了满足这一需求，让用户可以放心地管理和存储自己的视频内容。
            </p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 class="text-2xl font-bold mb-4 text-primary">我们的愿景</h3>
            <p class="text-dark mb-6">
              成为全球领先的隐私保护应用开发商，为用户提供全方位的数字隐私解决方案。我们希望通过技术创新，让每个人都能在数字世界中享受安全、自由的体验。
            </p>
            <p class="text-dark">
              未来，我们将继续探索新的技术和功能，不断提升产品的安全性和用户体验，为用户创造更多价值。我们相信，只有专注于用户需求，才能打造出真正优秀的产品。
            </p>
          </div>
        </div>

        <!-- Team & Contact -->
        <div class="lg:w-1/3">
          <div class="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
            <h3 class="text-2xl font-bold mb-4 text-primary">联系我们</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-dark">contact@videosafe.com</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="text-dark">+86 123 4567 8910</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-dark">北京市海淀区中关村科技园区</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 class="text-2xl font-bold mb-4 text-primary">关注我们</h3>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>