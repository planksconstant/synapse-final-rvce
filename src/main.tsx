import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa"
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa"
globalThis.process = globalThis.process || __process_polyfill

import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vinxi/cache/client/deps/react_jsx-dev-runtime.js?v=684697aa"; const jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport4_react from "/node_modules/.vinxi/cache/client/deps/react.js?v=684697aa"; const React = __vite__cjsImport4_react.__esModule ? __vite__cjsImport4_react.default : __vite__cjsImport4_react;
import __vite__cjsImport5_reactDom_client from "/node_modules/.vinxi/cache/client/deps/react-dom_client.js?v=684697aa"; const ReactDOM = __vite__cjsImport5_reactDom_client.__esModule ? __vite__cjsImport5_reactDom_client.default : __vite__cjsImport5_reactDom_client;
import { RouterProvider } from "/node_modules/.vinxi/cache/client/deps/@tanstack_react-router.js?v=684697aa";
import "/src/styles.css";
import { createRouter } from "/src/router.tsx";
const router = createRouter();
const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
      fileName: "/app/src/main.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/app/src/main.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  );
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCTTtBQWhCTixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsU0FBU0Msc0JBQXNCO0FBRS9CLE9BQU87QUFFUCxTQUFTQyxvQkFBb0I7QUFHN0IsTUFBTUMsU0FBU0QsYUFBYTtBQUU1QixNQUFNRSxjQUFjQyxTQUFTQyxlQUFlLE1BQU07QUFDbEQsSUFBSSxDQUFDRixZQUFZRyxXQUFXO0FBQzFCLFFBQU1DLE9BQU9SLFNBQVNTLFdBQVdMLFdBQVc7QUFDNUNJLE9BQUtFO0FBQUFBLElBQ0gsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxFQUNGO0FBQ0YiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiUm91dGVyUHJvdmlkZXIiLCJjcmVhdGVSb3V0ZXIiLCJyb3V0ZXIiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJyb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpbnhpL3R5cGVzL2NsaWVudFwiIC8+XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5cbi8vIFNldCB1cCBhIFJvdXRlciBpbnN0YW5jZVxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKCk7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpITtcbmlmICghcm9vdEVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RFbGVtZW50KTtcbiAgcm9vdC5yZW5kZXIoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9zcmMvbWFpbi50c3gifQ==