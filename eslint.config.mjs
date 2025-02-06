import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import globals from "globals";

export default tsEslint.config({
  extends: [eslint.configs.recommended, ...tsEslint.configs.recommended],
  files: ["**/*.ts", "**/*.tsx"],
  ignores: ["**/dist/**", "**/node_modules/**", "**/build/**", "*.js"],
  rules: {
    //"no-console": "error",
  },
  languageOptions: {
    parser: tsEslint.parser, // 规则解析器
    globals: {
      ...globals.node, // 全局变量
    },
    parserOptions: {
      project: ["./tsconfig.eslint.json", "**/*/tsconfig.json"], //有哪些子包是你的项目
      //tsconfigRootDir: __dirname, // 你的tsconfig.json文件在哪个目录
    },
  },
});
