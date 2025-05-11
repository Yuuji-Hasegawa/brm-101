import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  root: 'src',
  publicDir: '../public',
  build: {
    emptyOutDir: false,
    outDir: '../dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
      output: {
        entryFileNames: `js/app.js`,
        assetFileNames: (assetInfo) => {
          let name = assetInfo.names?.[0] || 'default'
          let extType = name.split('.').at(-1).toLowerCase()
          if (/png|jpe?g|gif|svg|webp|avif|tiff|bmp|ico/i.test(extType)) {
            return 'img/[name].[extname]'
          } else if (/woff2?|ttf|eot/i.test(extType)) {
            return 'fonts/[name].[extname]'
          } else if (/css/i.test(extType)) {
            return 'css/style.css'
          } else {
            return 'assets/[name].[extname]'
          }
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
