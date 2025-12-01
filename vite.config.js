import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',   // WAJIB
      strategies: 'generateSW', // WAJIB
      manifestFilename: 'manifest.webmanifest',
      
      includeAssets: [
        'favicon.ico',
        'nba-logo.png',
        'download.png'
      ],

      manifest: {
        name: 'NBA Pedia 2025',
        short_name: 'NBA',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f4c81',
        icons: [
          { src: '/nba-logo.png', sizes: '192x192', type: 'image/png' },
          { src: '/download.png', sizes: '512x512', type: 'image/png' }
        ]
      },

      workbox: {
        navigateFallback: '/offline.html',
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'CacheFirst',
          }
        ]
      }
    })
  ]
})
