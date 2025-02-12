import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: 'dist', 
  },
  server: {
    host: true, // يسمح للتطبيق بالعمل على 0.0.0.0
    port: process.env.PORT || 4000, // يستخدم المنفذ المخصص من Render
    strictPort: true, // يمنع Vite من التغيير التلقائي للمنفذ
    cors: true, // يسمح للطلبات عبر المواقع المختلفة (CORS)
  },
  preview: {
    allowedHosts: ['predict-startup-frontend.onrender.com'], // السماح لموقع Render
  },
});
