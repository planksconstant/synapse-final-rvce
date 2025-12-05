import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/routes/__root.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa"
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa"
globalThis.process = globalThis.process || __process_polyfill

import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vinxi/cache/client/deps/react_jsx-dev-runtime.js?v=684697aa"; const jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/routes/__root.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import {
  Outlet,
  createRootRoute
} from "/node_modules/.vinxi/cache/client/deps/@tanstack_react-router.js?v=684697aa";
import { Toaster } from "/node_modules/.vinxi/cache/client/deps/react-hot-toast.js?v=684697aa";
import { TRPCReactProvider } from "/src/trpc/react.tsx";
export const Route = createRootRoute({
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxDEV(TRPCReactProvider, { children: [
    /* @__PURE__ */ jsxDEV(Toaster, { position: "top-right" }, void 0, false, {
      fileName: "/app/src/routes/__root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/app/src/routes/__root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/routes/__root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
_c = RootComponent;
var _c;
$RefreshReg$(_c, "RootComponent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/routes/__root.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/routes/__root.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWNNOzs7Ozs7Ozs7Ozs7Ozs7O0FBZE47QUFBQSxFQUNFQTtBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsU0FBU0MsZUFBZTtBQUN4QixTQUFTQyx5QkFBeUI7QUFFM0IsYUFBTUMsUUFBUUgsZ0JBQWdCO0FBQUEsRUFDbkNJLFdBQVdDO0FBQ2IsQ0FBQztBQUVELFNBQVNBLGdCQUFnQjtBQUN2QixTQUNFLHVCQUFDLHFCQUNDO0FBQUEsMkJBQUMsV0FBUSxVQUFTLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkI7QUFBQSxJQUM3Qix1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdBO0FBRUo7QUFBQ0MsS0FQUUQ7QUFBYSxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiT3V0bGV0IiwiY3JlYXRlUm9vdFJvdXRlIiwiVG9hc3RlciIsIlRSUENSZWFjdFByb3ZpZGVyIiwiUm91dGUiLCJjb21wb25lbnQiLCJSb290Q29tcG9uZW50IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiX19yb290LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRsZXQsXG4gIGNyZWF0ZVJvb3RSb3V0ZSxcbn0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBUUlBDUmVhY3RQcm92aWRlciB9IGZyb20gXCJ+L3RycGMvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJvdXRlID0gY3JlYXRlUm9vdFJvdXRlKHtcbiAgY29tcG9uZW50OiBSb290Q29tcG9uZW50LFxufSk7XG5cbmZ1bmN0aW9uIFJvb3RDb21wb25lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPFRSUENSZWFjdFByb3ZpZGVyPlxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiAvPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvVFJQQ1JlYWN0UHJvdmlkZXI+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvc3JjL3JvdXRlcy9fX3Jvb3QudHN4In0=