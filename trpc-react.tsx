import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/trpc/react.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa";
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill;
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa";
globalThis.global = globalThis.global || __global_polyfill;
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa";
globalThis.process = globalThis.process || __process_polyfill;
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/trpc/react.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { QueryClientProvider } from "/node_modules/.vinxi/cache/client/deps/@tanstack_react-query.js?v=684697aa";
import {
  loggerLink,
  splitLink,
  httpBatchStreamLink,
  httpSubscriptionLink,
  createTRPCClient
} from "/node_modules/.vinxi/cache/client/deps/@trpc_client.js?v=684697aa";
import { createTRPCContext } from "/node_modules/.vinxi/cache/client/deps/@trpc_tanstack-react-query.js?v=684697aa";
import __vite__cjsImport9_react from "/node_modules/.vinxi/cache/client/deps/react.js?v=684697aa"; const useState = __vite__cjsImport9_react["useState"];
import SuperJSON from "/node_modules/.vinxi/cache/client/deps/superjson.js?v=684697aa";
import { getQueryClient } from "/src/trpc/query-client.ts";
const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext();
export { useTRPC, useTRPCClient };
function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  return `http://localhost:3000`;
}
export function TRPCReactProvider(props) {
  _s();
  const queryClient = getQueryClient();
  const [trpcClient] = useState(
    () => createTRPCClient({
      links: [
        loggerLink({
          enabled: (op) => true
        }),
        splitLink({
          condition: (op) => op.type === "subscription",
          false: httpBatchStreamLink({
            transformer: SuperJSON,
            url: getBaseUrl() + "/trpc"
          }),
          true: httpSubscriptionLink({
            transformer: SuperJSON,
            url: getBaseUrl() + "/trpc"
          })
        })
      ]
    })
  );
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(TRPCProvider, { trpcClient, queryClient, children: props.children }, void 0, false, {
    fileName: "/app/src/trpc/react.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/trpc/react.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_s(TRPCReactProvider, "p0cxYfj0CzpJWjrC5Gs0mvqp0Ek=");
_c = TRPCReactProvider;
var _c;
$RefreshReg$(_c, "TRPCReactProvider");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/trpc/react.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/trpc/react.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBc0RNOzs7Ozs7Ozs7Ozs7Ozs7OztBQXRETixTQUFTQSwyQkFBMkI7QUFDcEM7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsU0FBU0MseUJBQXlCO0FBQ2xDLFNBQVNDLGdCQUFnQjtBQUN6QixPQUFPQyxlQUFlO0FBR3RCLFNBQVNDLHNCQUFzQjtBQUkvQixNQUFNLEVBQUVDLGNBQWNDLFNBQVNDLGNBQWMsSUFBSU4sa0JBQTZCO0FBRTlFLFNBQVNLLFNBQVNDO0FBRWxCLFNBQVNDLGFBQWE7QUFDcEIsTUFBSSxPQUFPQyxXQUFXLFlBQWEsUUFBT0EsT0FBT0MsU0FBU0M7QUFDMUQsU0FBTztBQUNUO0FBRU8sZ0JBQVNDLGtCQUFrQkMsT0FBc0M7QUFBQUMsS0FBQTtBQUN0RSxRQUFNQyxjQUFjWCxlQUFlO0FBRW5DLFFBQU0sQ0FBQ1ksVUFBVSxJQUFJZDtBQUFBQSxJQUFTLE1BQzVCRixpQkFBNEI7QUFBQSxNQUMxQmlCLE9BQU87QUFBQSxRQUNMckIsV0FBVztBQUFBLFVBQ1RzQixTQUFTQSxDQUFDQyxPQUNSQztBQUFBQSxRQUVKLENBQUM7QUFBQSxRQUNEdkIsVUFBVTtBQUFBLFVBQ1J3QixXQUFXQSxDQUFDRixPQUFPQSxHQUFHRyxTQUFTO0FBQUEsVUFDL0JDLE9BQU96QixvQkFBb0I7QUFBQSxZQUN6QjBCLGFBQWFyQjtBQUFBQSxZQUNic0IsS0FBS2pCLFdBQVcsSUFBSTtBQUFBLFVBQ3RCLENBQUM7QUFBQSxVQUNEa0IsTUFBTTNCLHFCQUFxQjtBQUFBLFlBQ3pCeUIsYUFBYXJCO0FBQUFBLFlBQ2JzQixLQUFLakIsV0FBVyxJQUFJO0FBQUEsVUFDdEIsQ0FBQztBQUFBLFFBQ0gsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUVOLENBQUM7QUFBQSxFQUNIO0FBRUEsU0FDRSx1QkFBQyx1QkFBb0IsUUFBUU8sYUFDM0IsaUNBQUMsZ0JBQWEsWUFBd0IsYUFDbkNGLGdCQUFNYyxZQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQTtBQUVKO0FBQUNiLEdBakNlRixtQkFBaUI7QUFBQWdCLEtBQWpCaEI7QUFBaUIsSUFBQWdCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJRdWVyeUNsaWVudFByb3ZpZGVyIiwibG9nZ2VyTGluayIsInNwbGl0TGluayIsImh0dHBCYXRjaFN0cmVhbUxpbmsiLCJodHRwU3Vic2NyaXB0aW9uTGluayIsImNyZWF0ZVRSUENDbGllbnQiLCJjcmVhdGVUUlBDQ29udGV4dCIsInVzZVN0YXRlIiwiU3VwZXJKU09OIiwiZ2V0UXVlcnlDbGllbnQiLCJUUlBDUHJvdmlkZXIiLCJ1c2VUUlBDIiwidXNlVFJQQ0NsaWVudCIsImdldEJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIlRSUENSZWFjdFByb3ZpZGVyIiwicHJvcHMiLCJfcyIsInF1ZXJ5Q2xpZW50IiwidHJwY0NsaWVudCIsImxpbmtzIiwiZW5hYmxlZCIsIm9wIiwicHJvY2VzcyIsImNvbmRpdGlvbiIsInR5cGUiLCJmYWxzZSIsInRyYW5zZm9ybWVyIiwidXJsIiwidHJ1ZSIsImNoaWxkcmVuIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVhY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQge1xuICBsb2dnZXJMaW5rLFxuICBzcGxpdExpbmssXG4gIGh0dHBCYXRjaFN0cmVhbUxpbmssXG4gIGh0dHBTdWJzY3JpcHRpb25MaW5rLFxuICBjcmVhdGVUUlBDQ2xpZW50LFxufSBmcm9tIFwiQHRycGMvY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVUUlBDQ29udGV4dCB9IGZyb20gXCJAdHJwYy90YW5zdGFjay1yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdXBlckpTT04gZnJvbSBcInN1cGVyanNvblwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwifi9zZXJ2ZXIvdHJwYy9yb290XCI7XG5pbXBvcnQgeyBnZXRRdWVyeUNsaWVudCB9IGZyb20gXCIuL3F1ZXJ5LWNsaWVudFwiO1xuXG4vLyBOb3csIHdpdGggdGhlIG5ld2VyIEB0cnBjL3RhbnN0YWNrLXJlYWN0LXF1ZXJ5IHBhY2thZ2UsIHdlIG5vIGxvbmdlciBuZWVkIGNyZWF0ZVRSUENSZWFjdC5cbi8vIFdlIHVzZSBjcmVhdGVUUlBDQ29udGV4dCBpbnN0ZWFkLlxuY29uc3QgeyBUUlBDUHJvdmlkZXIsIHVzZVRSUEMsIHVzZVRSUENDbGllbnQgfSA9IGNyZWF0ZVRSUENDb250ZXh0PEFwcFJvdXRlcj4oKTtcblxuZXhwb3J0IHsgdXNlVFJQQywgdXNlVFJQQ0NsaWVudCB9O1xuXG5mdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDozMDAwYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRSUENSZWFjdFByb3ZpZGVyKHByb3BzOiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IGdldFF1ZXJ5Q2xpZW50KCk7XG5cbiAgY29uc3QgW3RycGNDbGllbnRdID0gdXNlU3RhdGUoKCkgPT5cbiAgICBjcmVhdGVUUlBDQ2xpZW50PEFwcFJvdXRlcj4oe1xuICAgICAgbGlua3M6IFtcbiAgICAgICAgbG9nZ2VyTGluayh7XG4gICAgICAgICAgZW5hYmxlZDogKG9wKSA9PlxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fFxuICAgICAgICAgICAgKG9wLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgb3AucmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpLFxuICAgICAgICB9KSxcbiAgICAgICAgc3BsaXRMaW5rKHtcbiAgICAgICAgICBjb25kaXRpb246IChvcCkgPT4gb3AudHlwZSA9PT0gXCJzdWJzY3JpcHRpb25cIixcbiAgICAgICAgICBmYWxzZTogaHR0cEJhdGNoU3RyZWFtTGluayh7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lcjogU3VwZXJKU09OLFxuICAgICAgICAgICAgdXJsOiBnZXRCYXNlVXJsKCkgKyBcIi90cnBjXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdHJ1ZTogaHR0cFN1YnNjcmlwdGlvbkxpbmsoe1xuICAgICAgICAgICAgdHJhbnNmb3JtZXI6IFN1cGVySlNPTixcbiAgICAgICAgICAgIHVybDogZ2V0QmFzZVVybCgpICsgXCIvdHJwY1wiLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSksXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxUUlBDUHJvdmlkZXIgdHJwY0NsaWVudD17dHJwY0NsaWVudH0gcXVlcnlDbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9UUlBDUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL3NyYy90cnBjL3JlYWN0LnRzeCJ9