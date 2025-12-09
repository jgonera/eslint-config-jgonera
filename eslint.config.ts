import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      // Let Prettier handle all indentation
      indent: "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
)
