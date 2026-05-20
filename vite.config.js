import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` must match the GitHub repo name so assets resolve correctly
// when the site is served from https://<user>.github.io/3dmodelbody/
export default defineConfig({
  plugins: [react()],
  base: '/3dmodelbody/',
});
