import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "/studioLV/",
    plugins: [react({ include: "**/*.{jsx,js}" })],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: "index.html",
        },
      },
    },
  };
});
