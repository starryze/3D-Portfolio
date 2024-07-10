import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' && process.env.NODE_ENV !== 'production' ? '/3D-Portfolio/' : '/',
    plugins: [react()],
  };
});
