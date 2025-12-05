import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/DrawingEditor.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/DrawingEditor.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport6_react from "/node_modules/.vinxi/cache/client/deps/react.js?v=684697aa"; const useRef = __vite__cjsImport6_react["useRef"]; const useState = __vite__cjsImport6_react["useState"]; const useEffect = __vite__cjsImport6_react["useEffect"]; const forwardRef = __vite__cjsImport6_react["forwardRef"]; const useImperativeHandle = __vite__cjsImport6_react["useImperativeHandle"];
import { Stage, Layer, Line, Image as KonvaImage, Rect, Ellipse, Arrow } from "/node_modules/.vinxi/cache/client/deps/react-konva.js?v=684697aa";
import { useDrawingStore } from "/src/stores/useDrawingStore.ts";
import __vite__cjsImport9_useImage from "/node_modules/.vinxi/cache/client/deps/use-image.js?v=684697aa"; const useImage = __vite__cjsImport9_useImage.__esModule ? __vite__cjsImport9_useImage.default : __vite__cjsImport9_useImage;
function BackgroundImage({ src, width, height }) {
  _s();
  const [image] = useImage(src, "anonymous");
  if (!image) return null;
  return /* @__PURE__ */ jsxDEV(
    KonvaImage,
    {
      image,
      width,
      height,
      opacity: 0.3
    },
    void 0,
    false,
    {
      fileName: "/app/src/components/DrawingEditor.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
_s(BackgroundImage, "7iHFm+4ZQcY3NOZmuC1Wyv6gdJ4=", false, function() {
  return [useImage];
});
_c = BackgroundImage;
const isShapeTool = (tool) => {
  return ["rectangle", "circle", "line", "arrow"].includes(tool);
};
export const DrawingEditor = _s2(forwardRef(_c2 = _s2((props, ref) => {
  _s2();
  const stageRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState([]);
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });
  const pages = useDrawingStore((state) => state.pages);
  const currentPageIndex = useDrawingStore((state) => state.currentPageIndex);
  const tool = useDrawingStore((state) => state.tool);
  const color = useDrawingStore((state) => state.color);
  const brushSize = useDrawingStore((state) => state.brushSize);
  const addLine = useDrawingStore((state) => state.addLine);
  const currentPage = pages[currentPageIndex];
  useImperativeHandle(ref, () => ({
    exportAsDataURL: () => {
      if (stageRef.current) {
        return stageRef.current.toDataURL({ pixelRatio: 2 });
      }
      return null;
    }
  }));
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("canvas-container");
      if (container) {
        setStageSize({
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const handleMouseDown = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    const pos = e.target.getStage().getPointerPosition();
    setIsDrawing(true);
    if (isShapeTool(tool)) {
      setCurrentLine([pos.x, pos.y, pos.x, pos.y]);
    } else {
      setCurrentLine([pos.x, pos.y]);
    }
  };
  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (isShapeTool(tool)) {
      setCurrentLine([currentLine[0], currentLine[1], point.x, point.y]);
    } else {
      setCurrentLine([...currentLine, point.x, point.y]);
    }
  };
  const handleMouseUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentLine.length > 0) {
      addLine(currentPageIndex, {
        tool,
        points: currentLine,
        color: tool === "eraser" ? "#FFFFFF" : color,
        size: brushSize
      });
    }
    setCurrentLine([]);
  };
  const renderLine = (line, index) => {
    const opacity = line.tool === "highlighter" ? 0.3 : 1;
    const globalCompositeOperation = line.tool === "eraser" ? "destination-out" : "source-over";
    if (line.tool === "rectangle" && line.points.length >= 4) {
      const [x1, y1, x2, y2] = line.points;
      return /* @__PURE__ */ jsxDEV(
        Rect,
        {
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
          stroke: line.color,
          strokeWidth: line.size,
          opacity
        },
        line.id || index,
        false,
        {
          fileName: "/app/src/components/DrawingEditor.tsx",
          lineNumber: 154,
          columnNumber: 9
        },
        this
      );
    }
    if (line.tool === "circle" && line.points.length >= 4) {
      const [x1, y1, x2, y2] = line.points;
      const centerX = (x1 + x2) / 2;
      const centerY = (y1 + y2) / 2;
      const radiusX = Math.abs(x2 - x1) / 2;
      const radiusY = Math.abs(y2 - y1) / 2;
      return /* @__PURE__ */ jsxDEV(
        Ellipse,
        {
          x: centerX,
          y: centerY,
          radiusX,
          radiusY,
          stroke: line.color,
          strokeWidth: line.size,
          opacity
        },
        line.id || index,
        false,
        {
          fileName: "/app/src/components/DrawingEditor.tsx",
          lineNumber: 174,
          columnNumber: 9
        },
        this
      );
    }
    if (line.tool === "line" && line.points.length >= 4) {
      return /* @__PURE__ */ jsxDEV(
        Line,
        {
          points: line.points.slice(0, 4),
          stroke: line.color,
          strokeWidth: line.size,
          lineCap: "round",
          opacity
        },
        line.id || index,
        false,
        {
          fileName: "/app/src/components/DrawingEditor.tsx",
          lineNumber: 189,
          columnNumber: 9
        },
        this
      );
    }
    if (line.tool === "arrow" && line.points.length >= 4) {
      return /* @__PURE__ */ jsxDEV(
        Arrow,
        {
          points: line.points.slice(0, 4),
          stroke: line.color,
          fill: line.color,
          strokeWidth: line.size,
          pointerLength: line.size * 3,
          pointerWidth: line.size * 3,
          opacity
        },
        line.id || index,
        false,
        {
          fileName: "/app/src/components/DrawingEditor.tsx",
          lineNumber: 202,
          columnNumber: 9
        },
        this
      );
    }
    return /* @__PURE__ */ jsxDEV(
      Line,
      {
        points: line.points,
        stroke: line.color,
        strokeWidth: line.size,
        tension: 0.5,
        lineCap: "round",
        lineJoin: "round",
        globalCompositeOperation,
        opacity
      },
      line.id || index,
      false,
      {
        fileName: "/app/src/components/DrawingEditor.tsx",
        lineNumber: 217,
        columnNumber: 7
      },
      this
    );
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      id: "canvas-container",
      className: "w-full h-full bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden",
      children: /* @__PURE__ */ jsxDEV(
        Stage,
        {
          ref: stageRef,
          width: stageSize.width,
          height: stageSize.height,
          onMouseDown: handleMouseDown,
          onMousemove: handleMouseMove,
          onMouseup: handleMouseUp,
          onTouchStart: handleMouseDown,
          onTouchMove: handleMouseMove,
          onTouchEnd: handleMouseUp,
          children: /* @__PURE__ */ jsxDEV(Layer, { children: [
            currentPage?.backgroundImage && /* @__PURE__ */ jsxDEV(
              BackgroundImage,
              {
                src: currentPage.backgroundImage,
                width: stageSize.width,
                height: stageSize.height
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/DrawingEditor.tsx",
                lineNumber: 250,
                columnNumber: 11
              },
              this
            ),
            currentPage?.lines.map((line, i) => renderLine(line, i)),
            isDrawing && currentLine.length > 0 && (() => {
              const opacity = tool === "highlighter" ? 0.3 : 1;
              const globalCompositeOperation = tool === "eraser" ? "destination-out" : "source-over";
              const currentColor = tool === "eraser" ? "#FFFFFF" : color;
              if (tool === "rectangle" && currentLine.length >= 4) {
                const [x1, y1, x2, y2] = currentLine;
                return /* @__PURE__ */ jsxDEV(
                  Rect,
                  {
                    x: Math.min(x1, x2),
                    y: Math.min(y1, y2),
                    width: Math.abs(x2 - x1),
                    height: Math.abs(y2 - y1),
                    stroke: currentColor,
                    strokeWidth: brushSize,
                    opacity
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/DrawingEditor.tsx",
                    lineNumber: 269,
                    columnNumber: 17
                  },
                  this
                );
              }
              if (tool === "circle" && currentLine.length >= 4) {
                const [x1, y1, x2, y2] = currentLine;
                const centerX = (x1 + x2) / 2;
                const centerY = (y1 + y2) / 2;
                const radiusX = Math.abs(x2 - x1) / 2;
                const radiusY = Math.abs(y2 - y1) / 2;
                return /* @__PURE__ */ jsxDEV(
                  Ellipse,
                  {
                    x: centerX,
                    y: centerY,
                    radiusX,
                    radiusY,
                    stroke: currentColor,
                    strokeWidth: brushSize,
                    opacity
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/DrawingEditor.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                  },
                  this
                );
              }
              if (tool === "line" && currentLine.length >= 4) {
                return /* @__PURE__ */ jsxDEV(
                  Line,
                  {
                    points: currentLine.slice(0, 4),
                    stroke: currentColor,
                    strokeWidth: brushSize,
                    lineCap: "round",
                    opacity
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/DrawingEditor.tsx",
                    lineNumber: 302,
                    columnNumber: 17
                  },
                  this
                );
              }
              if (tool === "arrow" && currentLine.length >= 4) {
                return /* @__PURE__ */ jsxDEV(
                  Arrow,
                  {
                    points: currentLine.slice(0, 4),
                    stroke: currentColor,
                    fill: currentColor,
                    strokeWidth: brushSize,
                    pointerLength: brushSize * 3,
                    pointerWidth: brushSize * 3,
                    opacity
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/DrawingEditor.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                  },
                  this
                );
              }
              return /* @__PURE__ */ jsxDEV(
                Line,
                {
                  points: currentLine,
                  stroke: currentColor,
                  strokeWidth: brushSize,
                  tension: 0.5,
                  lineCap: "round",
                  lineJoin: "round",
                  globalCompositeOperation,
                  opacity
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/DrawingEditor.tsx",
                  lineNumber: 328,
                  columnNumber: 15
                },
                this
              );
            })()
          ] }, void 0, true, {
            fileName: "/app/src/components/DrawingEditor.tsx",
            lineNumber: 247,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/DrawingEditor.tsx",
          lineNumber: 236,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/app/src/components/DrawingEditor.tsx",
      lineNumber: 232,
      columnNumber: 5
    },
    this
  );
}, "A+konGoYF/zPPYvFpIVJ4HOzT+w=", false, function() {
  return [useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore];
})), "A+konGoYF/zPPYvFpIVJ4HOzT+w=", false, function() {
  return [useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore];
});
_c3 = DrawingEditor;
DrawingEditor.displayName = "DrawingEditor";
var _c, _c2, _c3;
$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "DrawingEditor$forwardRef");
$RefreshReg$(_c3, "DrawingEditor");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/DrawingEditor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/DrawingEditor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTVFLElBQUFNLEtBQUFxRTtBQUFBRSxhQUFBN0UsSUFBQTtBQUFBNkUsYUFBQXZFLEtBQUE7QUFBQXVFLGFBQUFGLEtBQUEiLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZvcndhcmRSZWYiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiU3RhZ2UiLCJMYXllciIsIkxpbmUiLCJJbWFnZSIsIktvbnZhSW1hZ2UiLCJSZWN0IiwiRWxsaXBzZSIsIkFycm93IiwidXNlRHJhd2luZ1N0b3JlIiwidXNlSW1hZ2UiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIl9zIiwiaW1hZ2UiLCJfYyIsImlzU2hhcGVUb29sIiwidG9vbCIsImluY2x1ZGVzIiwiRHJhd2luZ0VkaXRvciIsIl9zMiIsIl9jMiIsInByb3BzIiwicmVmIiwic3RhZ2VSZWYiLCJpc0RyYXdpbmciLCJzZXRJc0RyYXdpbmciLCJjdXJyZW50TGluZSIsInNldEN1cnJlbnRMaW5lIiwic3RhZ2VTaXplIiwic2V0U3RhZ2VTaXplIiwicGFnZXMiLCJzdGF0ZSIsImN1cnJlbnRQYWdlSW5kZXgiLCJjb2xvciIsImJydXNoU2l6ZSIsImFkZExpbmUiLCJjdXJyZW50UGFnZSIsImV4cG9ydEFzRGF0YVVSTCIsImN1cnJlbnQiLCJ0b0RhdGFVUkwiLCJwaXhlbFJhdGlvIiwidXBkYXRlU2l6ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImNsaWNrZWRPbkVtcHR5IiwidGFyZ2V0IiwiZ2V0U3RhZ2UiLCJwb3MiLCJnZXRQb2ludGVyUG9zaXRpb24iLCJ4IiwieSIsImhhbmRsZU1vdXNlTW92ZSIsInN0YWdlIiwicG9pbnQiLCJoYW5kbGVNb3VzZVVwIiwibGVuZ3RoIiwicG9pbnRzIiwic2l6ZSIsInJlbmRlckxpbmUiLCJsaW5lIiwiaW5kZXgiLCJvcGFjaXR5IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwieDEiLCJ5MSIsIngyIiwieTIiLCJNYXRoIiwibWluIiwiYWJzIiwiaWQiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1c1giLCJyYWRpdXNZIiwic2xpY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaW5lcyIsIm1hcCIsImkiLCJjdXJyZW50Q29sb3IiLCJfYzMiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJEcmF3aW5nRWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdGFnZSwgTGF5ZXIsIExpbmUsIEltYWdlIGFzIEtvbnZhSW1hZ2UsIFJlY3QsIEVsbGlwc2UsIEFycm93IH0gZnJvbSAncmVhY3Qta29udmEnO1xuaW1wb3J0IHsgdXNlRHJhd2luZ1N0b3JlIH0gZnJvbSAnfi9zdG9yZXMvdXNlRHJhd2luZ1N0b3JlJztcbmltcG9ydCB1c2VJbWFnZSBmcm9tICd1c2UtaW1hZ2UnO1xuXG5pbnRlcmZhY2UgQmFja2dyb3VuZEltYWdlUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIEJhY2tncm91bmRJbWFnZSh7IHNyYywgd2lkdGgsIGhlaWdodCB9OiBCYWNrZ3JvdW5kSW1hZ2VQcm9wcykge1xuICBjb25zdCBbaW1hZ2VdID0gdXNlSW1hZ2Uoc3JjLCAnYW5vbnltb3VzJyk7XG4gIFxuICBpZiAoIWltYWdlKSByZXR1cm4gbnVsbDtcbiAgXG4gIHJldHVybiAoXG4gICAgPEtvbnZhSW1hZ2VcbiAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgb3BhY2l0eT17MC4zfVxuICAgIC8+XG4gICk7XG59XG5cbi8vIEhlbHBlciB0byBkZXRlcm1pbmUgaWYgdG9vbCBkcmF3cyBzaGFwZXMgdnMgZnJlZWhhbmRcbmNvbnN0IGlzU2hhcGVUb29sID0gKHRvb2w6IHN0cmluZykgPT4ge1xuICByZXR1cm4gWydyZWN0YW5nbGUnLCAnY2lyY2xlJywgJ2xpbmUnLCAnYXJyb3cnXS5pbmNsdWRlcyh0b29sKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2luZ0VkaXRvclJlZiB7XG4gIGV4cG9ydEFzRGF0YVVSTDogKCkgPT4gc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IERyYXdpbmdFZGl0b3IgPSBmb3J3YXJkUmVmPERyYXdpbmdFZGl0b3JSZWY+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHN0YWdlUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IFtpc0RyYXdpbmcsIHNldElzRHJhd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW3N0YWdlU2l6ZSwgc2V0U3RhZ2VTaXplXSA9IHVzZVN0YXRlKHsgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfSk7XG4gIFxuICBjb25zdCBwYWdlcyA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzKTtcbiAgY29uc3QgY3VycmVudFBhZ2VJbmRleCA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQYWdlSW5kZXgpO1xuICBjb25zdCB0b29sID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUudG9vbCk7XG4gIGNvbnN0IGNvbG9yID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuY29sb3IpO1xuICBjb25zdCBicnVzaFNpemUgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5icnVzaFNpemUpO1xuICBjb25zdCBhZGRMaW5lID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuYWRkTGluZSk7XG4gIFxuICBjb25zdCBjdXJyZW50UGFnZSA9IHBhZ2VzW2N1cnJlbnRQYWdlSW5kZXhdO1xuXG4gIC8vIEV4cG9zZSBleHBvcnQgbWV0aG9kIHRvIHBhcmVudFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBleHBvcnRBc0RhdGFVUkw6ICgpID0+IHtcbiAgICAgIGlmIChzdGFnZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBzdGFnZVJlZi5jdXJyZW50LnRvRGF0YVVSTCh7IHBpeGVsUmF0aW86IDIgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICB9KSk7XG5cbiAgLy8gVXBkYXRlIHN0YWdlIHNpemUgb24gd2luZG93IHJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBzZXRTdGFnZVNpemUoe1xuICAgICAgICAgIHdpZHRoOiBjb250YWluZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjb250YWluZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHVwZGF0ZVNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlU2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBhbnkpID0+IHtcbiAgICAvLyBDaGVjayBpZiBjbGlja2luZyBvbiBzdGFnZSAobm90IG9uIGEgc2hhcGUpXG4gICAgY29uc3QgY2xpY2tlZE9uRW1wdHkgPSBlLnRhcmdldCA9PT0gZS50YXJnZXQuZ2V0U3RhZ2UoKTtcbiAgICBcbiAgICBjb25zdCBwb3MgPSBlLnRhcmdldC5nZXRTdGFnZSgpLmdldFBvaW50ZXJQb3NpdGlvbigpO1xuICAgIFxuICAgIHNldElzRHJhd2luZyh0cnVlKTtcbiAgICBcbiAgICBpZiAoaXNTaGFwZVRvb2wodG9vbCkpIHtcbiAgICAgIC8vIEZvciBzaGFwZXMsIHN0b3JlIHN0YXJ0IHBvaW50XG4gICAgICBzZXRDdXJyZW50TGluZShbcG9zLngsIHBvcy55LCBwb3MueCwgcG9zLnldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIGZyZWVoYW5kIGRyYXdpbmdcbiAgICAgIHNldEN1cnJlbnRMaW5lKFtwb3MueCwgcG9zLnldKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICghaXNEcmF3aW5nKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgc3RhZ2UgPSBlLnRhcmdldC5nZXRTdGFnZSgpO1xuICAgIGNvbnN0IHBvaW50ID0gc3RhZ2UuZ2V0UG9pbnRlclBvc2l0aW9uKCk7XG4gICAgXG4gICAgaWYgKGlzU2hhcGVUb29sKHRvb2wpKSB7XG4gICAgICAvLyBGb3Igc2hhcGVzLCB1cGRhdGUgZW5kIHBvaW50XG4gICAgICBzZXRDdXJyZW50TGluZShbY3VycmVudExpbmVbMF0sIGN1cnJlbnRMaW5lWzFdLCBwb2ludC54LCBwb2ludC55XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciBmcmVlaGFuZCwgYWRkIHBvaW50c1xuICAgICAgc2V0Q3VycmVudExpbmUoWy4uLmN1cnJlbnRMaW5lLCBwb2ludC54LCBwb2ludC55XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0RyYXdpbmcpIHJldHVybjtcbiAgICBcbiAgICBzZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmIChjdXJyZW50TGluZS5sZW5ndGggPiAwKSB7XG4gICAgICBhZGRMaW5lKGN1cnJlbnRQYWdlSW5kZXgsIHtcbiAgICAgICAgdG9vbCxcbiAgICAgICAgcG9pbnRzOiBjdXJyZW50TGluZSxcbiAgICAgICAgY29sb3I6IHRvb2wgPT09ICdlcmFzZXInID8gJyNGRkZGRkYnIDogY29sb3IsXG4gICAgICAgIHNpemU6IGJydXNoU2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzZXRDdXJyZW50TGluZShbXSk7XG4gIH07XG5cbiAgLy8gUmVuZGVyIGEgbGluZSBiYXNlZCBvbiBpdHMgdG9vbCB0eXBlXG4gIGNvbnN0IHJlbmRlckxpbmUgPSAobGluZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGxpbmUudG9vbCA9PT0gJ2hpZ2hsaWdodGVyJyA/IDAuMyA6IDE7XG4gICAgY29uc3QgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGluZS50b29sID09PSAnZXJhc2VyJyA/ICdkZXN0aW5hdGlvbi1vdXQnIDogJ3NvdXJjZS1vdmVyJztcbiAgICBcbiAgICBpZiAobGluZS50b29sID09PSAncmVjdGFuZ2xlJyAmJiBsaW5lLnBvaW50cy5sZW5ndGggPj0gNCkge1xuICAgICAgY29uc3QgW3gxLCB5MSwgeDIsIHkyXSA9IGxpbmUucG9pbnRzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlY3RcbiAgICAgICAgICBrZXk9e2xpbmUuaWQgfHwgaW5kZXh9XG4gICAgICAgICAgeD17TWF0aC5taW4oeDEsIHgyKX1cbiAgICAgICAgICB5PXtNYXRoLm1pbih5MSwgeTIpfVxuICAgICAgICAgIHdpZHRoPXtNYXRoLmFicyh4MiAtIHgxKX1cbiAgICAgICAgICBoZWlnaHQ9e01hdGguYWJzKHkyIC0geTEpfVxuICAgICAgICAgIHN0cm9rZT17bGluZS5jb2xvcn1cbiAgICAgICAgICBzdHJva2VXaWR0aD17bGluZS5zaXplfVxuICAgICAgICAgIG9wYWNpdHk9e29wYWNpdHl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBpZiAobGluZS50b29sID09PSAnY2lyY2xlJyAmJiBsaW5lLnBvaW50cy5sZW5ndGggPj0gNCkge1xuICAgICAgY29uc3QgW3gxLCB5MSwgeDIsIHkyXSA9IGxpbmUucG9pbnRzO1xuICAgICAgY29uc3QgY2VudGVyWCA9ICh4MSArIHgyKSAvIDI7XG4gICAgICBjb25zdCBjZW50ZXJZID0gKHkxICsgeTIpIC8gMjtcbiAgICAgIGNvbnN0IHJhZGl1c1ggPSBNYXRoLmFicyh4MiAtIHgxKSAvIDI7XG4gICAgICBjb25zdCByYWRpdXNZID0gTWF0aC5hYnMoeTIgLSB5MSkgLyAyO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVsbGlwc2VcbiAgICAgICAgICBrZXk9e2xpbmUuaWQgfHwgaW5kZXh9XG4gICAgICAgICAgeD17Y2VudGVyWH1cbiAgICAgICAgICB5PXtjZW50ZXJZfVxuICAgICAgICAgIHJhZGl1c1g9e3JhZGl1c1h9XG4gICAgICAgICAgcmFkaXVzWT17cmFkaXVzWX1cbiAgICAgICAgICBzdHJva2U9e2xpbmUuY29sb3J9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9e2xpbmUuc2l6ZX1cbiAgICAgICAgICBvcGFjaXR5PXtvcGFjaXR5fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGxpbmUudG9vbCA9PT0gJ2xpbmUnICYmIGxpbmUucG9pbnRzLmxlbmd0aCA+PSA0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluZVxuICAgICAgICAgIGtleT17bGluZS5pZCB8fCBpbmRleH1cbiAgICAgICAgICBwb2ludHM9e2xpbmUucG9pbnRzLnNsaWNlKDAsIDQpfVxuICAgICAgICAgIHN0cm9rZT17bGluZS5jb2xvcn1cbiAgICAgICAgICBzdHJva2VXaWR0aD17bGluZS5zaXplfVxuICAgICAgICAgIGxpbmVDYXA9XCJyb3VuZFwiXG4gICAgICAgICAgb3BhY2l0eT17b3BhY2l0eX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGlmIChsaW5lLnRvb2wgPT09ICdhcnJvdycgJiYgbGluZS5wb2ludHMubGVuZ3RoID49IDQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBcnJvd1xuICAgICAgICAgIGtleT17bGluZS5pZCB8fCBpbmRleH1cbiAgICAgICAgICBwb2ludHM9e2xpbmUucG9pbnRzLnNsaWNlKDAsIDQpfVxuICAgICAgICAgIHN0cm9rZT17bGluZS5jb2xvcn1cbiAgICAgICAgICBmaWxsPXtsaW5lLmNvbG9yfVxuICAgICAgICAgIHN0cm9rZVdpZHRoPXtsaW5lLnNpemV9XG4gICAgICAgICAgcG9pbnRlckxlbmd0aD17bGluZS5zaXplICogM31cbiAgICAgICAgICBwb2ludGVyV2lkdGg9e2xpbmUuc2l6ZSAqIDN9XG4gICAgICAgICAgb3BhY2l0eT17b3BhY2l0eX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIERlZmF1bHQ6IGZyZWVoYW5kIGxpbmUgKHBlbiwgZXJhc2VyLCBoaWdobGlnaHRlcilcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmVcbiAgICAgICAga2V5PXtsaW5lLmlkIHx8IGluZGV4fVxuICAgICAgICBwb2ludHM9e2xpbmUucG9pbnRzfVxuICAgICAgICBzdHJva2U9e2xpbmUuY29sb3J9XG4gICAgICAgIHN0cm9rZVdpZHRoPXtsaW5lLnNpemV9XG4gICAgICAgIHRlbnNpb249ezAuNX1cbiAgICAgICAgbGluZUNhcD1cInJvdW5kXCJcbiAgICAgICAgbGluZUpvaW49XCJyb3VuZFwiXG4gICAgICAgIGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj17Z2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9ufVxuICAgICAgICBvcGFjaXR5PXtvcGFjaXR5fVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJjYW52YXMtY29udGFpbmVyXCJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIG92ZXJmbG93LWhpZGRlblwiXG4gICAgPlxuICAgICAgPFN0YWdlXG4gICAgICAgIHJlZj17c3RhZ2VSZWZ9XG4gICAgICAgIHdpZHRoPXtzdGFnZVNpemUud2lkdGh9XG4gICAgICAgIGhlaWdodD17c3RhZ2VTaXplLmhlaWdodH1cbiAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZW1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgb25Nb3VzZXVwPXtoYW5kbGVNb3VzZVVwfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e2hhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgb25Ub3VjaE1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlTW91c2VVcH1cbiAgICAgID5cbiAgICAgICAgPExheWVyPlxuICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIGltYWdlIGlmIHNldCAqL31cbiAgICAgICAgICB7Y3VycmVudFBhZ2U/LmJhY2tncm91bmRJbWFnZSAmJiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlXG4gICAgICAgICAgICAgIHNyYz17Y3VycmVudFBhZ2UuYmFja2dyb3VuZEltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17c3RhZ2VTaXplLndpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e3N0YWdlU2l6ZS5oZWlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIEV4aXN0aW5nIGxpbmVzICovfVxuICAgICAgICAgIHtjdXJyZW50UGFnZT8ubGluZXMubWFwKChsaW5lLCBpKSA9PiByZW5kZXJMaW5lKGxpbmUsIGkpKX1cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogQ3VycmVudCBsaW5lIGJlaW5nIGRyYXduICovfVxuICAgICAgICAgIHtpc0RyYXdpbmcgJiYgY3VycmVudExpbmUubGVuZ3RoID4gMCAmJiAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHRvb2wgPT09ICdoaWdobGlnaHRlcicgPyAwLjMgOiAxO1xuICAgICAgICAgICAgY29uc3QgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdG9vbCA9PT0gJ2VyYXNlcicgPyAnZGVzdGluYXRpb24tb3V0JyA6ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0b29sID09PSAnZXJhc2VyJyA/ICcjRkZGRkZGJyA6IGNvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodG9vbCA9PT0gJ3JlY3RhbmdsZScgJiYgY3VycmVudExpbmUubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgY29uc3QgW3gxLCB5MSwgeDIsIHkyXSA9IGN1cnJlbnRMaW5lO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWN0XG4gICAgICAgICAgICAgICAgICB4PXtNYXRoLm1pbih4MSwgeDIpfVxuICAgICAgICAgICAgICAgICAgeT17TWF0aC5taW4oeTEsIHkyKX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXRoLmFicyh4MiAtIHgxKX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17TWF0aC5hYnMoeTIgLSB5MSl9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9e2N1cnJlbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXticnVzaFNpemV9XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5PXtvcGFjaXR5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0b29sID09PSAnY2lyY2xlJyAmJiBjdXJyZW50TGluZS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICBjb25zdCBbeDEsIHkxLCB4MiwgeTJdID0gY3VycmVudExpbmU7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSAoeDEgKyB4MikgLyAyO1xuICAgICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gKHkxICsgeTIpIC8gMjtcbiAgICAgICAgICAgICAgY29uc3QgcmFkaXVzWCA9IE1hdGguYWJzKHgyIC0geDEpIC8gMjtcbiAgICAgICAgICAgICAgY29uc3QgcmFkaXVzWSA9IE1hdGguYWJzKHkyIC0geTEpIC8gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RWxsaXBzZVxuICAgICAgICAgICAgICAgICAgeD17Y2VudGVyWH1cbiAgICAgICAgICAgICAgICAgIHk9e2NlbnRlcll9XG4gICAgICAgICAgICAgICAgICByYWRpdXNYPXtyYWRpdXNYfVxuICAgICAgICAgICAgICAgICAgcmFkaXVzWT17cmFkaXVzWX1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZT17Y3VycmVudENvbG9yfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2JydXNoU2l6ZX1cbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk9e29wYWNpdHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRvb2wgPT09ICdsaW5lJyAmJiBjdXJyZW50TGluZS5sZW5ndGggPj0gNCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgICAgICBwb2ludHM9e2N1cnJlbnRMaW5lLnNsaWNlKDAsIDQpfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtjdXJyZW50Q29sb3J9XG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17YnJ1c2hTaXplfVxuICAgICAgICAgICAgICAgICAgbGluZUNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk9e29wYWNpdHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRvb2wgPT09ICdhcnJvdycgJiYgY3VycmVudExpbmUubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHBvaW50cz17Y3VycmVudExpbmUuc2xpY2UoMCwgNCl9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9e2N1cnJlbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIGZpbGw9e2N1cnJlbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXticnVzaFNpemV9XG4gICAgICAgICAgICAgICAgICBwb2ludGVyTGVuZ3RoPXticnVzaFNpemUgKiAzfVxuICAgICAgICAgICAgICAgICAgcG9pbnRlcldpZHRoPXticnVzaFNpemUgKiAzfVxuICAgICAgICAgICAgICAgICAgb3BhY2l0eT17b3BhY2l0eX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZWZhdWx0OiBmcmVlaGFuZCBsaW5lXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICAgIHBvaW50cz17Y3VycmVudExpbmV9XG4gICAgICAgICAgICAgICAgc3Ryb2tlPXtjdXJyZW50Q29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2JydXNoU2l6ZX1cbiAgICAgICAgICAgICAgICB0ZW5zaW9uPXswLjV9XG4gICAgICAgICAgICAgICAgbGluZUNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBsaW5lSm9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb249e2dsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICBvcGFjaXR5PXtvcGFjaXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSgpfVxuICAgICAgICA8L0xheWVyPlxuICAgICAgPC9TdGFnZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5EcmF3aW5nRWRpdG9yLmRpc3BsYXlOYW1lID0gJ0RyYXdpbmdFZGl0b3InO1xuIl0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL0RyYXdpbmdFZGl0b3IudHN4In0=