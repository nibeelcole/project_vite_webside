import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 开发服务器配置（端口号默认：3000）
  server: {
    port: 11000,
  },
});
