import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: "dist",
    sourcemap: "hidden",
    target: "esnext"
  },

  clearScreen: false,

  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
