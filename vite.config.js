import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, //for ts
    testMatch: ['**/*.test.jsx'],
    environment: 'jsdom',
    setupFiles: '/vitest.setup.js',
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    server: {
      deps: {
        inline: ['@firebase/auth'],
      },
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
});
