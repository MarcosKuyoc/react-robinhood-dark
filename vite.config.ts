import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find : '@', replacement: path.resolve(__dirname, 'src')},
      {find : '@assets', replacement: path.resolve(__dirname, 'src/assets')},
      {find : '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find : '@icons', replacement: path.resolve(__dirname, 'src/icons')},
      {find : '@data', replacement: path.resolve(__dirname, 'src/data')},
      {find : '@helpers', replacement: path.resolve(__dirname, 'src/helpers')},
      {find : '@store', replacement: path.resolve(__dirname, 'src/store')}
    ]
  }
})
