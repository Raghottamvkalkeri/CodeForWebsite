import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    // 👇 Base path depends on mode
    base: mode === 'dev' ? '/dev/' : '/website/',
    build: {
      // 👇 Output folder name depends on mode
      outDir: mode === 'dev' ? 'dist-dev' : 'dist-website',
      emptyOutDir: true, // clears old files before building
    },
    define: {
      'import.meta.env.VITE_ENV': JSON.stringify(mode), // ✅ pass mode to app
    },
  }
}