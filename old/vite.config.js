import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Starbucks-Rewards-Page/',
  root: './src',
  publicDir: '../public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
  },
});
