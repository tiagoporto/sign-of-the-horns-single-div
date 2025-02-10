import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  base: '/sign-of-the-horns-single-div/',
  root: './src',
  publicDir: '../public',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [ViteImageOptimizer({}), ViteMinifyPlugin({}), createHtmlPlugin()],
})
