import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa"
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa"
globalThis.process = globalThis.process || __process_polyfill

import { createApp } from "/node_modules/.pnpm/vinxi@0.5.3_@types+node@22.15.3_db0@0.3.2_ioredis@5.6.1_jiti@2.4.2_terser@5.39.0_tsx@4.19.4_xml2js@0.6.2_yaml@2.7.1/node_modules/vinxi/lib/index.js?v=684697aa";
import reactRefresh from "/node_modules/.vinxi/cache/client/deps/@vitejs_plugin-react.js?v=870034ee";
import { TanStackRouterVite } from "/node_modules/.vinxi/cache/client/deps/@tanstack_router-plugin_vite.js?v=ba773ac4";
import tsConfigPaths from "/node_modules/.vinxi/cache/client/deps/vite-tsconfig-paths.js?v=58533a5a";
import { config } from "/node_modules/.pnpm/vinxi@0.5.3_@types+node@22.15.3_db0@0.3.2_ioredis@5.6.1_jiti@2.4.2_terser@5.39.0_tsx@4.19.4_xml2js@0.6.2_yaml@2.7.1/node_modules/vinxi/lib/plugins/config.js?v=684697aa";
import { env } from "/src/server/env.ts";
import { nodePolyfills } from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills.js?v=811b77b1";
import { consoleForwardPlugin } from "/vite-console-forward-plugin.ts";
export default createApp({
  server: {
    preset: "node-server",
    // change to 'netlify' or 'bun' or anyof the supported presets for nitro (nitro.unjs.io)
    experimental: {
      asyncContext: true
    }
  },
  routers: [
    {
      type: "static",
      name: "public",
      dir: "./public"
    },
    {
      type: "http",
      name: "trpc",
      base: "/trpc",
      handler: "./src/server/trpc/handler.ts",
      target: "server",
      plugins: () => [
        config("allowedHosts", {
          // @ts-ignore
          server: {
            allowedHosts: env.BASE_URL ? [env.BASE_URL.split("://")[1]] : void 0
          }
        }),
        tsConfigPaths({
          projects: ["./tsconfig.json"]
        })
      ]
    },
    {
      type: "http",
      name: "debug",
      base: "/api/debug/client-logs",
      handler: "./src/server/debug/client-logs-handler.ts",
      target: "server",
      plugins: () => [
        config("allowedHosts", {
          // @ts-ignore
          server: {
            allowedHosts: env.BASE_URL ? [env.BASE_URL.split("://")[1]] : void 0
          }
        }),
        tsConfigPaths({
          projects: ["./tsconfig.json"]
        })
      ]
    },
    {
      type: "spa",
      name: "client",
      handler: "./index.html",
      target: "browser",
      plugins: () => [
        config("allowedHosts", {
          // @ts-ignore
          server: {
            allowedHosts: env.BASE_URL ? [env.BASE_URL.split("://")[1]] : void 0
          }
        }),
        tsConfigPaths({
          projects: ["./tsconfig.json"]
        }),
        TanStackRouterVite({
          target: "react",
          autoCodeSplitting: true,
          routesDirectory: "./src/routes",
          generatedRouteTree: "./src/generated/routeTree.gen.ts"
        }),
        reactRefresh(),
        nodePolyfills(),
        consoleForwardPlugin({
          enabled: true,
          endpoint: "/api/debug/client-logs",
          levels: ["log", "warn", "error", "info", "debug"]
        })
      ]
    }
  ]
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSBcInZpbnhpXCI7XG5pbXBvcnQgcmVhY3RSZWZyZXNoIGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGVcIjtcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwidmlueGkvcGx1Z2lucy9jb25maWdcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCIuL3NyYy9zZXJ2ZXIvZW52XCI7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzXCI7XG5pbXBvcnQgeyBjb25zb2xlRm9yd2FyZFBsdWdpbiB9IGZyb20gXCIuL3ZpdGUtY29uc29sZS1mb3J3YXJkLXBsdWdpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHAoe1xuICBzZXJ2ZXI6IHtcbiAgICBwcmVzZXQ6IFwibm9kZS1zZXJ2ZXJcIiwgLy8gY2hhbmdlIHRvICduZXRsaWZ5JyBvciAnYnVuJyBvciBhbnlvZiB0aGUgc3VwcG9ydGVkIHByZXNldHMgZm9yIG5pdHJvIChuaXRyby51bmpzLmlvKVxuICAgIGV4cGVyaW1lbnRhbDoge1xuICAgICAgYXN5bmNDb250ZXh0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHJvdXRlcnM6IFtcbiAgICB7XG4gICAgICB0eXBlOiBcInN0YXRpY1wiLFxuICAgICAgbmFtZTogXCJwdWJsaWNcIixcbiAgICAgIGRpcjogXCIuL3B1YmxpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJodHRwXCIsXG4gICAgICBuYW1lOiBcInRycGNcIixcbiAgICAgIGJhc2U6IFwiL3RycGNcIixcbiAgICAgIGhhbmRsZXI6IFwiLi9zcmMvc2VydmVyL3RycGMvaGFuZGxlci50c1wiLFxuICAgICAgdGFyZ2V0OiBcInNlcnZlclwiLFxuICAgICAgcGx1Z2luczogKCkgPT4gW1xuICAgICAgICBjb25maWcoXCJhbGxvd2VkSG9zdHNcIiwge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGFsbG93ZWRIb3N0czogZW52LkJBU0VfVVJMXG4gICAgICAgICAgICAgID8gW2Vudi5CQVNFX1VSTC5zcGxpdChcIjovL1wiKVsxXV1cbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHRzQ29uZmlnUGF0aHMoe1xuICAgICAgICAgIHByb2plY3RzOiBbXCIuL3RzY29uZmlnLmpzb25cIl0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiaHR0cFwiLFxuICAgICAgbmFtZTogXCJkZWJ1Z1wiLFxuICAgICAgYmFzZTogXCIvYXBpL2RlYnVnL2NsaWVudC1sb2dzXCIsXG4gICAgICBoYW5kbGVyOiBcIi4vc3JjL3NlcnZlci9kZWJ1Zy9jbGllbnQtbG9ncy1oYW5kbGVyLnRzXCIsXG4gICAgICB0YXJnZXQ6IFwic2VydmVyXCIsXG4gICAgICBwbHVnaW5zOiAoKSA9PiBbXG4gICAgICAgIGNvbmZpZyhcImFsbG93ZWRIb3N0c1wiLCB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgYWxsb3dlZEhvc3RzOiBlbnYuQkFTRV9VUkxcbiAgICAgICAgICAgICAgPyBbZW52LkJBU0VfVVJMLnNwbGl0KFwiOi8vXCIpWzFdXVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdHNDb25maWdQYXRocyh7XG4gICAgICAgICAgcHJvamVjdHM6IFtcIi4vdHNjb25maWcuanNvblwiXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJzcGFcIixcbiAgICAgIG5hbWU6IFwiY2xpZW50XCIsXG4gICAgICBoYW5kbGVyOiBcIi4vaW5kZXguaHRtbFwiLFxuICAgICAgdGFyZ2V0OiBcImJyb3dzZXJcIixcbiAgICAgIHBsdWdpbnM6ICgpID0+IFtcbiAgICAgICAgY29uZmlnKFwiYWxsb3dlZEhvc3RzXCIsIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBhbGxvd2VkSG9zdHM6IGVudi5CQVNFX1VSTFxuICAgICAgICAgICAgICA/IFtlbnYuQkFTRV9VUkwuc3BsaXQoXCI6Ly9cIilbMV1dXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB0c0NvbmZpZ1BhdGhzKHtcbiAgICAgICAgICBwcm9qZWN0czogW1wiLi90c2NvbmZpZy5qc29uXCJdLFxuICAgICAgICB9KSxcbiAgICAgICAgVGFuU3RhY2tSb3V0ZXJWaXRlKHtcbiAgICAgICAgICB0YXJnZXQ6IFwicmVhY3RcIixcbiAgICAgICAgICBhdXRvQ29kZVNwbGl0dGluZzogdHJ1ZSxcbiAgICAgICAgICByb3V0ZXNEaXJlY3Rvcnk6IFwiLi9zcmMvcm91dGVzXCIsXG4gICAgICAgICAgZ2VuZXJhdGVkUm91dGVUcmVlOiBcIi4vc3JjL2dlbmVyYXRlZC9yb3V0ZVRyZWUuZ2VuLnRzXCIsXG4gICAgICAgIH0pLFxuICAgICAgICByZWFjdFJlZnJlc2goKSxcbiAgICAgICAgbm9kZVBvbHlmaWxscygpLFxuICAgICAgICBjb25zb2xlRm9yd2FyZFBsdWdpbih7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBlbmRwb2ludDogXCIvYXBpL2RlYnVnL2NsaWVudC1sb2dzXCIsXG4gICAgICAgICAgbGV2ZWxzOiBbXCJsb2dcIiwgXCJ3YXJuXCIsIFwiZXJyb3JcIiwgXCJpbmZvXCIsIFwiZGVidWdcIl0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTLGlCQUFpQjtBQUMxQixPQUFPLGtCQUFrQjtBQUN6QixTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGNBQWM7QUFDdkIsU0FBUyxXQUFXO0FBQ3BCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsNEJBQTRCO0FBRXJDLGVBQWUsVUFBVTtBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQTtBQUFBLElBQ1IsY0FBYztBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsU0FBUyxNQUFNO0FBQUEsUUFDYixPQUFPLGdCQUFnQjtBQUFBO0FBQUEsVUFFckIsUUFBUTtBQUFBLFlBQ04sY0FBYyxJQUFJLFdBQ2QsQ0FBQyxJQUFJLFNBQVMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQzdCO0FBQUEsVUFDTjtBQUFBLFFBQ0YsQ0FBQztBQUFBLFFBQ0QsY0FBYztBQUFBLFVBQ1osVUFBVSxDQUFDLGlCQUFpQjtBQUFBLFFBQzlCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVMsTUFBTTtBQUFBLFFBQ2IsT0FBTyxnQkFBZ0I7QUFBQTtBQUFBLFVBRXJCLFFBQVE7QUFBQSxZQUNOLGNBQWMsSUFBSSxXQUNkLENBQUMsSUFBSSxTQUFTLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUM3QjtBQUFBLFVBQ047QUFBQSxRQUNGLENBQUM7QUFBQSxRQUNELGNBQWM7QUFBQSxVQUNaLFVBQVUsQ0FBQyxpQkFBaUI7QUFBQSxRQUM5QixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixTQUFTLE1BQU07QUFBQSxRQUNiLE9BQU8sZ0JBQWdCO0FBQUE7QUFBQSxVQUVyQixRQUFRO0FBQUEsWUFDTixjQUFjLElBQUksV0FDZCxDQUFDLElBQUksU0FBUyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsSUFDN0I7QUFBQSxVQUNOO0FBQUEsUUFDRixDQUFDO0FBQUEsUUFDRCxjQUFjO0FBQUEsVUFDWixVQUFVLENBQUMsaUJBQWlCO0FBQUEsUUFDOUIsQ0FBQztBQUFBLFFBQ0QsbUJBQW1CO0FBQUEsVUFDakIsUUFBUTtBQUFBLFVBQ1IsbUJBQW1CO0FBQUEsVUFDbkIsaUJBQWlCO0FBQUEsVUFDakIsb0JBQW9CO0FBQUEsUUFDdEIsQ0FBQztBQUFBLFFBQ0QsYUFBYTtBQUFBLFFBQ2IsY0FBYztBQUFBLFFBQ2QscUJBQXFCO0FBQUEsVUFDbkIsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1YsUUFBUSxDQUFDLE9BQU8sUUFBUSxTQUFTLFFBQVEsT0FBTztBQUFBLFFBQ2xELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsIm5hbWVzIjpbXX0=