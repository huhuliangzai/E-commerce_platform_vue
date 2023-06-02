import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: '0.0.0.0',
    // host: '127.0.0.1',
    port: 3000,
  },
  // proxy: {
  //   "/api":{
  //     target: 'http://localhost:8080/',      //后端接口的根目录
  //     changeOrigin: true,                    //是否跨域
  //     pathRewrite: {
  //         '^/api': '/'
  //     }
  //   }
  // }
})
