import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3D-Portfolio/', // Ensure this matches the deployment path
  plugins: [react()],
});
