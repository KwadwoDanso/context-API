import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Allow importing relative files without writing .jsx every time
    extensions: [".js", ".jsx", ".json"],
  },
});