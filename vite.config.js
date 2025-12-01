// vite.config.js
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'LOGORN.png'],
    
    manifest: {
      "name": "NBA Pedia 2025",
      "short_name": "NBA",
      "start_url": "https://ta-prak-ppb-nba-pedia-muhammad-rafi.vercel.app/",
      "scope": "https://ta-prak-ppb-nba-pedia-muhammad-rafi.vercel.app/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#0f4c81",
      "icons": [
        {
          "src": "/download.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/download.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },

    workbox: {
      globPatterns: ['/*.{js,css,html,svg,png,ico,jpg,jpeg}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      // TAMBAHKAN BARIS INI: Izinkan file hingga 5 MB
      maximumFileSizeToCacheInBytes: 5000000, 
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})