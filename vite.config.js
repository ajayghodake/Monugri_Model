import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to any port you prefer
    open: true, // Automatically opens the browser when running `npm run dev`
  }
})
