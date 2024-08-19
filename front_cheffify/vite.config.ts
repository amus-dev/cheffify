import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@templates": path.resolve(__dirname, "./src/templates"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@sections": path.resolve(__dirname, "./src/sections"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split(".").pop() || ""; // Proveer un valor predeterminado
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(extType)) {
            return `assets/images/[name].[ext]`;
          }
          return `assets/[name].[ext]`;
        },
      },
    },
  },
});
