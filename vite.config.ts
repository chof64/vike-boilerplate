import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  resolve: {
    alias: {
      "~": path.resolve(import.meta.dirname, "./src"),
      "~/convex/*": path.resolve(import.meta.dirname, "./convex"),
    },
  },
  server: {
    watch: {
      ignored: ["**/src/app/**"],
    },
  },
});
