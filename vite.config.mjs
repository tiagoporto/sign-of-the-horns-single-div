import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/sign-of-the-horns-single-div/',
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [ViteImageOptimizer({}), ViteMinifyPlugin({}), createHtmlPlugin()],
})
