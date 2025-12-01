import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // auto update SW
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
        orientation: 'portrait',
        description: 'Informasi NBA lengkap dengan jadwal, standings, statistik dan roster tim',
        icons: [
          { src: 'nba-logo.png', sizes: '192x192', type: 'image/png' },
          { src: 'download.png', sizes: '512x512', type: 'image/png' }
        ]
      },

      // Offline caching settings
      workbox: {
        navigateFallback: '/offline.html', // halaman fallback offline
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'CacheFirst',
            options: {
              cacheName: 'nba-static-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          },
          {
            urlPattern: /^https:\/\/[a-zA-Z0-9-.]+\.supabase\.co\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'nba-supabase-cache',
              networkTimeoutSeconds: 3,
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 }
            }
          },
        ]
      }
    })
  ]
})
