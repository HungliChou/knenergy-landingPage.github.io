import path from 'path';
import { cpSync, existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// SPA 路由清單：在 build 後為每條路由產生實體 index.html，
// 讓 GitHub Pages 對 /contact、/services/storage 等深層連結回 200 而不是 404。
const SPA_ROUTES = [
  'rent-roof',
  'construction',
  'news',
  'ongoing-projects',
  'contact',
  'services/consulting',
  'services/construction',
  'services/application',
  'services/maintenance',
  'services/storage',
  'services/recycling',
];

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 已綁定 custom domain (www.kwenergy.com.tw)，部署在根路徑；BrowserRouter 需要絕對 base
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Copy static images (official_image) into dist on build
        {
          name: 'copy-official-image',
          apply: 'build',
          closeBundle() {
            const from = path.resolve(__dirname, 'official_image');
            const to = path.resolve(__dirname, 'dist', 'official_image');
            if (!existsSync(from)) return;
            cpSync(from, to, { recursive: true });
          },
        },
        // 為每條前端路由產生對應的實體 index.html，避免 GitHub Pages 對深層連結回 404
        {
          name: 'spa-route-fallbacks',
          apply: 'build',
          closeBundle() {
            const distDir = path.resolve(__dirname, 'dist');
            const indexHtml = path.resolve(distDir, 'index.html');
            if (!existsSync(indexHtml)) return;
            for (const route of SPA_ROUTES) {
              const targetDir = path.resolve(distDir, route);
              mkdirSync(targetDir, { recursive: true });
              copyFileSync(indexHtml, path.resolve(targetDir, 'index.html'));
            }
          },
        },
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
