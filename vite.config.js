import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: 'dist', // Ensure this matches the Netlify publish directory
  },
});
