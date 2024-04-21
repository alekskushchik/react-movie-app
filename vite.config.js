import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import eslint from 'vite-plugin-eslint';

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  build: {
    outDir: "build", // specify the output directory
    emptyOutDir: true, // remove contents of output directory before building
    manifest: false, // generate manifest.json file
    rollupOptions: {
      // customize output options
      output: {
        entryFileNames: "js/main.js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|webp|webm|mp3|tiff|bmp|ico)$/.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`;
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name][extname]`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
  server: {
    port: 3000,
  },
});
