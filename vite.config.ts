import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GrupoConfianca/', // Isso faz o Vite buscar o index.css e main.tsx no lugar certo
});