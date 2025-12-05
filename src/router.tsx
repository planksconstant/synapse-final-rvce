import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa"
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa"
globalThis.process = globalThis.process || __process_polyfill

import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vinxi/cache/client/deps/react_jsx-dev-runtime.js?v=684697aa"; const jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];
import { createRouter as createTanStackRouter } from "/node_modules/.vinxi/cache/client/deps/@tanstack_react-router.js?v=684697aa";
import { routeTree } from "/src/generated/tanstack-router/routeTree.gen.ts";
export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPendingComponent: () => /* @__PURE__ */ jsxDEV("div", { children: "Loading..." }, void 0, false, {
      fileName: "/app/src/router.tsx",
      lineNumber: 9,
      columnNumber: 36
    }, this)
  });
  return router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFtQztBQVJuQyxTQUFTQSxnQkFBZ0JDLDRCQUE0QjtBQUNyRCxTQUFTQyxpQkFBaUI7QUFFbkIsZ0JBQVNGLGVBQWU7QUFDN0IsUUFBTUcsU0FBU0YscUJBQXFCO0FBQUEsSUFDbENDO0FBQUFBLElBQ0FFLG1CQUFtQjtBQUFBLElBQ25CQyxnQkFBZ0I7QUFBQSxJQUNoQkMseUJBQXlCQSxNQUFNLHVCQUFDLFNBQUksMEJBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFlO0FBQUEsRUFDaEQsQ0FBQztBQUVELFNBQU9IO0FBQ1QiLCJuYW1lcyI6WyJjcmVhdGVSb3V0ZXIiLCJjcmVhdGVUYW5TdGFja1JvdXRlciIsInJvdXRlVHJlZSIsInJvdXRlciIsInNjcm9sbFJlc3RvcmF0aW9uIiwiZGVmYXVsdFByZWxvYWQiLCJkZWZhdWx0UGVuZGluZ0NvbXBvbmVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJyb3V0ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciBhcyBjcmVhdGVUYW5TdGFja1JvdXRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZVRyZWUgfSBmcm9tIFwiLi9nZW5lcmF0ZWQvdGFuc3RhY2stcm91dGVyL3JvdXRlVHJlZS5nZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gY3JlYXRlVGFuU3RhY2tSb3V0ZXIoe1xuICAgIHJvdXRlVHJlZSxcbiAgICBzY3JvbGxSZXN0b3JhdGlvbjogdHJ1ZSxcbiAgICBkZWZhdWx0UHJlbG9hZDogXCJpbnRlbnRcIixcbiAgICBkZWZhdWx0UGVuZGluZ0NvbXBvbmVudDogKCkgPT4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+LFxuICB9KTtcblxuICByZXR1cm4gcm91dGVyO1xufVxuXG5kZWNsYXJlIG1vZHVsZSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIiB7XG4gIGludGVyZmFjZSBSZWdpc3RlciB7XG4gICAgcm91dGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVSb3V0ZXI+O1xuICB9XG59XG4iXSwiZmlsZSI6Ii9hcHAvc3JjL3JvdXRlci50c3gifQ==