import { defineConfig } from "vite";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.js"],
    }),
  ],
});
