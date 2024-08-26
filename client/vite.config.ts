import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
