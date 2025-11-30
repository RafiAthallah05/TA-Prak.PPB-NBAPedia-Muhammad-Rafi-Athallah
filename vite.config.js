import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // supaya SW juga aktif di mode dev (optional)
      },

      includeAssets: [
        'favicon.ico',
        'icon-192.png',
        'icon-512.png'
      ],

      manifest: {
        name: 'NBA Pedia 2025',
        short_name: 'NBA-Pedia',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f4c81',
        orientation: 'portrait',
        description: 'Informasi NBA lengkap dengan standings, jadwal, statistik dan roster tim',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },

      workbox: {
        navigateFallback: '/offline.html',

        runtimeCaching: [
          // Cache html/js/css/image static (UI offline)
          {
            urlPattern: ({ request }) =>
              request.destination === 'document' ||
              request.destination === 'script' ||
              request.destination === 'style' ||
              request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'nba-static-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 hari
              }
            }
          },

          // Supabase API: selalu coba network dulu
          {
            urlPattern: /^https:\/\/[a-zA-Z0-9.-]+\.supabase\.co\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'nba-supabase-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 minggu
              }
            }
          }
        ]
      }
    })
  ]
})
