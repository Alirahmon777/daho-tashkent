import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      static: path.resolve(__dirname, './src/static'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
