import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove the base path configuration
  // base: '/3D-Portfolio/', // This should not be set for Heroku
  build: {
    outDir: 'dist'
  }
})
