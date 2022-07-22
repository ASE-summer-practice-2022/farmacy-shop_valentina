import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.tsx"),
      },
      output: {
        chunkFileNames: "js/[name].js",
        entryFileNames: "app.js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "images/[name][extname]";
          }

          if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? "")) {
            return "fonts/[name][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "app[extname]";
          }

          return "[name][extname]";
        },
      },
    },
  },
});
