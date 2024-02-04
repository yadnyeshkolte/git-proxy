import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJs from "@eslint/js";

// generated from yarn create @eslint/config@latest
// @eslint/create-config: v1.2.0
// ✔ How would you like to use ESLint? · syntax
// ✔ What type of modules does your project use? · commonjs
// ✔ Which framework does your project use? · react
// ✔ Does your project use TypeScript? · typescript
// ✔ Where does your code run? · browser, node
// The config that you've selected requires the following dependencies:

// eslint@9.x, globals, @eslint/js, typescript-eslint, eslint-plugin-react
// ✔ Would you like to install them now? · No / Yes
// ✔ Which package manager do you want to use? · yarn

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: {...globals.browser, ...globals.node, ...globals.mocha} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];