import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_global.js?v=684697aa"
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_process.js?v=684697aa"
globalThis.process = globalThis.process || __process_polyfill

import { create } from "/node_modules/.vinxi/cache/client/deps/zustand.js?v=684697aa";
import { persist, createJSONStorage } from "/node_modules/.vinxi/cache/client/deps/zustand_middleware.js?v=684697aa";
export const useDrawingStore = create()(
  persist(
    (set) => ({
      // Initial state with 1 empty page
      pages: [{
        id: "page-0",
        lines: []
      }],
      currentPageIndex: 0,
      tool: "pen",
      color: "#000000",
      brushSize: 5,
      inspirationImages: [],
      // Actions
      setCurrentPage: (index) => set({ currentPageIndex: index }),
      addPage: () => set((state) => ({
        pages: [...state.pages, { id: `page-${Date.now()}`, lines: [] }]
      })),
      removePage: (index) => set((state) => {
        if (state.pages.length <= 1) return state;
        const newPages = state.pages.filter((_, i) => i !== index);
        const newCurrentIndex = Math.min(state.currentPageIndex, newPages.length - 1);
        return { pages: newPages, currentPageIndex: newCurrentIndex };
      }),
      setTool: (tool) => set({ tool }),
      setColor: (color) => set({ color }),
      setBrushSize: (size) => set({ brushSize: size }),
      addLine: (pageIndex, line) => set((state) => {
        const newPages = [...state.pages];
        const lineWithId = {
          ...line,
          id: line.id || `line-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          lines: [...newPages[pageIndex].lines, lineWithId]
        };
        return { pages: newPages };
      }),
      updateLine: (pageIndex, lineId, updates) => set((state) => {
        const newPages = [...state.pages];
        const page = newPages[pageIndex];
        const lineIndex = page.lines.findIndex((l) => l.id === lineId);
        if (lineIndex !== -1) {
          newPages[pageIndex] = {
            ...page,
            lines: [
              ...page.lines.slice(0, lineIndex),
              { ...page.lines[lineIndex], ...updates },
              ...page.lines.slice(lineIndex + 1)
            ]
          };
        }
        return { pages: newPages };
      }),
      clearPage: (pageIndex) => set((state) => {
        const newPages = [...state.pages];
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          lines: [],
          backgroundImage: void 0
        };
        return { pages: newPages };
      }),
      undoLastLine: () => set((state) => {
        const currentPage = state.pages[state.currentPageIndex];
        if (currentPage.lines.length === 0) return state;
        const newPages = [...state.pages];
        newPages[state.currentPageIndex] = {
          ...currentPage,
          lines: currentPage.lines.slice(0, -1)
          // Remove the last line
        };
        return { pages: newPages };
      }),
      addInspirationImage: (image) => set((state) => ({
        inspirationImages: [...state.inspirationImages, image]
      })),
      removeInspirationImage: (id) => set((state) => ({
        inspirationImages: state.inspirationImages.filter((img) => img.id !== id)
      })),
      setPageBackground: (pageIndex, imageUrl) => set((state) => {
        const newPages = [...state.pages];
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          backgroundImage: imageUrl
        };
        return { pages: newPages };
      })
    }),
    {
      name: "drawing-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZURyYXdpbmdTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJztcbmltcG9ydCB7IHBlcnNpc3QsIGNyZWF0ZUpTT05TdG9yYWdlIH0gZnJvbSAnenVzdGFuZC9taWRkbGV3YXJlJztcblxudHlwZSBEcmF3aW5nVG9vbCA9ICdwZW4nIHwgJ2VyYXNlcicgfCAnaGlnaGxpZ2h0ZXInIHwgJ3JlY3RhbmdsZScgfCAnY2lyY2xlJyB8ICdsaW5lJyB8ICdhcnJvdyc7XG5cbmludGVyZmFjZSBEcmF3aW5nTGluZSB7XG4gIGlkOiBzdHJpbmc7IC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIGxpbmUvZWxlbWVudFxuICB0b29sOiBEcmF3aW5nVG9vbDtcbiAgcG9pbnRzOiBudW1iZXJbXTtcbiAgY29sb3I6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICAvLyBGb3Igc2hhcGUgdG9vbHMsIHdlJ2xsIHVzZSBmaXJzdCA0IHBvaW50cyBhcyBbeDEsIHkxLCB4MiwgeTJdXG59XG5cbmludGVyZmFjZSBDYW52YXNQYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgbGluZXM6IERyYXdpbmdMaW5lW107XG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZzsgLy8gVVJMIHRvIGFuIGluc3BpcmF0aW9uIGltYWdlIHNldCBhcyBiYWNrZ3JvdW5kXG59XG5cbmludGVyZmFjZSBJbnNwaXJhdGlvbkltYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIG9iamVjdEtleTogc3RyaW5nO1xuICBidWNrZXROYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEcmF3aW5nU3RhdGUge1xuICBwYWdlczogQ2FudmFzUGFnZVtdO1xuICBjdXJyZW50UGFnZUluZGV4OiBudW1iZXI7XG4gIHRvb2w6IERyYXdpbmdUb29sO1xuICBjb2xvcjogc3RyaW5nO1xuICBicnVzaFNpemU6IG51bWJlcjtcbiAgaW5zcGlyYXRpb25JbWFnZXM6IEluc3BpcmF0aW9uSW1hZ2VbXTtcbiAgXG4gIC8vIEFjdGlvbnNcbiAgc2V0Q3VycmVudFBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBhZGRQYWdlOiAoKSA9PiB2b2lkO1xuICByZW1vdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0VG9vbDogKHRvb2w6IERyYXdpbmdUb29sKSA9PiB2b2lkO1xuICBzZXRDb2xvcjogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldEJydXNoU2l6ZTogKHNpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgYWRkTGluZTogKHBhZ2VJbmRleDogbnVtYmVyLCBsaW5lOiBPbWl0PERyYXdpbmdMaW5lLCAnaWQnPiAmIHsgaWQ/OiBzdHJpbmcgfSkgPT4gdm9pZDtcbiAgdXBkYXRlTGluZTogKHBhZ2VJbmRleDogbnVtYmVyLCBsaW5lSWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxEcmF3aW5nTGluZT4pID0+IHZvaWQ7XG4gIGNsZWFyUGFnZTogKHBhZ2VJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICB1bmRvTGFzdExpbmU6ICgpID0+IHZvaWQ7XG4gIGFkZEluc3BpcmF0aW9uSW1hZ2U6IChpbWFnZTogSW5zcGlyYXRpb25JbWFnZSkgPT4gdm9pZDtcbiAgcmVtb3ZlSW5zcGlyYXRpb25JbWFnZTogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldFBhZ2VCYWNrZ3JvdW5kOiAocGFnZUluZGV4OiBudW1iZXIsIGltYWdlVXJsPzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRHJhd2luZ1N0b3JlID0gY3JlYXRlPERyYXdpbmdTdGF0ZT4oKShcbiAgcGVyc2lzdChcbiAgICAoc2V0KSA9PiAoe1xuICAgICAgLy8gSW5pdGlhbCBzdGF0ZSB3aXRoIDEgZW1wdHkgcGFnZVxuICAgICAgcGFnZXM6IFt7XG4gICAgICAgIGlkOiAncGFnZS0wJyxcbiAgICAgICAgbGluZXM6IFtdLFxuICAgICAgfV0sXG4gICAgICBjdXJyZW50UGFnZUluZGV4OiAwLFxuICAgICAgdG9vbDogJ3BlbicsXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgYnJ1c2hTaXplOiA1LFxuICAgICAgaW5zcGlyYXRpb25JbWFnZXM6IFtdLFxuICAgICAgXG4gICAgICAvLyBBY3Rpb25zXG4gICAgICBzZXRDdXJyZW50UGFnZTogKGluZGV4KSA9PiBzZXQoeyBjdXJyZW50UGFnZUluZGV4OiBpbmRleCB9KSxcbiAgICAgIFxuICAgICAgYWRkUGFnZTogKCkgPT4gc2V0KChzdGF0ZSkgPT4gKHtcbiAgICAgICAgcGFnZXM6IFsuLi5zdGF0ZS5wYWdlcywgeyBpZDogYHBhZ2UtJHtEYXRlLm5vdygpfWAsIGxpbmVzOiBbXSB9XSxcbiAgICAgIH0pKSxcbiAgICAgIFxuICAgICAgcmVtb3ZlUGFnZTogKGluZGV4KSA9PiBzZXQoKHN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wYWdlcy5sZW5ndGggPD0gMSkgcmV0dXJuIHN0YXRlOyAvLyBLZWVwIGF0IGxlYXN0IG9uZSBwYWdlXG4gICAgICAgIGNvbnN0IG5ld1BhZ2VzID0gc3RhdGUucGFnZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgICAgIGNvbnN0IG5ld0N1cnJlbnRJbmRleCA9IE1hdGgubWluKHN0YXRlLmN1cnJlbnRQYWdlSW5kZXgsIG5ld1BhZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4geyBwYWdlczogbmV3UGFnZXMsIGN1cnJlbnRQYWdlSW5kZXg6IG5ld0N1cnJlbnRJbmRleCB9O1xuICAgICAgfSksXG4gICAgICBcbiAgICAgIHNldFRvb2w6ICh0b29sKSA9PiBzZXQoeyB0b29sIH0pLFxuICAgICAgc2V0Q29sb3I6IChjb2xvcikgPT4gc2V0KHsgY29sb3IgfSksXG4gICAgICBzZXRCcnVzaFNpemU6IChzaXplKSA9PiBzZXQoeyBicnVzaFNpemU6IHNpemUgfSksXG4gICAgICBcbiAgICAgIGFkZExpbmU6IChwYWdlSW5kZXgsIGxpbmUpID0+IHNldCgoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnZXMgPSBbLi4uc3RhdGUucGFnZXNdO1xuICAgICAgICBjb25zdCBsaW5lV2l0aElkID0ge1xuICAgICAgICAgIC4uLmxpbmUsXG4gICAgICAgICAgaWQ6IGxpbmUuaWQgfHwgYGxpbmUtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gLFxuICAgICAgICB9O1xuICAgICAgICBuZXdQYWdlc1twYWdlSW5kZXhdID0ge1xuICAgICAgICAgIC4uLm5ld1BhZ2VzW3BhZ2VJbmRleF0sXG4gICAgICAgICAgbGluZXM6IFsuLi5uZXdQYWdlc1twYWdlSW5kZXhdLmxpbmVzLCBsaW5lV2l0aElkXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgcGFnZXM6IG5ld1BhZ2VzIH07XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgdXBkYXRlTGluZTogKHBhZ2VJbmRleCwgbGluZUlkLCB1cGRhdGVzKSA9PiBzZXQoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2VzID0gWy4uLnN0YXRlLnBhZ2VzXTtcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ld1BhZ2VzW3BhZ2VJbmRleF07XG4gICAgICAgIGNvbnN0IGxpbmVJbmRleCA9IHBhZ2UubGluZXMuZmluZEluZGV4KChsKSA9PiBsLmlkID09PSBsaW5lSWQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBuZXdQYWdlc1twYWdlSW5kZXhdID0ge1xuICAgICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgICAgIC4uLnBhZ2UubGluZXMuc2xpY2UoMCwgbGluZUluZGV4KSxcbiAgICAgICAgICAgICAgeyAuLi5wYWdlLmxpbmVzW2xpbmVJbmRleF0sIC4uLnVwZGF0ZXMgfSxcbiAgICAgICAgICAgICAgLi4ucGFnZS5saW5lcy5zbGljZShsaW5lSW5kZXggKyAxKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgcGFnZXM6IG5ld1BhZ2VzIH07XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgY2xlYXJQYWdlOiAocGFnZUluZGV4KSA9PiBzZXQoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2VzID0gWy4uLnN0YXRlLnBhZ2VzXTtcbiAgICAgICAgbmV3UGFnZXNbcGFnZUluZGV4XSA9IHtcbiAgICAgICAgICAuLi5uZXdQYWdlc1twYWdlSW5kZXhdLFxuICAgICAgICAgIGxpbmVzOiBbXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgcGFnZXM6IG5ld1BhZ2VzIH07XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgdW5kb0xhc3RMaW5lOiAoKSA9PiBzZXQoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gc3RhdGUucGFnZXNbc3RhdGUuY3VycmVudFBhZ2VJbmRleF07XG4gICAgICAgIGlmIChjdXJyZW50UGFnZS5saW5lcy5sZW5ndGggPT09IDApIHJldHVybiBzdGF0ZTsgLy8gTm90aGluZyB0byB1bmRvXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdQYWdlcyA9IFsuLi5zdGF0ZS5wYWdlc107XG4gICAgICAgIG5ld1BhZ2VzW3N0YXRlLmN1cnJlbnRQYWdlSW5kZXhdID0ge1xuICAgICAgICAgIC4uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIGxpbmVzOiBjdXJyZW50UGFnZS5saW5lcy5zbGljZSgwLCAtMSksIC8vIFJlbW92ZSB0aGUgbGFzdCBsaW5lXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHBhZ2VzOiBuZXdQYWdlcyB9O1xuICAgICAgfSksXG4gICAgICBcbiAgICAgIGFkZEluc3BpcmF0aW9uSW1hZ2U6IChpbWFnZSkgPT4gc2V0KChzdGF0ZSkgPT4gKHtcbiAgICAgICAgaW5zcGlyYXRpb25JbWFnZXM6IFsuLi5zdGF0ZS5pbnNwaXJhdGlvbkltYWdlcywgaW1hZ2VdLFxuICAgICAgfSkpLFxuICAgICAgXG4gICAgICByZW1vdmVJbnNwaXJhdGlvbkltYWdlOiAoaWQpID0+IHNldCgoc3RhdGUpID0+ICh7XG4gICAgICAgIGluc3BpcmF0aW9uSW1hZ2VzOiBzdGF0ZS5pbnNwaXJhdGlvbkltYWdlcy5maWx0ZXIoKGltZykgPT4gaW1nLmlkICE9PSBpZCksXG4gICAgICB9KSksXG4gICAgICBcbiAgICAgIHNldFBhZ2VCYWNrZ3JvdW5kOiAocGFnZUluZGV4LCBpbWFnZVVybCkgPT4gc2V0KChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdlcyA9IFsuLi5zdGF0ZS5wYWdlc107XG4gICAgICAgIG5ld1BhZ2VzW3BhZ2VJbmRleF0gPSB7XG4gICAgICAgICAgLi4ubmV3UGFnZXNbcGFnZUluZGV4XSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlVXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBwYWdlczogbmV3UGFnZXMgfTtcbiAgICAgIH0pLFxuICAgIH0pLFxuICAgIHtcbiAgICAgIG5hbWU6ICdkcmF3aW5nLXN0b3JhZ2UnLFxuICAgICAgc3RvcmFnZTogY3JlYXRlSlNPTlN0b3JhZ2UoKCkgPT4gbG9jYWxTdG9yYWdlKSxcbiAgICB9XG4gIClcbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxTQUFTLHlCQUF5QjtBQWtEcEMsYUFBTSxrQkFBa0IsT0FBcUI7QUFBQSxFQUNsRDtBQUFBLElBQ0UsQ0FBQyxTQUFTO0FBQUE7QUFBQSxNQUVSLE9BQU8sQ0FBQztBQUFBLFFBQ04sSUFBSTtBQUFBLFFBQ0osT0FBTyxDQUFDO0FBQUEs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