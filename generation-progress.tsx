import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/GenerationProgress.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/GenerationProgress.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Loader2, CheckCircle2, Circle } from "/node_modules/.vinxi/cache/client/deps/lucide-react.js?v=684697aa";
export function GenerationProgress({ stages, currentMessage }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-lg p-6 border border-gray-200", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Generating Your Website" }, void 0, false, {
      fileName: "/app/src/components/GenerationProgress.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: stages.map(
      (stage) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        stage.status === "complete" && /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-green-500 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/components/GenerationProgress.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        stage.status === "active" && /* @__PURE__ */ jsxDEV(Loader2, { className: "w-5 h-5 text-blue-500 animate-spin flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/components/GenerationProgress.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        stage.status === "pending" && /* @__PURE__ */ jsxDEV(Circle, { className: "w-5 h-5 text-gray-300 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/components/GenerationProgress.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: `text-sm ${stage.status === "complete" ? "text-gray-600 line-through" : stage.status === "active" ? "text-blue-600 font-semibold" : "text-gray-400"}`,
            children: stage.label
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/GenerationProgress.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        )
      ] }, stage.id, true, {
        fileName: "/app/src/components/GenerationProgress.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/components/GenerationProgress.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    currentMessage && /* @__PURE__ */ jsxDEV("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-blue-800", children: currentMessage }, void 0, false, {
      fileName: "/app/src/components/GenerationProgress.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/components/GenerationProgress.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/GenerationProgress.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_c = GenerationProgress;
var _c;
$RefreshReg$(_c, "GenerationProgress");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/GenerationProgress.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/GenerationProgress.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWdCTTs7Ozs7Ozs7Ozs7Ozs7OztBQWhCTixTQUFTQSxTQUFTQyxjQUFjQyxjQUFjO0FBYXZDLGdCQUFTQyxtQkFBbUIsRUFBRUMsUUFBUUMsZUFBd0MsR0FBRztBQUN0RixTQUNFLHVCQUFDLFNBQUksV0FBVSw0REFDYjtBQUFBLDJCQUFDLFFBQUcsV0FBVSw0Q0FBMkMsdUNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0Y7QUFBQSxJQUVoRix1QkFBQyxTQUFJLFdBQVUsYUFDWkQsaUJBQU9FO0FBQUFBLE1BQUksQ0FBQ0MsVUFDWCx1QkFBQyxTQUFtQixXQUFVLDJCQUMzQkE7QUFBQUEsY0FBTUMsV0FBVyxjQUNoQix1QkFBQyxnQkFBYSxXQUFVLDBDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQThEO0FBQUEsUUFFL0RELE1BQU1DLFdBQVcsWUFDaEIsdUJBQUMsV0FBUSxXQUFVLHNEQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFFO0FBQUEsUUFFdEVELE1BQU1DLFdBQVcsYUFDaEIsdUJBQUMsVUFBTyxXQUFVLHlDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXVEO0FBQUEsUUFFekQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVcsV0FDVEQsTUFBTUMsV0FBVyxhQUNiLCtCQUNBRCxNQUFNQyxXQUFXLFdBQ2pCLGdDQUNBLGVBQWU7QUFBQSxZQUdwQkQsZ0JBQU1FO0FBQUFBO0FBQUFBLFVBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVUE7QUFBQSxXQXBCUUYsTUFBTUcsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXFCQTtBQUFBLElBQ0QsS0F4Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXlCQTtBQUFBLElBRUNMLGtCQUNDLHVCQUFDLFNBQUksV0FBVSx5REFDYixpQ0FBQyxPQUFFLFdBQVUseUJBQXlCQSw0QkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxRCxLQUR2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUNBO0FBRUo7QUFBQ00sS0F2Q2VSO0FBQWtCLElBQUFRO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJMb2FkZXIyIiwiQ2hlY2tDaXJjbGUyIiwiQ2lyY2xlIiwiR2VuZXJhdGlvblByb2dyZXNzIiwic3RhZ2VzIiwiY3VycmVudE1lc3NhZ2UiLCJtYXAiLCJzdGFnZSIsInN0YXR1cyIsImxhYmVsIiwiaWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJHZW5lcmF0aW9uUHJvZ3Jlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRlcjIsIENoZWNrQ2lyY2xlMiwgQ2lyY2xlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEdlbmVyYXRpb25TdGFnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN0YXR1czogJ3BlbmRpbmcnIHwgJ2FjdGl2ZScgfCAnY29tcGxldGUnO1xufVxuXG5pbnRlcmZhY2UgR2VuZXJhdGlvblByb2dyZXNzUHJvcHMge1xuICBzdGFnZXM6IEdlbmVyYXRpb25TdGFnZVtdO1xuICBjdXJyZW50TWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRpb25Qcm9ncmVzcyh7IHN0YWdlcywgY3VycmVudE1lc3NhZ2UgfTogR2VuZXJhdGlvblByb2dyZXNzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtNiBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItNFwiPkdlbmVyYXRpbmcgWW91ciBXZWJzaXRlPC9oMz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAge3N0YWdlcy5tYXAoKHN0YWdlKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3N0YWdlLmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAge3N0YWdlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyAmJiAoXG4gICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyZWVuLTUwMCBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3RhZ2Uuc3RhdHVzID09PSAnYWN0aXZlJyAmJiAoXG4gICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ibHVlLTUwMCBhbmltYXRlLXNwaW4gZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0YWdlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIChcbiAgICAgICAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS0zMDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSAke1xuICAgICAgICAgICAgICAgIHN0YWdlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJ1xuICAgICAgICAgICAgICAgICAgPyAndGV4dC1ncmF5LTYwMCBsaW5lLXRocm91Z2gnXG4gICAgICAgICAgICAgICAgICA6IHN0YWdlLnN0YXR1cyA9PT0gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICAgID8gJ3RleHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhZ2UubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtjdXJyZW50TWVzc2FnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTMgYmctYmx1ZS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmx1ZS0yMDBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj57Y3VycmVudE1lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvR2VuZXJhdGlvblByb2dyZXNzLnRzeCJ9