import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/DrawingToolbar.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/DrawingToolbar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Paintbrush, Eraser, Trash2, Highlighter, Square, Circle, Minus, ArrowRight, Undo } from "/node_modules/.vinxi/cache/client/deps/lucide-react.js?v=684697aa";
import { useDrawingStore } from "/src/stores/useDrawingStore.ts";
export function DrawingToolbar({ onClearPage }) {
  _s();
  const tool = useDrawingStore((state) => state.tool);
  const color = useDrawingStore((state) => state.color);
  const brushSize = useDrawingStore((state) => state.brushSize);
  const setTool = useDrawingStore((state) => state.setTool);
  const setColor = useDrawingStore((state) => state.setColor);
  const setBrushSize = useDrawingStore((state) => state.setBrushSize);
  const undoLastLine = useDrawingStore((state) => state.undoLastLine);
  const pages = useDrawingStore((state) => state.pages);
  const currentPageIndex = useDrawingStore((state) => state.currentPageIndex);
  const currentPage = pages[currentPageIndex];
  const canUndo = currentPage?.lines.length > 0;
  const colorPalette = {
    basic: [
      "#000000",
      "#FFFFFF",
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
      "#808080",
      "#C0C0C0"
    ],
    pastels: [
      "#FFB3BA",
      "#FFDFBA",
      "#FFFFBA",
      "#BAFFC9",
      "#BAE1FF",
      "#E0BBE4",
      "#FFDFD3",
      "#FEC8D8",
      "#D4F1F4",
      "#C9E4DE"
    ],
    vibrant: [
      "#FF6B6B",
      "#FFA500",
      "#FFD700",
      "#32CD32",
      "#1E90FF",
      "#9370DB",
      "#FF1493",
      "#00CED1",
      "#FF4500",
      "#8B008B"
    ],
    earth: [
      "#8B4513",
      "#D2691E",
      "#CD853F",
      "#DEB887",
      "#F4A460",
      "#BC8F8F",
      "#A0522D",
      "#6B4423",
      "#3D2817",
      "#5C4033"
    ],
    jewel: [
      "#9B59B6",
      "#3498DB",
      "#1ABC9C",
      "#F39C12",
      "#E74C3C",
      "#16A085",
      "#27AE60",
      "#2980B9",
      "#8E44AD",
      "#C0392B"
    ],
    muted: [
      "#95A5A6",
      "#7F8C8D",
      "#BDC3C7",
      "#ECF0F1",
      "#34495E",
      "#2C3E50",
      "#546E7A",
      "#78909C",
      "#90A4AE",
      "#B0BEC5"
    ]
  };
  const allColors = [
    ...colorPalette.basic,
    ...colorPalette.vibrant,
    ...colorPalette.pastels,
    ...colorPalette.jewel,
    ...colorPalette.earth,
    ...colorPalette.muted
  ];
  const tools = [
    { id: "pen", icon: Paintbrush, label: "Pen" },
    { id: "highlighter", icon: Highlighter, label: "Highlighter" },
    { id: "eraser", icon: Eraser, label: "Eraser" },
    { id: "line", icon: Minus, label: "Line" },
    { id: "arrow", icon: ArrowRight, label: "Arrow" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-lg p-3 border border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-xs font-semibold text-gray-700 mb-1.5", children: "Tools" }, void 0, false, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-1.5", children: tools.map(
        ({ id, icon: Icon, label }) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setTool(id),
            className: `flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg border-2 transition-all text-xs ${tool === id ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-gray-300 text-gray-700"}`,
            title: label,
            children: [
              /* @__PURE__ */ jsxDEV(Icon, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/app/src/components/DrawingToolbar.tsx",
                lineNumber: 108,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: label }, void 0, false, {
                fileName: "/app/src/components/DrawingToolbar.tsx",
                lineNumber: 109,
                columnNumber: 17
              }, this)
            ]
          },
          id,
          true,
          {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 98,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/DrawingToolbar.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    tool !== "eraser" && /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-xs font-semibold text-gray-700 mb-1.5", children: "Colors" }, void 0, false, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-10 gap-1 mb-2", children: allColors.map(
        (c) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setColor(c),
            className: `w-full aspect-square rounded border transition-all hover:scale-110 ${color === c ? "border-2 border-blue-500 ring-1 ring-blue-300" : "border border-gray-300"}`,
            style: { backgroundColor: c },
            title: c
          },
          c,
          false,
          {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 125,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "color",
            value: color,
            onChange: (e) => setColor(e.target.value),
            className: "w-full h-8 rounded border-2 border-gray-300 cursor-pointer"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 139,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "w-8 h-8 rounded border-2 border-gray-300 flex-shrink-0",
            style: { backgroundColor: color },
            title: `Current: ${color}`
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/DrawingToolbar.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-xs font-semibold text-gray-700 mb-1.5", children: [
        "Size: ",
        brushSize,
        "px"
      ] }, void 0, true, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "range",
          min: "1",
          max: "50",
          value: brushSize,
          onChange: (e) => setBrushSize(Number(e.target.value)),
          className: "w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/DrawingToolbar.tsx",
          lineNumber: 159,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-xs text-gray-500 mt-0.5", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "1px" }, void 0, false, {
          fileName: "/app/src/components/DrawingToolbar.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "50px" }, void 0, false, {
          fileName: "/app/src/components/DrawingToolbar.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/DrawingToolbar.tsx",
      lineNumber: 155,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: undoLastLine,
        disabled: !canUndo,
        className: `w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border-2 transition-all ${canUndo ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300" : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"}`,
        title: canUndo ? "Undo last action" : "Nothing to undo",
        children: [
          /* @__PURE__ */ jsxDEV(Undo, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 184,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium", children: "Undo" }, void 0, false, {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 185,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 174,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: onClearPage,
        className: "w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border-2 border-red-200 hover:border-red-300 transition-all",
        children: [
          /* @__PURE__ */ jsxDEV(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 193,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium", children: "Clear Page" }, void 0, false, {
            fileName: "/app/src/components/DrawingToolbar.tsx",
            lineNumber: 194,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/DrawingToolbar.tsx",
        lineNumber: 189,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/src/components/DrawingToolbar.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/DrawingToolbar.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
_s(DrawingToolbar, "M0FquIyRWmGOhgz5tWgK44LlvWU=", false, function() {
  return [useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore];
});
_c = DrawingToolbar;
var _c;
$RefreshReg$(_c, "DrawingToolbar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/DrawingToolbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/DrawingToolbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFVLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErQjtBQUFBLFVBQy9CLHVCQUFDLFVBQUssV0FBVSx1QkFBc0IsMEJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdEO0FBQUE7QUFBQTtBQUFBLE1BTGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1BO0FBQUEsT0F6R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTBHQSxLQTNHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNEdBO0FBRUo7QUFBQ0MsR0E1S2VGLGdCQUFjO0FBQUEsVUFDZkQsaUJBQ0NBLGlCQUNJQSxpQkFDRkEsaUJBQ0NBLGlCQUNJQSxpQkFDQUEsaUJBQ1BBLGlCQUNXQSxlQUFlO0FBQUE7QUFBQXNDLEtBVDFCckM7QUFBYyxJQUFBcUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlBhaW50YnJ1c2giLCJFcmFzZXIiLCJUcmFzaDIiLCJIaWdobGlnaHRlciIsIlNxdWFyZSIsIkNpcmNsZSIsIk1pbnVzIiwiQXJyb3dSaWdodCIsIlVuZG8iLCJ1c2VEcmF3aW5nU3RvcmUiLCJEcmF3aW5nVG9vbGJhciIsIm9uQ2xlYXJQYWdlIiwiX3MiLCJ0b29sIiwic3RhdGUiLCJjb2xvciIsImJydXNoU2l6ZSIsInNldFRvb2wiLCJzZXRDb2xvciIsInNldEJydXNoU2l6ZSIsInVuZG9MYXN0TGluZSIsInBhZ2VzIiwiY3VycmVudFBhZ2VJbmRleCIsImN1cnJlbnRQYWdlIiwiY2FuVW5kbyIsImxpbmVzIiwibGVuZ3RoIiwiY29sb3JQYWxldHRlIiwiYmFzaWMiLCJwYXN0ZWxzIiwidmlicmFudCIsImVhcnRoIiwiamV3ZWwiLCJtdXRlZCIsImFsbENvbG9ycyIsInRvb2xzIiwiaWQiLCJpY29uIiwibGFiZWwiLCJtYXAiLCJJY29uIiwiYyIsImJhY2tncm91bmRDb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkRyYXdpbmdUb29sYmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWludGJydXNoLCBFcmFzZXIsIFRyYXNoMiwgSGlnaGxpZ2h0ZXIsIFNxdWFyZSwgQ2lyY2xlLCBNaW51cywgQXJyb3dSaWdodCwgVW5kbyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmF3aW5nU3RvcmUgfSBmcm9tICd+L3N0b3Jlcy91c2VEcmF3aW5nU3RvcmUnO1xuXG5pbnRlcmZhY2UgRHJhd2luZ1Rvb2xiYXJQcm9wcyB7XG4gIG9uQ2xlYXJQYWdlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRHJhd2luZ1Rvb2xiYXIoeyBvbkNsZWFyUGFnZSB9OiBEcmF3aW5nVG9vbGJhclByb3BzKSB7XG4gIGNvbnN0IHRvb2wgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS50b29sKTtcbiAgY29uc3QgY29sb3IgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5jb2xvcik7XG4gIGNvbnN0IGJydXNoU2l6ZSA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmJydXNoU2l6ZSk7XG4gIGNvbnN0IHNldFRvb2wgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXRUb29sKTtcbiAgY29uc3Qgc2V0Q29sb3IgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXRDb2xvcik7XG4gIGNvbnN0IHNldEJydXNoU2l6ZSA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldEJydXNoU2l6ZSk7XG4gIGNvbnN0IHVuZG9MYXN0TGluZSA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnVuZG9MYXN0TGluZSk7XG4gIGNvbnN0IHBhZ2VzID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUucGFnZXMpO1xuICBjb25zdCBjdXJyZW50UGFnZUluZGV4ID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFBhZ2VJbmRleCk7XG4gIFxuICBjb25zdCBjdXJyZW50UGFnZSA9IHBhZ2VzW2N1cnJlbnRQYWdlSW5kZXhdO1xuICBjb25zdCBjYW5VbmRvID0gY3VycmVudFBhZ2U/LmxpbmVzLmxlbmd0aCA+IDA7XG5cbiAgLy8gQ29tcHJlaGVuc2l2ZSBjb2xvciBwYWxldHRlIHdpdGggNjArIGNvbG9yc1xuICBjb25zdCBjb2xvclBhbGV0dGUgPSB7XG4gICAgYmFzaWM6IFtcbiAgICAgICcjMDAwMDAwJywgJyNGRkZGRkYnLCAnI0ZGMDAwMCcsICcjMDBGRjAwJywgJyMwMDAwRkYnLFxuICAgICAgJyNGRkZGMDAnLCAnI0ZGMDBGRicsICcjMDBGRkZGJywgJyM4MDgwODAnLCAnI0MwQzBDMCcsXG4gICAgXSxcbiAgICBwYXN0ZWxzOiBbXG4gICAgICAnI0ZGQjNCQScsICcjRkZERkJBJywgJyNGRkZGQkEnLCAnI0JBRkZDOScsICcjQkFFMUZGJyxcbiAgICAgICcjRTBCQkU0JywgJyNGRkRGRDMnLCAnI0ZFQzhEOCcsICcjRDRGMUY0JywgJyNDOUU0REUnLFxuICAgIF0sXG4gICAgdmlicmFudDogW1xuICAgICAgJyNGRjZCNkInLCAnI0ZGQTUwMCcsICcjRkZENzAwJywgJyMzMkNEMzInLCAnIzFFOTBGRicsXG4gICAgICAnIzkzNzBEQicsICcjRkYxNDkzJywgJyMwMENFRDEnLCAnI0ZGNDUwMCcsICcjOEIwMDhCJyxcbiAgICBdLFxuICAgIGVhcnRoOiBbXG4gICAgICAnIzhCNDUxMycsICcjRDI2OTFFJywgJyNDRDg1M0YnLCAnI0RFQjg4NycsICcjRjRBNDYwJyxcbiAgICAgICcjQkM4RjhGJywgJyNBMDUyMkQnLCAnIzZCNDQyMycsICcjM0QyODE3JywgJyM1QzQwMzMnLFxuICAgIF0sXG4gICAgamV3ZWw6IFtcbiAgICAgICcjOUI1OUI2JywgJyMzNDk4REInLCAnIzFBQkM5QycsICcjRjM5QzEyJywgJyNFNzRDM0MnLFxuICAgICAgJyMxNkEwODUnLCAnIzI3QUU2MCcsICcjMjk4MEI5JywgJyM4RTQ0QUQnLCAnI0MwMzkyQicsXG4gICAgXSxcbiAgICBtdXRlZDogW1xuICAgICAgJyM5NUE1QTYnLCAnIzdGOEM4RCcsICcjQkRDM0M3JywgJyNFQ0YwRjEnLCAnIzM0NDk1RScsXG4gICAgICAnIzJDM0U1MCcsICcjNTQ2RTdBJywgJyM3ODkwOUMnLCAnIzkwQTRBRScsICcjQjBCRUM1JyxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IGFsbENvbG9ycyA9IFtcbiAgICAuLi5jb2xvclBhbGV0dGUuYmFzaWMsXG4gICAgLi4uY29sb3JQYWxldHRlLnZpYnJhbnQsXG4gICAgLi4uY29sb3JQYWxldHRlLnBhc3RlbHMsXG4gICAgLi4uY29sb3JQYWxldHRlLmpld2VsLFxuICAgIC4uLmNvbG9yUGFsZXR0ZS5lYXJ0aCxcbiAgICAuLi5jb2xvclBhbGV0dGUubXV0ZWQsXG4gIF07XG5cbiAgY29uc3QgdG9vbHMgPSBbXG4gICAgeyBpZDogJ3BlbicgYXMgY29uc3QsIGljb246IFBhaW50YnJ1c2gsIGxhYmVsOiAnUGVuJyB9LFxuICAgIHsgaWQ6ICdoaWdobGlnaHRlcicgYXMgY29uc3QsIGljb246IEhpZ2hsaWdodGVyLCBsYWJlbDogJ0hpZ2hsaWdodGVyJyB9LFxuICAgIHsgaWQ6ICdlcmFzZXInIGFzIGNvbnN0LCBpY29uOiBFcmFzZXIsIGxhYmVsOiAnRXJhc2VyJyB9LFxuICAgIHsgaWQ6ICdsaW5lJyBhcyBjb25zdCwgaWNvbjogTWludXMsIGxhYmVsOiAnTGluZScgfSxcbiAgICB7IGlkOiAnYXJyb3cnIGFzIGNvbnN0LCBpY29uOiBBcnJvd1JpZ2h0LCBsYWJlbDogJ0Fycm93JyB9LFxuICAgIHsgaWQ6ICdyZWN0YW5nbGUnIGFzIGNvbnN0LCBpY29uOiBTcXVhcmUsIGxhYmVsOiAnUmVjdGFuZ2xlJyB9LFxuICAgIHsgaWQ6ICdjaXJjbGUnIGFzIGNvbnN0LCBpY29uOiBDaXJjbGUsIGxhYmVsOiAnQ2lyY2xlJyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgey8qIFRvb2wgU2VsZWN0aW9uICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtYi0xLjVcIj5cbiAgICAgICAgICAgIFRvb2xzXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAge3Rvb2xzLm1hcCgoeyBpZCwgaWNvbjogSWNvbiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKGlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHB4LTIgcHktMS41IHJvdW5kZWQtbGcgYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgdGV4dC14cyAke1xuICAgICAgICAgICAgICAgICAgdG9vbCA9PT0gaWRcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWJsdWUtNTAwIGJnLWJsdWUtNTAgdGV4dC1ibHVlLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb2xvciBQaWNrZXIgLSBPbmx5IHNob3cgZm9yIG5vbi1lcmFzZXIgdG9vbHMgKi99XG4gICAgICAgIHt0b29sICE9PSAnZXJhc2VyJyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgQ29sb3JzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogQ29tcGFjdCBjb2xvciBncmlkIHdpdGggMTAgY29sb3JzIHBlciByb3cgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEwIGdhcC0xIG1iLTJcIj5cbiAgICAgICAgICAgICAge2FsbENvbG9ycy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2N9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvcihjKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBhc3BlY3Qtc3F1YXJlIHJvdW5kZWQgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNjYWxlLTExMCAke1xuICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gYyA/ICdib3JkZXItMiBib3JkZXItYmx1ZS01MDAgcmluZy0xIHJpbmctYmx1ZS0zMDAnIDogJ2JvcmRlciBib3JkZXItZ3JheS0zMDAnXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEN1c3RvbSBjb2xvciBwaWNrZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29sb3IoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTggcm91bmRlZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleC1zaHJpbmstMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtgQ3VycmVudDogJHtjb2xvcn1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEJydXNoIFNpemUgKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgU2l6ZToge2JydXNoU2l6ZX1weFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17YnJ1c2hTaXplfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCcnVzaFNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgYWNjZW50LWJsdWUtNTAwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTAuNVwiPlxuICAgICAgICAgICAgPHNwYW4+MXB4PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+NTBweDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFVuZG8gQnV0dG9uICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dW5kb0xhc3RMaW5lfVxuICAgICAgICAgIGRpc2FibGVkPXshY2FuVW5kb31cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgcm91bmRlZC1sZyBib3JkZXItMiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgY2FuVW5kb1xuICAgICAgICAgICAgICA/ICdiZy1ibHVlLTUwIGhvdmVyOmJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDAgYm9yZGVyLWJsdWUtMjAwIGhvdmVyOmJvcmRlci1ibHVlLTMwMCdcbiAgICAgICAgICAgICAgOiAnYmctZ3JheS01MCB0ZXh0LWdyYXktNDAwIGJvcmRlci1ncmF5LTIwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgdGl0bGU9e2NhblVuZG8gPyAnVW5kbyBsYXN0IGFjdGlvbicgOiAnTm90aGluZyB0byB1bmRvJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxVbmRvIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+VW5kbzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIENsZWFyIFBhZ2UgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsZWFyUGFnZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYmctcmVkLTUwIGhvdmVyOmJnLXJlZC0xMDAgdGV4dC1yZWQtNzAwIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXJlZC0yMDAgaG92ZXI6Ym9yZGVyLXJlZC0zMDAgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bVwiPkNsZWFyIFBhZ2U8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvRHJhd2luZ1Rvb2xiYXIudHN4In0=