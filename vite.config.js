import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./princetonhuaren.github.io/",
  plugins: [react()],
  // esbuild: {
  //   loader: "jsx",
  // },
  // resolve: {
  //   alias: {
  //     src: "/src",
  //     "./runtimeConfig": "./runtimeConfig.browser",
  //   },
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       ".js": "jsx",
  //     },
  //   },
  // },
});
