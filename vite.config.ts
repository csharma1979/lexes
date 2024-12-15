import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 30002, // Replace 3001 with your desired port number
  },
});
