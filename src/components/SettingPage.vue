<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type ConfigItem = {
  key: string;
  value: string;
};

type VersionRule = {
  platform: string;
  version: string;
  hidden: boolean | number;
};

const ACCESS_PASSWORD = 'wufuxi@163.com';
const CONFIG_MANAGE_ENDPOINT = '/api/config/manage';
const VERSION_CONTROL_ENDPOINT = '/api/config/version-control';
const AUTH_STORAGE_KEY = 'videosafe_setting_authorized';

const booleanKeys = new Set([
  'dl_show',
]);

const fieldLabels: Record<string, string> = {
  dl_show: 'dl_show',
  support_email: '反馈邮箱',
  support_share_url: '分享地址',
};

const password = ref('');
const passwordError = ref('');
const isAuthorized = ref(sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true');
const isLoading = ref(false);
const isSaving = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const configItems = ref<ConfigItem[]>([]);
const versionRules = ref<VersionRule[]>([]);
const versionForm = ref({
  platform: 'ios',
  version: '',
  hidden: true,
});
const lastLoadedAt = ref('');

const getRequestHeaders = () => ({
  'X-VideoSafe-Setting-Password': ACCESS_PASSWORD,
});

const sortedConfigItems = computed(() => {
  const order = Object.keys(fieldLabels);
  return configItems.value.filter((item) => order.includes(item.key)).sort((a, b) => {
    const aIndex = order.indexOf(a.key);
    const bIndex = order.indexOf(b.key);

    if (aIndex === -1 && bIndex === -1) {
      return a.key.localeCompare(b.key);
    }

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
});

const booleanItems = computed(() => sortedConfigItems.value.filter((item) => booleanKeys.has(item.key)));
const textItems = computed(() => sortedConfigItems.value.filter((item) => !booleanKeys.has(item.key)));

const sortedVersionRules = computed(() =>
  [...versionRules.value].sort((a, b) => `${a.platform}-${a.version}`.localeCompare(`${b.platform}-${b.version}`)),
);

const getLabel = (key: string) => fieldLabels[key] || key;

const getInputType = (key: string) => {
  if (key.includes('email')) return 'email';
  if (key.includes('url')) return 'url';
  return 'text';
};

const updateItemValue = (key: string, value: string) => {
  const target = configItems.value.find((item) => item.key === key);
  if (target) {
    target.value = value;
  }
};

const normalizeHidden = (hidden: boolean | number) => hidden === true || hidden === 1;

const loadConfig = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch(CONFIG_MANAGE_ENDPOINT, {
      headers: getRequestHeaders(),
    });
    const data = await response.json();

    if (!response.ok || !data.success || !Array.isArray(data.config)) {
      throw new Error(data.error || '配置读取失败');
    }

    configItems.value = data.config.map((item: ConfigItem) => ({
      key: item.key,
      value: String(item.value ?? ''),
    }));
    lastLoadedAt.value = new Date().toLocaleString('zh-CN', { hour12: false });
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '配置读取失败';
  } finally {
    isLoading.value = false;
  }
};

const loadVersionRules = async () => {
  const response = await fetch(VERSION_CONTROL_ENDPOINT, {
    headers: getRequestHeaders(),
  });
  const data = await response.json();

  if (!response.ok || !data.success || !Array.isArray(data.rules)) {
    throw new Error(data.error || '版本控制规则读取失败');
  }

  versionRules.value = data.rules.map((rule: VersionRule) => ({
    platform: String(rule.platform),
    version: String(rule.version),
    hidden: normalizeHidden(rule.hidden),
  }));
};

const loadAll = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    await Promise.all([loadConfig(), loadVersionRules()]);
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '配置读取失败';
  } finally {
    isLoading.value = false;
  }
};

const saveConfig = async () => {
  isSaving.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch(CONFIG_MANAGE_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getRequestHeaders(),
      },
      body: JSON.stringify({ items: configItems.value }),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || '配置保存失败');
    }

    successMessage.value = `已保存 ${data.updated ?? configItems.value.length} 项配置`;
    await loadConfig();
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '配置保存失败';
  } finally {
    isSaving.value = false;
  }
};

const saveVersionRule = async () => {
  const platform = versionForm.value.platform.trim().toLowerCase();
  const version = versionForm.value.version.trim();

  if (!platform || !version) {
    errorMessage.value = '请填写平台和版本号';
    successMessage.value = '';
    return;
  }

  isSaving.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch(VERSION_CONTROL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getRequestHeaders(),
      },
      body: JSON.stringify({
        platform,
        version,
        hidden: versionForm.value.hidden,
      }),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || '版本控制规则保存失败');
    }

    successMessage.value = `${platform} ${version} 的 dl_show 规则已保存`;
    versionForm.value.version = '';
    await loadVersionRules();
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '版本控制规则保存失败';
  } finally {
    isSaving.value = false;
  }
};

const editVersionRule = (rule: VersionRule) => {
  versionForm.value = {
    platform: rule.platform,
    version: rule.version,
    hidden: normalizeHidden(rule.hidden),
  };
};

const deleteVersionRule = async (rule: VersionRule) => {
  isSaving.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch(VERSION_CONTROL_ENDPOINT, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...getRequestHeaders(),
      },
      body: JSON.stringify({
        platform: rule.platform,
        version: rule.version,
      }),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || '版本控制规则删除失败');
    }

    successMessage.value = `${rule.platform} ${rule.version} 的 dl_show 规则已删除`;
    await loadVersionRules();
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '版本控制规则删除失败';
  } finally {
    isSaving.value = false;
  }
};

const login = () => {
  passwordError.value = '';

  if (password.value !== ACCESS_PASSWORD) {
    passwordError.value = '访问密码不正确';
    return;
  }

  sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
  isAuthorized.value = true;
  void loadAll();
};

const logout = () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  isAuthorized.value = false;
  password.value = '';
  configItems.value = [];
  versionRules.value = [];
};

onMounted(() => {
  if (isAuthorized.value) {
    void loadAll();
  }
});
</script>

<template>
  <main class="min-h-screen bg-bg text-text">
    <section v-if="!isAuthorized" class="flex min-h-screen items-center justify-center px-4 py-10">
      <div class="w-full max-w-md rounded-lg border border-border bg-surface p-6 shadow-2xl shadow-black/30">
        <div class="mb-8">
          <p class="mb-2 text-sm font-medium text-primary">VideoSafe</p>
          <h1 class="text-2xl font-semibold text-text">配置管理</h1>
          <p class="mt-3 text-sm leading-6 text-muted">请输入访问密码后继续。</p>
        </div>

        <form class="space-y-5" @submit.prevent="login">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-text">访问密码</span>
            <input
              v-model="password"
              class="w-full rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              type="password"
              autocomplete="current-password"
              autofocus
            />
          </label>

          <p v-if="passwordError" class="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-red-200">
            {{ passwordError }}
          </p>

          <button class="btn-primary w-full" type="submit">进入配置页面</button>
        </form>
      </div>
    </section>

    <section v-else class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 md:px-6">
      <header class="mb-8 flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="mb-2 text-sm font-medium text-primary">VideoSafe Admin</p>
          <h1 class="text-3xl font-semibold text-text">应用配置</h1>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">
            普通配置写入 app_config；dl_show 由配置值和平台版本规则共同决定。
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="btn-secondary px-4 py-2 text-sm" type="button" :disabled="isLoading" @click="loadAll">
            {{ isLoading ? '刷新中' : '刷新' }}
          </button>
          <button class="btn-primary px-4 py-2 text-sm" type="button" :disabled="isSaving || isLoading" @click="saveConfig">
            {{ isSaving ? '保存中' : '保存配置' }}
          </button>
          <button class="btn-accent px-4 py-2 text-sm" type="button" @click="logout">退出</button>
        </div>
      </header>

      <div class="mb-6 grid gap-3">
        <p v-if="lastLoadedAt" class="text-sm text-muted">最后读取：{{ lastLoadedAt }}</p>
        <p v-if="errorMessage" class="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-red-200">
          {{ errorMessage }}
        </p>
        <p v-if="successMessage" class="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          {{ successMessage }}
        </p>
      </div>

      <div v-if="isLoading && !configItems.length" class="rounded-lg border border-border bg-surface p-8 text-center text-muted">
        正在读取配置...
      </div>

      <div v-else class="grid gap-6">
        <section class="rounded-lg border border-border bg-surface p-5">
          <h2 class="mb-5 text-lg font-semibold text-text">功能开关</h2>
          <div class="grid gap-3 md:grid-cols-2">
            <label
              v-for="item in booleanItems"
              :key="item.key"
              class="flex items-center justify-between gap-4 rounded-lg border border-border bg-dark px-4 py-4"
            >
              <span>
                <span class="block text-sm font-medium text-text">{{ getLabel(item.key) }}</span>
                <span class="mt-1 block break-all text-xs text-muted">{{ item.key }}</span>
              </span>
              <input
                class="h-5 w-5 accent-primary"
                type="checkbox"
                :checked="item.value === 'true'"
                @change="updateItemValue(item.key, ($event.target as HTMLInputElement).checked ? 'true' : 'false')"
              />
            </label>
          </div>
        </section>

        <section class="rounded-lg border border-border bg-surface p-5">
          <h2 class="mb-5 text-lg font-semibold text-text">文本配置</h2>
          <div class="grid gap-5">
            <label v-for="item in textItems" :key="item.key" class="block">
              <span class="mb-2 block text-sm font-medium text-text">{{ getLabel(item.key) }}</span>
              <textarea
                v-if="item.key === 'update_message'"
                class="min-h-28 w-full resize-y rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                :value="item.value"
                @input="updateItemValue(item.key, ($event.target as HTMLTextAreaElement).value)"
              />
              <input
                v-else
                class="w-full rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                :type="getInputType(item.key)"
                :value="item.value"
                @input="updateItemValue(item.key, ($event.target as HTMLInputElement).value)"
              />
              <span class="mt-2 block break-all text-xs text-muted">{{ item.key }}</span>
            </label>
          </div>
        </section>

        <section class="rounded-lg border border-border bg-surface p-5">
          <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 class="text-lg font-semibold text-text">dl_show 版本控制</h2>
              <p class="mt-2 text-sm text-muted">命中平台和版本时，接口返回的 features.dl_show 会变为 false。</p>
            </div>
          </div>

          <form class="grid gap-4 border-b border-border pb-5 md:grid-cols-[160px_1fr_180px_auto]" @submit.prevent="saveVersionRule">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text">平台</span>
              <select
                v-model="versionForm.platform"
                class="w-full rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              >
                <option value="ios">ios</option>
                <option value="android">android</option>
              </select>
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text">版本号</span>
              <input
                v-model="versionForm.version"
                class="w-full rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                type="text"
                placeholder="1.0.0"
              />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text">下载入口</span>
              <select
                v-model="versionForm.hidden"
                class="w-full rounded-lg border border-border bg-dark px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              >
                <option :value="true">隐藏</option>
                <option :value="false">显示</option>
              </select>
            </label>

            <button class="btn-primary self-end px-4 py-3 text-sm" type="submit" :disabled="isSaving">
              保存规则
            </button>
          </form>

          <div v-if="!sortedVersionRules.length" class="py-6 text-sm text-muted">
            暂无版本控制规则。
          </div>

          <div v-else class="mt-5 overflow-x-auto">
            <table class="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead class="text-muted">
                <tr class="border-b border-border">
                  <th class="py-3 pr-4 font-medium">平台</th>
                  <th class="py-3 pr-4 font-medium">版本</th>
                  <th class="py-3 pr-4 font-medium">dl_show</th>
                  <th class="py-3 text-right font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rule in sortedVersionRules" :key="`${rule.platform}-${rule.version}`" class="border-b border-border/70">
                  <td class="py-3 pr-4 text-text">{{ rule.platform }}</td>
                  <td class="py-3 pr-4 text-text">{{ rule.version }}</td>
                  <td class="py-3 pr-4">
                    <span
                      class="inline-flex rounded-lg border px-3 py-1 text-xs"
                      :class="normalizeHidden(rule.hidden) ? 'border-accent/40 bg-accent/10 text-red-100' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-100'"
                    >
                      {{ normalizeHidden(rule.hidden) ? '隐藏下载入口' : '显示下载入口' }}
                    </span>
                  </td>
                  <td class="py-3 text-right">
                    <button class="btn-secondary mr-2 px-3 py-2 text-xs" type="button" @click="editVersionRule(rule)">
                      编辑
                    </button>
                    <button class="btn-accent px-3 py-2 text-xs" type="button" :disabled="isSaving" @click="deleteVersionRule(rule)">
                      删除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
