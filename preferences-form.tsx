import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PreferencesForm.tsx");import __buffer_polyfill from "/node_modules/.vinxi/cache/client/deps/vite-plugin-node-polyfills_shims_buffer.js?v=684697aa"
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/PreferencesForm.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useForm } from "/node_modules/.vinxi/cache/client/deps/react-hook-form.js?v=684697aa";
import { zodResolver } from "/node_modules/.vinxi/cache/client/deps/@hookform_resolvers_zod.js?v=684697aa";
import { z } from "/node_modules/.vinxi/cache/client/deps/zod.js?v=684697aa";
import { Code2, Database, Palette, Zap, Shield, Radio, Sparkles } from "/node_modules/.vinxi/cache/client/deps/lucide-react.js?v=684697aa";
const preferencesSchema = z.object({
  projectPurpose: z.string().min(10, {
    message: "Please provide at least 10 characters describing your project"
  }).max(2e3, {
    message: "Project description must be less than 2000 characters"
  }),
  frontendFramework: z.enum(["react", "vue", "angular", "svelte", "nextjs"], {
    required_error: "Please select a frontend framework"
  }),
  backendFramework: z.enum(["express", "fastapi", "django", "flask", "nestjs", "none"], {
    required_error: "Please select a backend option"
  }),
  styling: z.enum(["tailwind", "bootstrap", "css"], {
    required_error: "Please select a styling approach"
  }),
  features: z.array(z.enum(["auth", "database", "api", "realtime"])).default([])
});
export function PreferencesForm({ onSubmit, isSubmitting = false }) {
  _s();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      projectPurpose: "",
      frontendFramework: "react",
      backendFramework: "express",
      styling: "tailwind",
      features: []
    }
  });
  const selectedFrontend = watch("frontendFramework");
  const selectedBackend = watch("backendFramework");
  const selectedStyling = watch("styling");
  const selectedFeatures = watch("features") || [];
  const projectPurposeValue = watch("projectPurpose") || "";
  const characterCount = projectPurposeValue.length;
  const maxCharacters = 2e3;
  return /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        "Project Purpose & Description"
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-3", children: "Describe what your website is for, its target audience, key features, and any specific requirements. The more detail you provide, the better the AI can generate your website." }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          ...register("projectPurpose"),
          rows: 6,
          placeholder: "Example: I want to create an e-commerce website for selling handmade jewelry. It should have a product catalog with filtering, a shopping cart, user authentication, and a checkout process. The design should be elegant and modern, targeting women aged 25-45...",
          className: "w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 87,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-2", children: [
        /* @__PURE__ */ jsxDEV("div", { children: errors.projectPurpose && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-600", children: errors.projectPurpose.message }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: `text-xs ${characterCount > maxCharacters ? "text-red-600" : characterCount > maxCharacters * 0.9 ? "text-yellow-600" : "text-gray-500"}`, children: [
          characterCount,
          " / ",
          maxCharacters,
          " characters"
        ] }, void 0, true, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/PreferencesForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Code2, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        "Frontend Framework"
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: [
        { value: "react", label: "React", desc: "Modern, component-based UI library" },
        { value: "vue", label: "Vue.js", desc: "Progressive JavaScript framework" },
        { value: "angular", label: "Angular", desc: "Full-featured TypeScript framework" },
        { value: "svelte", label: "Svelte", desc: "Compile-time reactive framework" },
        { value: "nextjs", label: "Next.js", desc: "React framework with SSR" }
      ].map((option) => {
        const isSelected = selectedFrontend === option.value;
        return /* @__PURE__ */ jsxDEV(
          "label",
          {
            className: `relative flex cursor-pointer rounded-lg border-2 bg-white p-4 transition-all hover:shadow-md ${isSelected ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-300 hover:border-blue-300"}`,
            children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "radio",
                  ...register("frontendFramework"),
                  value: option.value,
                  className: "sr-only"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 129,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "flex flex-1 items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? "border-blue-500 bg-blue-500" : "border-gray-300"}`,
                    children: isSelected && /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 rounded-full bg-white" }, void 0, false, {
                      fileName: "/app/src/components/PreferencesForm.tsx",
                      lineNumber: 144,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 136,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: `block text-sm font-semibold ${isSelected ? "text-blue-900" : "text-gray-900"}`, children: option.label }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: `mt-1 text-sm ${isSelected ? "text-blue-700" : "text-gray-500"}`, children: option.desc }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 153,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 147,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/PreferencesForm.tsx",
                lineNumber: 135,
                columnNumber: 17
              }, this)
            ]
          },
          option.value,
          true,
          {
            fileName: "/app/src/components/PreferencesForm.tsx",
            lineNumber: 121,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      errors.frontendFramework && /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-red-600", children: errors.frontendFramework.message }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/PreferencesForm.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Database, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this),
        "Backend Framework"
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: [
        { value: "express", label: "Express.js", desc: "Minimal Node.js framework" },
        { value: "fastapi", label: "FastAPI", desc: "Modern Python API framework" },
        { value: "django", label: "Django", desc: "Full-stack Python framework" },
        { value: "flask", label: "Flask", desc: "Lightweight Python framework" },
        { value: "nestjs", label: "NestJS", desc: "Progressive Node.js framework" },
        { value: "none", label: "No Backend", desc: "Static site only" }
      ].map((option) => {
        const isSelected = selectedBackend === option.value;
        return /* @__PURE__ */ jsxDEV(
          "label",
          {
            className: `relative flex cursor-pointer rounded-lg border-2 bg-white p-4 transition-all hover:shadow-md ${isSelected ? "border-green-500 bg-green-50 shadow-md" : "border-gray-300 hover:border-green-300"}`,
            children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "radio",
                  ...register("backendFramework"),
                  value: option.value,
                  className: "sr-only"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 194,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "flex flex-1 items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? "border-green-500 bg-green-500" : "border-gray-300"}`,
                    children: isSelected && /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 rounded-full bg-white" }, void 0, false, {
                      fileName: "/app/src/components/PreferencesForm.tsx",
                      lineNumber: 209,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: `block text-sm font-semibold ${isSelected ? "text-green-900" : "text-gray-900"}`, children: option.label }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 213,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: `mt-1 text-sm ${isSelected ? "text-green-700" : "text-gray-500"}`, children: option.desc }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 218,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 212,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/PreferencesForm.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this)
            ]
          },
          option.value,
          true,
          {
            fileName: "/app/src/components/PreferencesForm.tsx",
            lineNumber: 186,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      errors.backendFramework && /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-red-600", children: errors.backendFramework.message }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/PreferencesForm.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Palette, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 237,
          columnNumber: 11
        }, this),
        "Styling Approach"
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 236,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
        { value: "tailwind", label: "Tailwind CSS", desc: "Utility-first CSS framework" },
        { value: "bootstrap", label: "Bootstrap", desc: "Popular component library" },
        { value: "css", label: "Custom CSS", desc: "Write your own styles" }
      ].map((option) => {
        const isSelected = selectedStyling === option.value;
        return /* @__PURE__ */ jsxDEV(
          "label",
          {
            className: `relative flex cursor-pointer rounded-lg border-2 bg-white p-4 transition-all hover:shadow-md ${isSelected ? "border-purple-500 bg-purple-50 shadow-md" : "border-gray-300 hover:border-purple-300"}`,
            children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "radio",
                  ...register("styling"),
                  value: option.value,
                  className: "sr-only"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 256,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "flex flex-1 items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? "border-purple-500 bg-purple-500" : "border-gray-300"}`,
                    children: isSelected && /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 rounded-full bg-white" }, void 0, false, {
                      fileName: "/app/src/components/PreferencesForm.tsx",
                      lineNumber: 271,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 263,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: `block text-sm font-semibold ${isSelected ? "text-purple-900" : "text-gray-900"}`, children: option.label }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 275,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: `mt-1 text-sm ${isSelected ? "text-purple-700" : "text-gray-500"}`, children: option.desc }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 280,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 274,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/PreferencesForm.tsx",
                lineNumber: 262,
                columnNumber: 17
              }, this)
            ]
          },
          option.value,
          true,
          {
            fileName: "/app/src/components/PreferencesForm.tsx",
            lineNumber: 248,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      errors.styling && /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-red-600", children: errors.styling.message }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/PreferencesForm.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Zap, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/PreferencesForm.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, this),
        "Dynamic Features (Optional)"
      ] }, void 0, true, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 298,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
        { value: "auth", label: "Authentication", desc: "User login/signup", icon: Shield },
        { value: "database", label: "Database", desc: "Data persistence", icon: Database },
        { value: "api", label: "API Endpoints", desc: "RESTful API", icon: Code2 },
        { value: "realtime", label: "Real-time", desc: "WebSocket updates", icon: Radio }
      ].map((option) => {
        const Icon = option.icon;
        const isChecked = selectedFeatures.includes(option.value);
        return /* @__PURE__ */ jsxDEV(
          "label",
          {
            className: `relative flex cursor-pointer rounded-lg border-2 p-4 transition-all ${isChecked ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:border-blue-300"}`,
            children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "checkbox",
                  ...register("features"),
                  value: option.value,
                  className: "sr-only"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 320,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "flex flex-1 items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Icon, { className: `w-5 h-5 ${isChecked ? "text-blue-600" : "text-gray-400"}` }, void 0, false, {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 327,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "block text-sm font-semibold text-gray-900", children: option.label }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 329,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "mt-1 text-sm text-gray-500", children: option.desc }, void 0, false, {
                    fileName: "/app/src/components/PreferencesForm.tsx",
                    lineNumber: 332,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/PreferencesForm.tsx",
                  lineNumber: 328,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/PreferencesForm.tsx",
                lineNumber: 326,
                columnNumber: 17
              }, this)
            ]
          },
          option.value,
          true,
          {
            fileName: "/app/src/components/PreferencesForm.tsx",
            lineNumber: 312,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 302,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/PreferencesForm.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
        children: isSubmitting ? "Generating Website..." : "Generate Website Code"
      },
      void 0,
      false,
      {
        fileName: "/app/src/components/PreferencesForm.tsx",
        lineNumber: 342,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/src/components/PreferencesForm.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
_s(PreferencesForm, "+LcrTzTax1ndAePIwZBfPwbnP68=", false, function() {
  return [useForm];
});
_c = PreferencesForm;
var _c;
$RefreshReg$(_c, "PreferencesForm");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/PreferencesForm.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/PreferencesForm.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUNDLEdBN1NlSCxpQkFBZTtBQUFBLFVBTXpCekIsT0FBTztBQUFBO0FBQUFzRCxLQU5HN0I7QUFBZSxJQUFBNkI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUZvcm0iLCJ6b2RSZXNvbHZlciIsInoiLCJDb2RlMiIsIkRhdGFiYXNlIiwiUGFsZXR0ZSIsIlphcCIsIlNoaWVsZCIsIlJhZGlvIiwiU3BhcmtsZXMiLCJwcmVmZXJlbmNlc1NjaGVtYSIsIm9iamVjdCIsInByb2plY3RQdXJwb3NlIiwic3RyaW5nIiwibWluIiwibWVzc2FnZSIsIm1heCIsImZyb250ZW5kRnJhbWV3b3JrIiwiZW51bSIsInJlcXVpcmVkX2Vycm9yIiwiYmFja2VuZEZyYW1ld29yayIsInN0eWxpbmciLCJmZWF0dXJlcyIsImFycmF5IiwiZGVmYXVsdCIsIlByZWZlcmVuY2VzRm9ybSIsIm9uU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiX3MiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwic2VsZWN0ZWRGcm9udGVuZCIsInNlbGVjdGVkQmFja2VuZCIsInNlbGVjdGVkU3R5bGluZyIsInNlbGVjdGVkRmVhdHVyZXMiLCJwcm9qZWN0UHVycG9zZVZhbHVlIiwiY2hhcmFjdGVyQ291bnQiLCJsZW5ndGgiLCJtYXhDaGFyYWN0ZXJzIiwidmFsdWUiLCJsYWJlbCIsImRlc2MiLCJtYXAiLCJvcHRpb24iLCJpc1NlbGVjdGVkIiwiaWNvbiIsIkljb24iLCJpc0NoZWNrZWQiLCJpbmNsdWRlcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlByZWZlcmVuY2VzRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMvem9kJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgQ29kZTIsIERhdGFiYXNlLCBQYWxldHRlLCBaYXAsIFNoaWVsZCwgUmFkaW8sIFNwYXJrbGVzIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuY29uc3QgcHJlZmVyZW5jZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHByb2plY3RQdXJwb3NlOiB6LnN0cmluZygpLm1pbigxMCwge1xuICAgIG1lc3NhZ2U6ICdQbGVhc2UgcHJvdmlkZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzIGRlc2NyaWJpbmcgeW91ciBwcm9qZWN0JyxcbiAgfSkubWF4KDIwMDAsIHtcbiAgICBtZXNzYWdlOiAnUHJvamVjdCBkZXNjcmlwdGlvbiBtdXN0IGJlIGxlc3MgdGhhbiAyMDAwIGNoYXJhY3RlcnMnLFxuICB9KSxcbiAgZnJvbnRlbmRGcmFtZXdvcms6IHouZW51bShbJ3JlYWN0JywgJ3Z1ZScsICdhbmd1bGFyJywgJ3N2ZWx0ZScsICduZXh0anMnXSwge1xuICAgIHJlcXVpcmVkX2Vycm9yOiAnUGxlYXNlIHNlbGVjdCBhIGZyb250ZW5kIGZyYW1ld29yaycsXG4gIH0pLFxuICBiYWNrZW5kRnJhbWV3b3JrOiB6LmVudW0oWydleHByZXNzJywgJ2Zhc3RhcGknLCAnZGphbmdvJywgJ2ZsYXNrJywgJ25lc3RqcycsICdub25lJ10sIHtcbiAgICByZXF1aXJlZF9lcnJvcjogJ1BsZWFzZSBzZWxlY3QgYSBiYWNrZW5kIG9wdGlvbicsXG4gIH0pLFxuICBzdHlsaW5nOiB6LmVudW0oWyd0YWlsd2luZCcsICdib290c3RyYXAnLCAnY3NzJ10sIHtcbiAgICByZXF1aXJlZF9lcnJvcjogJ1BsZWFzZSBzZWxlY3QgYSBzdHlsaW5nIGFwcHJvYWNoJyxcbiAgfSksXG4gIGZlYXR1cmVzOiB6LmFycmF5KHouZW51bShbJ2F1dGgnLCAnZGF0YWJhc2UnLCAnYXBpJywgJ3JlYWx0aW1lJ10pKS5kZWZhdWx0KFtdKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBQcmVmZXJlbmNlc0Zvcm1EYXRhID0gei5pbmZlcjx0eXBlb2YgcHJlZmVyZW5jZXNTY2hlbWE+O1xuXG5pbnRlcmZhY2UgUHJlZmVyZW5jZXNGb3JtUHJvcHMge1xuICBvblN1Ym1pdDogKGRhdGE6IFByZWZlcmVuY2VzRm9ybURhdGEpID0+IHZvaWQ7XG4gIGlzU3VibWl0dGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmVmZXJlbmNlc0Zvcm0oeyBvblN1Ym1pdCwgaXNTdWJtaXR0aW5nID0gZmFsc2UgfTogUHJlZmVyZW5jZXNGb3JtUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtPFByZWZlcmVuY2VzRm9ybURhdGE+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIocHJlZmVyZW5jZXNTY2hlbWEpLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIHByb2plY3RQdXJwb3NlOiAnJyxcbiAgICAgIGZyb250ZW5kRnJhbWV3b3JrOiAncmVhY3QnLFxuICAgICAgYmFja2VuZEZyYW1ld29yazogJ2V4cHJlc3MnLFxuICAgICAgc3R5bGluZzogJ3RhaWx3aW5kJyxcbiAgICAgIGZlYXR1cmVzOiBbXSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzZWxlY3RlZEZyb250ZW5kID0gd2F0Y2goJ2Zyb250ZW5kRnJhbWV3b3JrJyk7XG4gIGNvbnN0IHNlbGVjdGVkQmFja2VuZCA9IHdhdGNoKCdiYWNrZW5kRnJhbWV3b3JrJyk7XG4gIGNvbnN0IHNlbGVjdGVkU3R5bGluZyA9IHdhdGNoKCdzdHlsaW5nJyk7XG4gIGNvbnN0IHNlbGVjdGVkRmVhdHVyZXMgPSB3YXRjaCgnZmVhdHVyZXMnKSB8fCBbXTtcbiAgY29uc3QgcHJvamVjdFB1cnBvc2VWYWx1ZSA9IHdhdGNoKCdwcm9qZWN0UHVycG9zZScpIHx8ICcnO1xuICBjb25zdCBjaGFyYWN0ZXJDb3VudCA9IHByb2plY3RQdXJwb3NlVmFsdWUubGVuZ3RoO1xuICBjb25zdCBtYXhDaGFyYWN0ZXJzID0gMjAwMDtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBQcm9qZWN0IFB1cnBvc2UgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICBQcm9qZWN0IFB1cnBvc2UgJiBEZXNjcmlwdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgbWItM1wiPlxuICAgICAgICAgIERlc2NyaWJlIHdoYXQgeW91ciB3ZWJzaXRlIGlzIGZvciwgaXRzIHRhcmdldCBhdWRpZW5jZSwga2V5IGZlYXR1cmVzLCBhbmQgYW55IHNwZWNpZmljIHJlcXVpcmVtZW50cy4gXG4gICAgICAgICAgVGhlIG1vcmUgZGV0YWlsIHlvdSBwcm92aWRlLCB0aGUgYmV0dGVyIHRoZSBBSSBjYW4gZ2VuZXJhdGUgeW91ciB3ZWJzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncHJvamVjdFB1cnBvc2UnKX1cbiAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogSSB3YW50IHRvIGNyZWF0ZSBhbiBlLWNvbW1lcmNlIHdlYnNpdGUgZm9yIHNlbGxpbmcgaGFuZG1hZGUgamV3ZWxyeS4gSXQgc2hvdWxkIGhhdmUgYSBwcm9kdWN0IGNhdGFsb2cgd2l0aCBmaWx0ZXJpbmcsIGEgc2hvcHBpbmcgY2FydCwgdXNlciBhdXRoZW50aWNhdGlvbiwgYW5kIGEgY2hlY2tvdXQgcHJvY2Vzcy4gVGhlIGRlc2lnbiBzaG91bGQgYmUgZWxlZ2FudCBhbmQgbW9kZXJuLCB0YXJnZXRpbmcgd29tZW4gYWdlZCAyNS00NS4uLlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMyB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcHVycGxlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtMjAwIHRyYW5zaXRpb24tYWxsIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZXJyb3JzLnByb2plY3RQdXJwb3NlICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC02MDBcIj57ZXJyb3JzLnByb2plY3RQdXJwb3NlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXhzICR7Y2hhcmFjdGVyQ291bnQgPiBtYXhDaGFyYWN0ZXJzID8gJ3RleHQtcmVkLTYwMCcgOiBjaGFyYWN0ZXJDb3VudCA+IG1heENoYXJhY3RlcnMgKiAwLjkgPyAndGV4dC15ZWxsb3ctNjAwJyA6ICd0ZXh0LWdyYXktNTAwJ31gfT5cbiAgICAgICAgICAgIHtjaGFyYWN0ZXJDb3VudH0gLyB7bWF4Q2hhcmFjdGVyc30gY2hhcmFjdGVyc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZyb250ZW5kIEZyYW1ld29yayAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPENvZGUyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgIEZyb250ZW5kIEZyYW1ld29ya1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTNcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgeyB2YWx1ZTogJ3JlYWN0JywgbGFiZWw6ICdSZWFjdCcsIGRlc2M6ICdNb2Rlcm4sIGNvbXBvbmVudC1iYXNlZCBVSSBsaWJyYXJ5JyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ3Z1ZScsIGxhYmVsOiAnVnVlLmpzJywgZGVzYzogJ1Byb2dyZXNzaXZlIEphdmFTY3JpcHQgZnJhbWV3b3JrJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2FuZ3VsYXInLCBsYWJlbDogJ0FuZ3VsYXInLCBkZXNjOiAnRnVsbC1mZWF0dXJlZCBUeXBlU2NyaXB0IGZyYW1ld29yaycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdzdmVsdGUnLCBsYWJlbDogJ1N2ZWx0ZScsIGRlc2M6ICdDb21waWxlLXRpbWUgcmVhY3RpdmUgZnJhbWV3b3JrJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ25leHRqcycsIGxhYmVsOiAnTmV4dC5qcycsIGRlc2M6ICdSZWFjdCBmcmFtZXdvcmsgd2l0aCBTU1InIH0sXG4gICAgICAgICAgXS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkRnJvbnRlbmQgPT09IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyBib3JkZXItMiBiZy13aGl0ZSBwLTQgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LW1kICR7XG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1ibHVlLTUwMCBiZy1ibHVlLTUwIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ibHVlLTMwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZnJvbnRlbmRGcmFtZXdvcmsnKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzci1vbmx5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG10LTAuNSB3LTUgaC01IHJvdW5kZWQtZnVsbCBib3JkZXItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWJsdWUtNTAwIGJnLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAndGV4dC1ibHVlLTkwMCcgOiAndGV4dC1ncmF5LTkwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbXQtMSB0ZXh0LXNtICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA/ICd0ZXh0LWJsdWUtNzAwJyA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5kZXNjfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlcnJvcnMuZnJvbnRlbmRGcmFtZXdvcmsgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LXJlZC02MDBcIj57ZXJyb3JzLmZyb250ZW5kRnJhbWV3b3JrLm1lc3NhZ2V9PC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCYWNrZW5kIEZyYW1ld29yayAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPERhdGFiYXNlIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgIEJhY2tlbmQgRnJhbWV3b3JrXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnZXhwcmVzcycsIGxhYmVsOiAnRXhwcmVzcy5qcycsIGRlc2M6ICdNaW5pbWFsIE5vZGUuanMgZnJhbWV3b3JrJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2Zhc3RhcGknLCBsYWJlbDogJ0Zhc3RBUEknLCBkZXNjOiAnTW9kZXJuIFB5dGhvbiBBUEkgZnJhbWV3b3JrJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2RqYW5nbycsIGxhYmVsOiAnRGphbmdvJywgZGVzYzogJ0Z1bGwtc3RhY2sgUHl0aG9uIGZyYW1ld29yaycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdmbGFzaycsIGxhYmVsOiAnRmxhc2snLCBkZXNjOiAnTGlnaHR3ZWlnaHQgUHl0aG9uIGZyYW1ld29yaycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICduZXN0anMnLCBsYWJlbDogJ05lc3RKUycsIGRlc2M6ICdQcm9ncmVzc2l2ZSBOb2RlLmpzIGZyYW1ld29yaycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdub25lJywgbGFiZWw6ICdObyBCYWNrZW5kJywgZGVzYzogJ1N0YXRpYyBzaXRlIG9ubHknIH0sXG4gICAgICAgICAgXS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQmFja2VuZCA9PT0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIGJvcmRlci0yIGJnLXdoaXRlIHAtNCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbWQgJHtcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWdyZWVuLTUwMCBiZy1ncmVlbi01MCBzaGFkb3ctbWQnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JlZW4tMzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdiYWNrZW5kRnJhbWV3b3JrJyl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Itb25seVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtdC0wLjUgdy01IGgtNSByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1ncmVlbi01MDAgYmctZ3JlZW4tNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAndGV4dC1ncmVlbi05MDAnIDogJ3RleHQtZ3JheS05MDAnXG4gICAgICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG10LTEgdGV4dC1zbSAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAndGV4dC1ncmVlbi03MDAnIDogJ3RleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Vycm9ycy5iYWNrZW5kRnJhbWV3b3JrICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1yZWQtNjAwXCI+e2Vycm9ycy5iYWNrZW5kRnJhbWV3b3JrLm1lc3NhZ2V9PC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdHlsaW5nIEFwcHJvYWNoICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8UGFsZXR0ZSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICBTdHlsaW5nIEFwcHJvYWNoXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IHZhbHVlOiAndGFpbHdpbmQnLCBsYWJlbDogJ1RhaWx3aW5kIENTUycsIGRlc2M6ICdVdGlsaXR5LWZpcnN0IENTUyBmcmFtZXdvcmsnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnYm9vdHN0cmFwJywgbGFiZWw6ICdCb290c3RyYXAnLCBkZXNjOiAnUG9wdWxhciBjb21wb25lbnQgbGlicmFyeScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdjc3MnLCBsYWJlbDogJ0N1c3RvbSBDU1MnLCBkZXNjOiAnV3JpdGUgeW91ciBvd24gc3R5bGVzJyB9LFxuICAgICAgICAgIF0ubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZFN0eWxpbmcgPT09IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyBib3JkZXItMiBiZy13aGl0ZSBwLTQgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LW1kICR7XG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1wdXJwbGUtNTAwIGJnLXB1cnBsZS01MCBzaGFkb3ctbWQnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItcHVycGxlLTMwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcignc3R5bGluZycpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNyLW9ubHlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXQtMC41IHctNSBoLTUgcm91bmRlZC1mdWxsIGJvcmRlci0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTAgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItcHVycGxlLTUwMCBiZy1wdXJwbGUtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPyAndGV4dC1wdXJwbGUtOTAwJyA6ICd0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BtdC0xIHRleHQtc20gJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID8gJ3RleHQtcHVycGxlLTcwMCcgOiAndGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24uZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXJyb3JzLnN0eWxpbmcgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LXJlZC02MDBcIj57ZXJyb3JzLnN0eWxpbmcubWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIER5bmFtaWMgRmVhdHVyZXMgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxaYXAgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgRHluYW1pYyBGZWF0dXJlcyAoT3B0aW9uYWwpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnYXV0aCcsIGxhYmVsOiAnQXV0aGVudGljYXRpb24nLCBkZXNjOiAnVXNlciBsb2dpbi9zaWdudXAnLCBpY29uOiBTaGllbGQgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdkYXRhYmFzZScsIGxhYmVsOiAnRGF0YWJhc2UnLCBkZXNjOiAnRGF0YSBwZXJzaXN0ZW5jZScsIGljb246IERhdGFiYXNlIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnYXBpJywgbGFiZWw6ICdBUEkgRW5kcG9pbnRzJywgZGVzYzogJ1JFU1RmdWwgQVBJJywgaWNvbjogQ29kZTIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdyZWFsdGltZScsIGxhYmVsOiAnUmVhbC10aW1lJywgZGVzYzogJ1dlYlNvY2tldCB1cGRhdGVzJywgaWNvbjogUmFkaW8gfSxcbiAgICAgICAgICBdLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBJY29uID0gb3B0aW9uLmljb247XG4gICAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBzZWxlY3RlZEZlYXR1cmVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIGJvcmRlci0yIHAtNCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgaXNDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1ibHVlLTUwMCBiZy1ibHVlLTUwJ1xuICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgaG92ZXI6Ym9yZGVyLWJsdWUtMzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdmZWF0dXJlcycpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNyLW9ubHlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2B3LTUgaC01ICR7aXNDaGVja2VkID8gJ3RleHQtYmx1ZS02MDAnIDogJ3RleHQtZ3JheS00MDAnfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntvcHRpb24uZGVzY308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFN1Ym1pdCBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTYwMCB0by1waW5rLTYwMCBweC00IHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LWxnIGhvdmVyOmZyb20tcHVycGxlLTcwMCBob3Zlcjp0by1waW5rLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgID5cbiAgICAgICAge2lzU3VibWl0dGluZyA/ICdHZW5lcmF0aW5nIFdlYnNpdGUuLi4nIDogJ0dlbmVyYXRlIFdlYnNpdGUgQ29kZSd9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvUHJlZmVyZW5jZXNGb3JtLnRzeCJ9