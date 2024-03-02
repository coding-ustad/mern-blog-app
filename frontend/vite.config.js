import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   build: {
    outDir: 'dist',
 },
  server :{
    proxy: {
      '/api' :{
        target: 'https://mern-blog-app-pi.vercel.app/',
        secure : false,
      },
    },
  },
  plugins: [react()],
})
