import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://jeremi2626.github.io/full-stack-blog/', // Cambia esto a la ruta de tu proyecto
})
