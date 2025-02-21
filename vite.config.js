import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Proyecto_REACT.io/' // Asegúrate de que coincida con el nombre de tu repo
});
