# Notes

## Project Structure

```bash
mkdir src src/config src/constants src/routes src/controllers src/db src/middlewares src/models src/routes src/utils types

touch README.md src/server.ts src/app.ts .env .env.sample .gitignore .prettierrc .prettierignore .editorconfig
```

## Install Dependencies & Setups

1. Project init, files & config setup

    ```bash
    npm init -y

    npm i -DE typescript @types/node tsx prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged
    ```

2. Express + Middlewares Setup - [ref blog](https://blog.logrocket.com/express-typescript-node/)

    ```bash
    npm install express --save
    npm i --save-dev @types/express
    ```

## Configuration Files

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

### 7. `package.json` scripts

```json
"type": "module",
"scripts": {
  "dev": "tsx --env-file=.env src/server.ts",
  "dev:watch": "tsx watch --env-file=.env src/server.ts",
  "dev:debug": "tsx watch --inspect --env-file=.env src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "format": "prettier --write .",
  "lint": "eslint src --ext .ts",
  "lint:fix": "eslint src --ext .ts --fix",
  "prepare": "husky"
 },
"lint-staged": {
    "**/*": "prettier --write --ignore-unknown",
    "**/*.{ts,tsx,js,jsx}": "eslint --fix"
},
```

### 8. `.vscode/launch.json`

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Debug: Backend (tsx server.ts)",
			"type": "node",
			"request": "launch",
			"runtimeExecutable": "tsx",
			"args": ["watch", "--env-file=.env", "src/server.ts"],
			"cwd": "${workspaceFolder}",
			"skipFiles": ["<node_internals>/**"]
		}
	]
}
```

### 9. `create-static-files.sh`

```bash
#!/bin/bash

# GPT generated

# Create folders
mkdir -p public/{css,js,data,images,media}

# HTML
cat > public/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Static Test</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Hello Static World!</h1>

  <img src="/images/logo.png" alt="Logo" width="150" />
  <img src="/images/photo.jpg" alt="Photo" width="150" />
  <img src="/images/icon.svg" alt="SVG Icon" width="100" />

  <div id="output"></div>

  <script src="/js/app.js"></script>
</body>
</html>
EOF

# CSS
cat > public/css/style.css <<EOF
body {
  background-color: #f0f0f0;
  font-family: sans-serif;
  text-align: center;
}
img {
  margin: 10px;
}
h1 {
  color: darkblue;
}
EOF

# JS
cat > public/js/app.js <<EOF
console.log("JS loaded from static!");

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  output.innerText = "This message was inserted by app.js!";
});
EOF

# JSON
cat > public/data/data.json <<EOF
{
  "name": "Loki",
  "role": "Developer"
}
EOF

# SVG
cat > public/images/icon.svg <<EOF
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
EOF

# Download real assets
curl -o public/images/logo.png https://dummyimage.com/150x150/000/fff.png\&text=Logo
curl -o public/images/photo.jpg https://dummyimage.com/200x100/aaa/000.jpg\&text=Photo
curl -o public/media/resume.pdf https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
curl -o public/media/song.mp3 https://file-examples.com/storage/fe740ac4e1bbf0134e1fa0e/2017/11/file_example_MP3_700KB.mp3
curl -o public/media/video.mp4 https://file-examples.com/storage/fe740ac4e1bbf0134e1fa0e/2018/04/file_example_MP4_640_3MG.mp4
curl -o public/favicon.ico https://www.google.com/favicon.ico

echo "All static files organized and created in ./public"
```

## Steps

1. Project initialisation, files setup & config
2. Debugger & environment variables setup
3. Express & middleware setup with test routes for various file types

## References

- [TypeScript Docs](https://www.typescriptlang.org/download/)
- [ESLint Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [Prettier Docs](https://prettier.io/docs/install)
- [Prettier Plugin](https://github.com/prettier/eslint-config-prettier)
- [tsx GitHub](https://github.com/esbuild-kit/tsx)
- [TypeScript + Node (native)](https://nodejs.org/en/learn/typescript/run-natively)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Husky](https://typicode.github.io/husky/get-started.html)
- [`tsconfig.json`](https://nodejs.org/api/typescript.html#type-stripping)
- [Express Docs](https://expressjs.com/en/5x/api.html)

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
