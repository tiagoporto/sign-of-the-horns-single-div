import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sign-of-the-horns-single-div/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
})
