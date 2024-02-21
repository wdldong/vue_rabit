import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置element plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 1、需要替换的地方开始
    Components({
      // 用sass配置主题色
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    })
    // 1、需要替换的地方结束
  ],
  resolve: {
    // 实际的路径转换
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 用sass配置主题色
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      }
    }
  }
})
