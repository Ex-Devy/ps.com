import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ps.com/",
  plugins: [],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        lua: resolve(__dirname, "./lua.html"),
        rbx_lua: resolve(__dirname, "./rbx_lua.html"),
        html: resolve(__dirname, "./html.html"),
        excel: resolve(__dirname, "./excel.html"),
        github: resolve(__dirname, "./github.html"),
        python: resolve(__dirname, "./python.html"),
        projects: resolve(__dirname, "./projects.html"),
        join_dev: resolve(__dirname, "./join_dev.html"),
        dev: resolve(__dirname, "./dev.html"),


      },
    },
  },
});