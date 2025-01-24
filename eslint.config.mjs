import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Relax the following rules globally
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change from 'error' to 'warn'
        { vars: "all", args: "none", ignoreRestSiblings: true },
      ],
      "@typescript-eslint/no-explicit-any": "off", // Disable 'no-explicit-any'
    },
  },
];

export default eslintConfig;
