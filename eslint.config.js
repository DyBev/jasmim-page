import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  globalIgnores([ "./dist/**" ]),

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // React Refresh (Vite-friendly)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      // Good TypeScript hygiene
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ]
    }
  },

  {
    files: ["**/*.{tsx,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn"
    }
  },

  {
    files: [
      "**/+data.ts",
      "**/+route.ts",
      "**/+config.ts",
      "**/+onBeforeRender.ts"
    ],
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "react-refresh/only-export-components": "off"
    }
  },

  prettier
]);
