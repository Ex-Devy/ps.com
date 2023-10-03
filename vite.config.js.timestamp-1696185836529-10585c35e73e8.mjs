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
        python: resolve(__vite_injected_original_dirname, "./python.html"),
        projects: resolve(__vite_injected_original_dirname, "./projects.html"),
        join_dev: resolve(__vite_injected_original_dirname, "./join_dev.html"),
        dev: resolve(__vite_injected_original_dirname, "./dev.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxQb3J0YWxTdHVkeVxcXFxQb3J0YWxTdHVkeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEb2N1bWVudHNcXFxcUG9ydGFsU3R1ZHlcXFxcUG9ydGFsU3R1ZHlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL1BvcnRhbFN0dWR5L1BvcnRhbFN0dWR5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvcHMuY29tL1wiLFxyXG4gIHBsdWdpbnM6IFtdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIC8qc29tZXRoaW5nKi9cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9pbmRleC5odG1sXCIpLFxyXG4gICAgICAgIGx1YTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9sdWEuaHRtbFwiKSxcclxuICAgICAgICByYnhfbHVhOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3JieF9sdWEuaHRtbFwiKSxcclxuICAgICAgICBodG1sOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2h0bWwuaHRtbFwiKSxcclxuICAgICAgICBleGNlbDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9leGNlbC5odG1sXCIpLFxyXG4gICAgICAgIGdpdGh1YjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9naXRodWIuaHRtbFwiKSxcclxuICAgICAgICBweXRob246IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vcHl0aG9uLmh0bWxcIiksXHJcbiAgICAgICAgcHJvamVjdHM6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vcHJvamVjdHMuaHRtbFwiKSxcclxuICAgICAgICBqb2luX2RldjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9qb2luX2Rldi5odG1sXCIpLFxyXG4gICAgICAgIGRldjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9kZXYuaHRtbFwiKSxcclxuXHJcblxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLE9BQU8saUJBQWlCO0FBQ25XLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUY3QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTLENBQUM7QUFBQSxFQUNWLFNBQVM7QUFBQTtBQUFBLEVBRVQ7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxXQUFXO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQ3ZDLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDcEMsU0FBUyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQzVDLE1BQU0sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsUUFDdEMsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxRQUN4QyxRQUFRLFFBQVEsa0NBQVcsZUFBZTtBQUFBLFFBQzFDLFFBQVEsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsUUFDMUMsVUFBVSxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLFFBQzlDLFVBQVUsUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxRQUM5QyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BR3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
