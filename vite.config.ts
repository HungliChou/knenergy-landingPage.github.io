import path from 'path';
import { cpSync, existsSync } from 'node:fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

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
