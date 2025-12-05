import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/InspirationImagePanel.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/InspirationImagePanel.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Upload, Image, Loader2 } from "/node_modules/.vinxi/cache/client/deps/lucide-react.js?v=684697aa";
import __vite__cjsImport7_react from "/node_modules/.vinxi/cache/client/deps/react.js?v=684697aa"; const useState = __vite__cjsImport7_react["useState"];
import { useMutation, useQuery } from "/node_modules/.vinxi/cache/client/deps/@tanstack_react-query.js?v=684697aa";
import { useTRPC } from "/src/trpc/react.tsx";
import { useDrawingStore } from "/src/stores/useDrawingStore.ts";
import toast from "/node_modules/.vinxi/cache/client/deps/react-hot-toast.js?v=684697aa";
export function InspirationImagePanel() {
  _s();
  const trpc = useTRPC();
  const [isUploading, setIsUploading] = useState(false);
  const inspirationImages = useDrawingStore((state) => state.inspirationImages);
  const addInspirationImage = useDrawingStore((state) => state.addInspirationImage);
  const removeInspirationImage = useDrawingStore((state) => state.removeInspirationImage);
  const currentPageIndex = useDrawingStore((state) => state.currentPageIndex);
  const setPageBackground = useDrawingStore((state) => state.setPageBackground);
  const pages = useDrawingStore((state) => state.pages);
  const minioBaseUrlQuery = useQuery(trpc.getMinioBaseUrl.queryOptions());
  const minioBaseUrl = minioBaseUrlQuery.data?.baseUrl;
  const generateUploadUrlMutation = useMutation(
    trpc.generateUploadUrl.mutationOptions()
  );
  const handleFileSelect = async (file) => {
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }
    setIsUploading(true);
    try {
      const uploadData = await generateUploadUrlMutation.mutateAsync({
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type
      });
      const uploadResponse = await fetch(uploadData.uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type
        }
      });
      if (!uploadResponse.ok) {
        throw new Error("Upload failed");
      }
      const imageUrl = minioBaseUrl ? `${minioBaseUrl}/images/${uploadData.objectKey}` : URL.createObjectURL(file);
      addInspirationImage({
        id: uploadData.objectKey,
        url: imageUrl,
        objectKey: uploadData.objectKey,
        bucketName: uploadData.bucketName
      });
      toast.success("Inspiration image uploaded!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };
  const handleSetBackground = (imageUrl) => {
    setPageBackground(currentPageIndex, imageUrl);
    toast.success(`Set as background for page ${currentPageIndex + 1}`);
  };
  const currentPageBackground = pages[currentPageIndex]?.backgroundImage;
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-lg p-4 border border-gray-200", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-gray-700", children: "Inspiration Images" }, void 0, false, {
        fileName: "/app/src/components/InspirationImagePanel.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { className: "flex items-center gap-1 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer", children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "file",
            accept: "image/*",
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) handleFileSelect(file);
              e.target.value = "";
            },
            className: "hidden",
            disabled: isUploading
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/InspirationImagePanel.tsx",
            lineNumber: 104,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(Upload, { className: "w-3 h-3" }, void 0, false, {
          fileName: "/app/src/components/InspirationImagePanel.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        "Upload"
      ] }, void 0, true, {
        fileName: "/app/src/components/InspirationImagePanel.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/InspirationImagePanel.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    isUploading && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxDEV(Loader2, { className: "w-6 h-6 text-indigo-500 animate-spin" }, void 0, false, {
      fileName: "/app/src/components/InspirationImagePanel.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/components/InspirationImagePanel.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    inspirationImages.length === 0 && !isUploading ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxDEV(Image, { className: "w-12 h-12 text-gray-300 mx-auto mb-2" }, void 0, false, {
        fileName: "/app/src/components/InspirationImagePanel.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-500", children: "No inspiration images yet" }, void 0, false, {
        fileName: "/app/src/components/InspirationImagePanel.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400 mt-1", children: "Upload images to use as reference" }, void 0, false, {
        fileName: "/app/src/components/InspirationImagePanel.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/InspirationImagePanel.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 max-h-96 overflow-y-auto", children: inspirationImages.map(
      (image) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "relative group aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-indigo-300 transition-all",
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: image.url,
                alt: "Inspiration",
                className: "w-full h-full object-cover"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/InspirationImagePanel.tsx",
                lineNumber: 139,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => handleSetBackground(image.url),
                  className: `px-3 py-1 text-xs font-medium rounded transition-colors ${currentPageBackground === image.url ? "bg-green-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`,
                  children: currentPageBackground === image.url ? "Background ✓" : "Set Background"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/InspirationImagePanel.tsx",
                  lineNumber: 146,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    if (currentPageBackground === image.url) {
                      setPageBackground(currentPageIndex, void 0);
                    }
                    removeInspirationImage(image.id);
                    toast.success("Image removed");
                  },
                  className: "px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors",
                  children: "Remove"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/InspirationImagePanel.tsx",
                  lineNumber: 156,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/InspirationImagePanel.tsx",
              lineNumber: 145,
              columnNumber: 15
            }, this)
          ]
        },
        image.id,
        true,
        {
          fileName: "/app/src/components/InspirationImagePanel.tsx",
          lineNumber: 135,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/components/InspirationImagePanel.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/InspirationImagePanel.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
_s(InspirationImagePanel, "pjb+VM1OaP8cOgquVV67Mh0F094=", false, function() {
  return [useTRPC, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useDrawingStore, useQuery, useMutation];
});
_c = InspirationImagePanel;
var _c;
$RefreshReg$(_c, "InspirationImagePanel");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/InspirationImagePanel.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/InspirationImagePanel.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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Q0E7QUFBQSxJQUNELEtBckNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FzQ0E7QUFBQSxPQXZFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBeUVBO0FBRUo7QUFBQzNDLEdBcEplRCx1QkFBcUI7QUFBQSxVQUN0QkgsU0FHYUMsaUJBQ0VBLGlCQUNHQSxpQkFDTkEsaUJBQ0NBLGlCQUNaQSxpQkFFWUYsVUFHUUQsV0FBVztBQUFBO0FBQUFpRSxLQWQvQjVEO0FBQXFCLElBQUE0RDtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiVXBsb2FkIiwiSW1hZ2UiLCJMb2FkZXIyIiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlVFJQQyIsInVzZURyYXdpbmdTdG9yZSIsInRvYXN0IiwiSW5zcGlyYXRpb25JbWFnZVBhbmVsIiwiX3MiLCJ0cnBjIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsImluc3BpcmF0aW9uSW1hZ2VzIiwic3RhdGUiLCJhZGRJbnNwaXJhdGlvbkltYWdlIiwicmVtb3ZlSW5zcGlyYXRpb25JbWFnZSIsImN1cnJlbnRQYWdlSW5kZXgiLCJzZXRQYWdlQmFja2dyb3VuZCIsInBhZ2VzIiwibWluaW9CYXNlVXJsUXVlcnkiLCJnZXRNaW5pb0Jhc2VVcmwiLCJxdWVyeU9wdGlvbnMiLCJtaW5pb0Jhc2VVcmwiLCJkYXRhIiwiYmFzZVVybCIsImdlbmVyYXRlVXBsb2FkVXJsTXV0YXRpb24iLCJnZW5lcmF0ZVVwbG9hZFVybCIsIm11dGF0aW9uT3B0aW9ucyIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlIiwic2l6ZSIsImVycm9yIiwidXBsb2FkRGF0YSIsIm11dGF0ZUFzeW5jIiwiZmlsZU5hbWUiLCJuYW1lIiwiZmlsZVNpemUiLCJtaW1lVHlwZSIsInR5cGUiLCJ1cGxvYWRSZXNwb25zZSIsImZldGNoIiwidXBsb2FkVXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiaW1hZ2VVcmwiLCJvYmplY3RLZXkiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpZCIsInVybCIsImJ1Y2tldE5hbWUiLCJzdWNjZXNzIiwiY29uc29sZSIsImhhbmRsZVNldEJhY2tncm91bmQiLCJjdXJyZW50UGFnZUJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsImltYWdlIiwidW5kZWZpbmVkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW5zcGlyYXRpb25JbWFnZVBhbmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWQsIFgsIEltYWdlLCBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVRSUEMgfSBmcm9tICd+L3RycGMvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRHJhd2luZ1N0b3JlIH0gZnJvbSAnfi9zdG9yZXMvdXNlRHJhd2luZ1N0b3JlJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gSW5zcGlyYXRpb25JbWFnZVBhbmVsKCkge1xuICBjb25zdCB0cnBjID0gdXNlVFJQQygpO1xuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGluc3BpcmF0aW9uSW1hZ2VzID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuaW5zcGlyYXRpb25JbWFnZXMpO1xuICBjb25zdCBhZGRJbnNwaXJhdGlvbkltYWdlID0gdXNlRHJhd2luZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUuYWRkSW5zcGlyYXRpb25JbWFnZSk7XG4gIGNvbnN0IHJlbW92ZUluc3BpcmF0aW9uSW1hZ2UgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5yZW1vdmVJbnNwaXJhdGlvbkltYWdlKTtcbiAgY29uc3QgY3VycmVudFBhZ2VJbmRleCA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQYWdlSW5kZXgpO1xuICBjb25zdCBzZXRQYWdlQmFja2dyb3VuZCA9IHVzZURyYXdpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldFBhZ2VCYWNrZ3JvdW5kKTtcbiAgY29uc3QgcGFnZXMgPSB1c2VEcmF3aW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcyk7XG4gIFxuICBjb25zdCBtaW5pb0Jhc2VVcmxRdWVyeSA9IHVzZVF1ZXJ5KHRycGMuZ2V0TWluaW9CYXNlVXJsLnF1ZXJ5T3B0aW9ucygpKTtcbiAgY29uc3QgbWluaW9CYXNlVXJsID0gbWluaW9CYXNlVXJsUXVlcnkuZGF0YT8uYmFzZVVybDtcbiAgXG4gIGNvbnN0IGdlbmVyYXRlVXBsb2FkVXJsTXV0YXRpb24gPSB1c2VNdXRhdGlvbihcbiAgICB0cnBjLmdlbmVyYXRlVXBsb2FkVXJsLm11dGF0aW9uT3B0aW9ucygpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgaWYgKGZpbGUuc2l6ZSA+IDEwICogMTAyNCAqIDEwMjQpIHtcbiAgICAgIHRvYXN0LmVycm9yKCdGaWxlIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gMTBNQicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwbG9hZERhdGEgPSBhd2FpdCBnZW5lcmF0ZVVwbG9hZFVybE11dGF0aW9uLm11dGF0ZUFzeW5jKHtcbiAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgbWltZVR5cGU6IGZpbGUudHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGxvYWRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVwbG9hZERhdGEudXBsb2FkVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGJvZHk6IGZpbGUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogZmlsZS50eXBlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdXBsb2FkUmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcGxvYWQgZmFpbGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlVXJsID0gbWluaW9CYXNlVXJsXG4gICAgICAgID8gYCR7bWluaW9CYXNlVXJsfS9pbWFnZXMvJHt1cGxvYWREYXRhLm9iamVjdEtleX1gXG4gICAgICAgIDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblxuICAgICAgYWRkSW5zcGlyYXRpb25JbWFnZSh7XG4gICAgICAgIGlkOiB1cGxvYWREYXRhLm9iamVjdEtleSxcbiAgICAgICAgdXJsOiBpbWFnZVVybCxcbiAgICAgICAgb2JqZWN0S2V5OiB1cGxvYWREYXRhLm9iamVjdEtleSxcbiAgICAgICAgYnVja2V0TmFtZTogdXBsb2FkRGF0YS5idWNrZXROYW1lLFxuICAgICAgfSk7XG5cbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0luc3BpcmF0aW9uIGltYWdlIHVwbG9hZGVkIScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byB1cGxvYWQgaW1hZ2UnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZXRCYWNrZ3JvdW5kID0gKGltYWdlVXJsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlQmFja2dyb3VuZChjdXJyZW50UGFnZUluZGV4LCBpbWFnZVVybCk7XG4gICAgdG9hc3Quc3VjY2VzcyhgU2V0IGFzIGJhY2tncm91bmQgZm9yIHBhZ2UgJHtjdXJyZW50UGFnZUluZGV4ICsgMX1gKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50UGFnZUJhY2tncm91bmQgPSBwYWdlc1tjdXJyZW50UGFnZUluZGV4XT8uYmFja2dyb3VuZEltYWdlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5JbnNwaXJhdGlvbiBJbWFnZXM8L2gzPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtMyBweS0xIGJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgICAgICAgICAgIGlmIChmaWxlKSBoYW5kbGVGaWxlU2VsZWN0KGZpbGUpO1xuICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgIFVwbG9hZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc1VwbG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1pbmRpZ28tNTAwIGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2luc3BpcmF0aW9uSW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiAhaXNVcGxvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1ncmF5LTMwMCBteC1hdXRvIG1iLTJcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk5vIGluc3BpcmF0aW9uIGltYWdlcyB5ZXQ8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG10LTFcIj5VcGxvYWQgaW1hZ2VzIHRvIHVzZSBhcyByZWZlcmVuY2U8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yIG1heC1oLTk2IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIHtpbnNwaXJhdGlvbkltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW1hZ2UuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwIGFzcGVjdC1zcXVhcmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1pbmRpZ28tMzAwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgIGFsdD1cIkluc3BpcmF0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svNjAgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldEJhY2tncm91bmQoaW1hZ2UudXJsKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2VCYWNrZ3JvdW5kID09PSBpbWFnZS51cmxcbiAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRQYWdlQmFja2dyb3VuZCA9PT0gaW1hZ2UudXJsID8gJ0JhY2tncm91bmQg4pyTJyA6ICdTZXQgQmFja2dyb3VuZCd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2VCYWNrZ3JvdW5kID09PSBpbWFnZS51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlQmFja2dyb3VuZChjdXJyZW50UGFnZUluZGV4LCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUluc3BpcmF0aW9uSW1hZ2UoaW1hZ2UuaWQpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdJbWFnZSByZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1tZWRpdW0gcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9JbnNwaXJhdGlvbkltYWdlUGFuZWwudHN4In0=