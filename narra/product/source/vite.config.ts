import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  // Relative asset paths so the built page in dist/ also works when opened
  // directly from the filesystem (file://), not just when served over HTTP.
  base: './',
  plugins: [react(), tailwindcss()],
});
