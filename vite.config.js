import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const themeName = 'brm-101'

function removeHtmlFromBuild() {
  return {
    name: 'remove-html',
    generateBundle(_, bundle) {
      for (const file in bundle) {
        if (file.endsWith('.html')) {
          delete bundle[file]
        }
      }
    },
  }
}

function deleteHtmlFilesFromDist(distPath) {
  return {
    name: 'delete-html-files',
    closeBundle() {
      const htmlPath = path.join(distPath, 'index.html')
      if (fs.existsSync(htmlPath)) {
        fs.unlinkSync(htmlPath)
        console.log('✔ index.html removed from output')
      }
    },
  }
}

export default defineConfig({
  base: './',
  root: 'src',
	publicDir: '../public',
	plugins: [
		removeHtmlFromBuild(),
		deleteHtmlFilesFromDist(resolve(__dirname, `wp/wp-content/themes/${themeName}`))
	],
  build: {
    emptyOutDir: false,
    outDir: `../wp/wp-content/themes/${themeName}`,
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
