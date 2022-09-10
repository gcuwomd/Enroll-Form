import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      external:['canvas-confetti'],
      plugins:[
        externalGlobals({
          'canvas-confetti':'confetti'
        })
      ]
    }
  }
})
