import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // base: "/to-deploy-mh/"    --**-- lo cambié para ver si entra directo al menu ppal
  base: "/"
})
