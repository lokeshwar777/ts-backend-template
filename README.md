# 🚀 Backend App Notes

## 📁 Project Structure

```bash
mkdir src routes controllers middlewares config db

touch README.md src/server.ts .env .env.sample .gitignore .prettierrc .prettierignore .editorconfig
```

## 📦 Install Dependencies & Setups

```bash
npm init -y

npm i -DE typescript @types/node tsx prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged
```

## ⚙️ Configuration Files

### 1. `tsconfig.json`

```bash
npx tsc --init
```

Update:

```jsonc
{
	"compilerOptions": {
		"target": "ES2024",
		"module": "NodeNext",
		"moduleResolution": "nodenext",
		"rootDir": "./src",
		"outDir": "./dist",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true,
	},
}
```

### 2. `.prettierrc`

```json
{
	"experimentalTernaries": true,
	"tabWidth": 4,
	"useTabs": true,
	"jsxSingleQuote": true,
	"singleAttributePerLine": true
}
```

### 3. `.prettierignore`

```
node_modules
dist
build
coverage
*.log
package-lock.json
```

### 4. `.gitignore`

```
node_modules/
dist/
.env
*.log
**/.DS_Store
coverage/
```

### 5. `.editorconfig`

```ini
root = true

[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### 6. `eslint.config.js` or `eslint.config.mjs`

> javascript + problems + ESM + TS + node + gfm + npm

```bash
npm init @eslint/config@latest
```

Update:

```js
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
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
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
```

### 6. `.husky/pre-commit`

```bash
npx husky init
```

Update:

```bash
echo "Husky (pre-commit hook) performing linting & formatting on staged files..."
npx lint-staged
```

## 🧪 Scripts in `package.json`

```json
"type": "module",
"scripts": {
  "dev": "tsx src/server.ts",
  "dev:watch": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "format": "prettier --write .",
  "lint": "eslint src --ext .ts",
  "lint:fix": "eslint src --ext .ts --fix"
},
"lint-staged": {
    "**/*": "prettier --write --ignore-unknown",
    "**/*.{ts,tsx,js,jsx}": "eslint --fix"
},
```

## 📚 References

- [TypeScript Docs](https://www.typescriptlang.org/download/)
- [ESLint Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [Prettier Docs](https://prettier.io/docs/install)
- [Prettier Plugin](https://github.com/prettier/eslint-config-prettier)
- [tsx GitHub](https://github.com/esbuild-kit/tsx)
- [TypeScript + Node (native)](https://nodejs.org/en/learn/typescript/run-natively)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Husky](https://typicode.github.io/husky/get-started.html)
- [`tsconfig.json`](https://nodejs.org/api/typescript.html#type-stripping)

<!-- GPT beautified notes -->

<!-- Own Notes start's here -->
<!-- # Backend App Notes -->
<!-- ## Commands followed

1. `mkdir backend-learn-app`
2. `cd backend-learn-app/`
3. `mkdir src routes controllers middlewares config db`
4. `touch README.md src/server.ts .env .env.sample .gitignore .prettierrc .prettierignore`
5. `npm init -y` - creates `package.json`
6. `npm i -DE typescript @types/node tsx prettier eslint-config-prettier eslint-plugin-prettier` - (exact dev deps)
7. `tsc --init` - creates `tsconfig.json`
8. `npm init @eslint/config@latest` + javascript + problems + ESM + TS + node + gfm + npm
9. (not required) `npx husky init`
10. configure/customise `package.json`, `.gitignore`, `.prettierrc`
    - flag - `--experimental-transform-types"` or
    - module - `ts-node`

## References

[TS](https://www.typescriptlang.org/download/)
[Prettier](https://prettier.io/docs/install)
[Prettier Plugin](https://github.com/prettier/eslint-config-prettier)
[node](https://nodejs.org/en/learn/typescript/run-natively)
[ESLint](https://eslint.org/docs/latest/use/getting-started)
[husky](https://typicode.github.io/husky/get-started.html)
[`tsconfig.json`](https://nodejs.org/api/typescript.html#type-stripping)
-->

<!-- markdownlint-disable MD033 -->

<!--
<details><summary><code>.prettierrc</code></summary>

```json
{
    "experimentalTernaries": true,
    "tabWidth": 4,
    "useTabs": true,
    "jsxSingleQuote":true,
    "singleAttributePerLine":true
}
```

</details>

<details><summary><code>package.json</code>(additional config) - <a href='https://docs.npmjs.com/cli/v11/configuring-npm/package-json'>docs</a> </summary>

```json
{
    "scripts": {
  "dev": "tsx src/server.ts",
  "format": "prettier --write .",
  "lint": "eslint src --ext .ts",
  "lint:fix": "eslint src --ext .ts --fix"
 },
    "type": "module",
}
```

</details>

<details><summary><code>.gitignore</code></summary>

```markdown
node_modules/
dist/
build/
.env
*.log
.DS_Store
coverage/
```

</details>
<details><summary><code>.prettierignore</code></summary>

```markdown
node_modules
dist
build
coverage
*.log
package-lock.json
yarn.lock
pnpm-lock.yaml
```
 -->
