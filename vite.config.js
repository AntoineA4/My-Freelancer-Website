import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const toSassPath = (p) => p.replace(/\\/g, '/')

export default defineConfig({
  plugins: [react()],
  base: "/My-Freelancer-Website/",
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'global-builtin'],
        additionalData: `
          @import "${toSassPath(resolve(__dirname, 'src/styles/_variables.scss'))}";
          @import "${toSassPath(resolve(__dirname, 'src/styles/_animations.scss'))}";
          @import "${toSassPath(resolve(__dirname, 'src/styles/_mixinHero.scss'))}";
        `
      }
    }
  }
})