import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	// Common JS & TS rules
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		languageOptions: {
			globals: globals.node,
		},
		plugins: {
			js,
			prettier: prettierPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			"no-constant-condition": "error",
			"no-unreachable": "error",
			"no-duplicate-case": "error",
			"no-fallthrough": "error",
			"no-cond-assign": "error",
			"no-eval": "error",
			"no-implied-eval": "error",
			"no-new-func": "error",
			"no-shadow": "warn",
			"no-undef": "error",
			"no-unused-vars": "off",
			"no-empty-function": "warn",
			eqeqeq: ["error", "always"],
			curly: "error",
			"default-case": "warn",
			"prettier/prettier": "error",
		},
	},

	// TypeScript-specific rules
	{
		files: ["**/*.{ts,mts,cts}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			...tseslint.configs.strict.rules,
			...tseslint.configs.stylistic.rules,
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/explicit-function-return-type": "warn",
			"@typescript-eslint/no-floating-promises": "error",
			"@typescript-eslint/require-await": "error",
			"@typescript-eslint/consistent-type-imports": "warn",
		},
	},
]);
