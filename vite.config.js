import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');
const pathSrc = path.resolve(__dirname, "./src");

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "${pathSrc}/assets/style/main.scss";`
      }
    },
  },
  plugins: [
    vue()
  ]
})
