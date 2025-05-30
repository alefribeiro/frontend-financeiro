import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import pluginQuery from '@tanstack/eslint-plugin-query'

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...pluginQuery.configs['flat/recommended'],
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off"
    }
  }
];

export default eslintConfig;
