/* eslint-disable no-undef */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const baseUrl = {
  dev: "./",
  uat: "./",
  pro: "./",
};

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue(), vueJsx()],
    base: baseUrl[mode],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    server: {
      hmr: true,
      open: true,
    },
  });
