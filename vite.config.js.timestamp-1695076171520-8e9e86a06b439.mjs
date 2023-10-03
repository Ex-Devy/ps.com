// vite.config.js
import tailwindcss from "file:///C:/Users/user/Documents/PortalStudy/PortalStudy/node_modules/tailwindcss/lib/index.js";
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/user/Documents/PortalStudy/PortalStudy/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\Documents\\PortalStudy\\PortalStudy";
var vite_config_default = defineConfig({
  base: "/ps.com/",
  plugins: [],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "./index.html"),
        lua: resolve(__vite_injected_original_dirname, "./lua.html"),
        rbx_lua: resolve(__vite_injected_original_dirname, "./rbx_lua.html"),
        html: resolve(__vite_injected_original_dirname, "./html.html"),
        excel: resolve(__vite_injected_original_dirname, "./excel.html"),
        github: resolve(__vite_injected_original_dirname, "./github.html"),
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxQb3J0YWxTdHVkeVxcXFxQb3J0YWxTdHVkeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEb2N1bWVudHNcXFxcUG9ydGFsU3R1ZHlcXFxcUG9ydGFsU3R1ZHlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL1BvcnRhbFN0dWR5L1BvcnRhbFN0dWR5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvcHMuY29tL1wiLFxyXG4gIHBsdWdpbnM6IFtdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIC8qc29tZXRoaW5nKi9cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9pbmRleC5odG1sXCIpLFxyXG4gICAgICAgIGx1YTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9sdWEuaHRtbFwiKSxcclxuICAgICAgICByYnhfbHVhOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3JieF9sdWEuaHRtbFwiKSxcclxuICAgICAgICBodG1sOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2h0bWwuaHRtbFwiKSxcclxuICAgICAgICBleGNlbDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9leGNlbC5odG1sXCIpLFxyXG5cclxuXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsT0FBTyxpQkFBaUI7QUFDblcsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBRjdCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQztBQUFBLEVBQ1YsU0FBUztBQUFBO0FBQUEsRUFFVDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFdBQVc7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsUUFDdkMsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUNwQyxTQUFTLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsUUFDNUMsTUFBTSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxRQUN0QyxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BRzFDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
