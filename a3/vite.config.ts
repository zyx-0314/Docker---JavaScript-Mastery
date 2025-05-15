import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,    // force polling
      interval: 300,       // check every 300ms
    },
    host: true,
    strictPort: true,
  },
})
