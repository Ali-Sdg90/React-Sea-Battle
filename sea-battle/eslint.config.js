import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    // Ignore folders like build output
    globalIgnores(["dist", "node_modules", "public"]),

    {
        files: ["**/*.{js,jsx}"], // Apply to JS and JSX files

        extends: [
            js.configs.recommended, // Base JS rules
            "plugin:react/recommended", // React specific rules
            reactHooks.configs["recommended-latest"], // Rules for hooks
            reactRefresh.configs.vite, // HMR support
            "plugin:prettier/recommended", // Prettier integration
        ],

        plugins: ["react", "react-hooks", "prettier"],

        languageOptions: {
            ecmaVersion: "latest",
            globals: { ...globals.browser },
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },

        settings: {
            react: { version: "detect" },
        },

        rules: {
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }], // ignore Components & Constants
            "react/prop-types": "off", // no prop-types
            "react/react-in-jsx-scope": "off", // React 18+ doesn't require import React
            "prettier/prettier": ["error", { singleQuote: false, semi: true }],
            eqeqeq: ["error", "always"], // always use ===
            curly: ["error", "all"], // always use {}
            "no-console": ["warn"], // warn for console.log
        },
    },
]);
