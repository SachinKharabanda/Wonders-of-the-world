import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Wonders-of-the-world/',
  plugins: [plugin()],
    server: {
        port: 50232,
    }
})
